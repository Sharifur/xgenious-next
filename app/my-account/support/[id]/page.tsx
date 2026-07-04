'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { reportCrash } from '@/lib/crash';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const RichEditor = dynamic(() => import('@/components/RichEditor'), { ssr: false });

// Backend SupportTicketStatusEum: 0=Open 1=In Progress 2=Close 3=Replied 4=Waiting For Reply 5=Queue
const STATUS_MAP: Record<string | number, { label: string; cls: string }> = {
  0: { label: 'Open',              cls: 'bg-blue-50 text-blue-700' },
  1: { label: 'In Progress',       cls: 'bg-yellow-50 text-yellow-700' },
  2: { label: 'Closed',            cls: 'bg-gray-100 text-gray-500' },
  3: { label: 'Replied',           cls: 'bg-green-50 text-green-700' },
  4: { label: 'Waiting For Reply', cls: 'bg-purple-50 text-purple-700' },
  5: { label: 'Queue',             cls: 'bg-indigo-50 text-indigo-700' },
  open:                { label: 'Open',              cls: 'bg-blue-50 text-blue-700' },
  'in-progress':       { label: 'In Progress',       cls: 'bg-yellow-50 text-yellow-700' },
  close:               { label: 'Closed',            cls: 'bg-gray-100 text-gray-500' },
  closed:              { label: 'Closed',            cls: 'bg-gray-100 text-gray-500' },
  replied:             { label: 'Replied',           cls: 'bg-green-50 text-green-700' },
  'waiting-for-reply': { label: 'Waiting For Reply', cls: 'bg-purple-50 text-purple-700' },
  queue:               { label: 'Queue',             cls: 'bg-indigo-50 text-indigo-700' },
};

function cleanSubject(subject: string): string {
  return subject.replace(/\s*\[[^\]]+\]/g, '').trim();
}

function extractFluentForm(html: string): Record<string, string> | null {
  if (!html.includes('ff_all_data')) return null;
  const result: Record<string, string> = {};
  const re = /<strong[^>]*>([^<]+)<\/strong><\/th><\/tr>[\s\S]*?<td[^>]*>([\s\S]*?)<\/td>/g;
  for (const m of html.matchAll(re)) {
    const key = m[1].trim();
    const val = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (key && val) result[key] = val;
  }
  return Object.keys(result).length > 0 ? result : null;
}

function Avatar({ name, isSupport, imageUrl }: { name: string; isSupport: boolean; imageUrl?: string }) {
  if (imageUrl) {
    return <img src={imageUrl} alt={name} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />;
  }
  return (
    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${isSupport ? 'bg-[#ec7161]' : 'bg-gray-400'}`}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

export default function TicketDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [ticket, setTicket] = useState<any>(null);
  const [reply, setReply] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [closing, setClosing] = useState(false);
  const [confirmClose, setConfirmClose] = useState(false);

  async function loadTicket() {
    if (!id || id === 'undefined') return;
    try {
      const res = await fetch(`/api/support-tickets/${id}`);
      if (!res.ok) {
        reportCrash({
          type: 'API error response',
          message: `HTTP ${res.status} from support ticket API`,
          apiEndpoint: `/api/support-tickets/${id}`,
          operation: 'loadTicket',
          httpStatus: String(res.status),
        });
        return;
      }
      const data = await res.json();
      setTicket(data.data ?? data);
    } catch (err) {
      reportCrash({
        type: 'API fetch failure',
        message: err instanceof Error ? err.message : 'Failed to fetch',
        stack: err instanceof Error ? (err.stack ?? '') : '',
        apiEndpoint: `/api/support-tickets/${id}`,
        operation: 'loadTicket',
      });
    }
  }

  useEffect(() => {
    loadTicket();
    const interval = setInterval(loadTicket, 30_000);
    return () => clearInterval(interval);
  }, [id]);

  async function handleClose() {
    setClosing(true);
    setConfirmClose(false);
    try {
      const res = await fetch(`/api/support-tickets/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 2 }),
      });
      if (!res.ok) {
        reportCrash({
          type: 'API error response',
          message: `HTTP ${res.status} closing ticket`,
          apiEndpoint: `/api/support-tickets/${id}`,
          operation: 'closeTicket',
          httpStatus: String(res.status),
        });
      }
    } catch (err) {
      reportCrash({
        type: 'API fetch failure',
        message: err instanceof Error ? err.message : 'Failed to fetch',
        stack: err instanceof Error ? (err.stack ?? '') : '',
        apiEndpoint: `/api/support-tickets/${id}`,
        operation: 'closeTicket',
      });
    }
    setClosing(false);
    loadTicket();
  }

  async function handleReply(e: React.FormEvent) {
    e.preventDefault();
    const text = reply.replace(/<[^>]*>/g, '').trim();
    if (!text) return;
    setSending(true);
    setError('');
    try {
      const res = await fetch(`/api/support-tickets/${id}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: reply, userId: ticket?.created_by?.id }),
      });
      if (res.ok) {
        setReply('');
        loadTicket();
      } else {
        const d = await res.json().catch(() => ({}));
        reportCrash({
          type: 'API error response',
          message: `HTTP ${res.status} posting reply — ${d.error ?? 'no detail'}`,
          apiEndpoint: `/api/support-tickets/${id}/reply`,
          operation: 'submitReply',
          httpStatus: String(res.status),
        });
        setError(d.error ?? 'Failed to send reply.');
      }
    } catch (err) {
      reportCrash({
        type: 'API fetch failure',
        message: err instanceof Error ? err.message : 'Failed to fetch',
        stack: err instanceof Error ? (err.stack ?? '') : '',
        apiEndpoint: `/api/support-tickets/${id}/reply`,
        operation: 'submitReply',
      });
      setError('Network error — please try again.');
    }
    setSending(false);
  }

  if (!ticket) {
    return (
      <div className="space-y-4">
        <div className="h-6 bg-gray-100 rounded w-1/3 animate-pulse" />
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3">
          <div className="h-4 bg-gray-100 rounded w-2/3 animate-pulse" />
          <div className="h-4 bg-gray-100 rounded w-full animate-pulse" />
        </div>
      </div>
    );
  }

  const allReplies: any[] = ticket.replies ?? ticket.ticket_replies ?? [];
  const customerId = ticket.created_by?.id;
  const replies = allReplies.filter((r) => !r.description?.includes('ff_all_data'));

  const stat = STATUS_MAP[ticket.status] ?? STATUS_MAP[0];
  const subject = cleanSubject(ticket.subject ?? '');

  const descFields = extractFluentForm(ticket.description ?? '');

  const PRIORITY_MAP: Record<string | number, { label: string; cls: string }> = {
    0: { label: 'Low',    cls: 'text-gray-500' },
    1: { label: 'Medium', cls: 'text-yellow-700' },
    2: { label: 'High',   cls: 'text-orange-600' },
    3: { label: 'Urgent', cls: 'text-red-600' },
  };
  const prio = PRIORITY_MAP[ticket.priority] ?? PRIORITY_MAP[1];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Link href="/my-account/support" className="text-sm text-gray-400 hover:text-[#ec7161] transition-colors flex-shrink-0">
            ← Back
          </Link>
          <h1 className="text-base font-bold text-[#0F1112] flex-1 min-w-0">{subject}</h1>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize flex-shrink-0 ${stat.cls}`}>
            {stat.label}
          </span>
          {ticket.status !== 2 && ticket.status !== 'close' && ticket.status !== 'closed' && (
            confirmClose ? (
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button
                  onClick={handleClose}
                  disabled={closing}
                  className="text-xs px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-60 font-medium"
                >
                  {closing ? 'Closing…' : 'Confirm close'}
                </button>
                <button
                  onClick={() => setConfirmClose(false)}
                  className="text-xs px-2.5 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-500"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmClose(true)}
                className="text-xs px-3 py-1.5 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition-colors flex-shrink-0 font-medium cursor-pointer"
              >
                Close ticket
              </button>
            )
          )}
        </div>
        {/* Meta bar */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pl-1 text-xs text-gray-400">
          <span className="font-medium text-gray-500">#{ticket.id}</span>
          {ticket.date && (
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Opened {ticket.date}
            </span>
          )}
          <span className={`font-medium ${prio.cls}`}>{prio.label} priority</span>
          {ticket.user?.full_name && (
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {ticket.user.full_name}
            </span>
          )}
        </div>
      </div>

      {/* Original message */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
          <Avatar
            name={ticket.created_by?.full_name ?? 'Customer'}
            isSupport={false}
            imageUrl={ticket.created_by?.image?.url}
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-700 capitalize">{ticket.created_by?.full_name ?? 'Customer'}</p>
            <p className="text-xs text-gray-400">{ticket.created_by?.email}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs text-gray-500">#{ticket.id}</p>
            {ticket.date && <p className="text-xs text-gray-400">{ticket.date}{ticket.time ? ` · ${ticket.time}` : ''}</p>}
          </div>
        </div>

        {descFields ? (
          <div className="space-y-4">
            {/* Metadata chips */}
            <div className="flex flex-wrap gap-2">
              {descFields['Product'] && (
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">
                  Product: {descFields['Product']}
                </span>
              )}
              {descFields['Query Type'] && (
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">
                  {descFields['Query Type']}
                </span>
              )}
              {descFields['Purchase Code'] && (
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-mono">
                  {descFields['Purchase Code']}
                </span>
              )}
            </div>
            {/* Actual description */}
            <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {descFields['Description'] ?? ''}
            </p>
          </div>
        ) : (
          <div
            className="prose prose-sm max-w-none text-sm text-gray-700 [&_img]:max-w-full [&_img]:rounded-lg [&_a]:text-[#ec7161] [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4"
            dangerouslySetInnerHTML={{ __html: ticket.description ?? '' }}
          />
        )}
      </div>

      {/* Replies */}
      {replies.length > 0 && (
        <div className="space-y-3">
          {replies.map((r: any) => {
            const isSupport = r.user?.id !== customerId;
            const authorName = r.user?.full_name ?? (isSupport ? 'Support' : 'Customer');
            const avatarUrl = r.user?.image?.url;
            return (
              <div key={r.id} className={`rounded-2xl border p-5 ${isSupport ? 'bg-[#ec7161]/5 border-[#ec7161]/20' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-black/5">
                  <div className="flex items-center gap-2">
                    <Avatar name={authorName} isSupport={isSupport} imageUrl={avatarUrl} />
                    <span className="text-xs font-semibold text-gray-700 capitalize">{authorName}</span>
                    {isSupport && <span className="text-xs px-1.5 py-0.5 bg-[#ec7161]/10 text-[#ec7161] rounded font-medium">Support</span>}
                  </div>
                  <span className="text-xs text-gray-400">
                    {r.date}{r.time ? ` · ${r.time}` : ''}
                  </span>
                </div>
                <div
                  className="prose prose-sm max-w-none text-sm text-gray-700 [&_img]:max-w-full [&_img]:rounded-lg [&_a]:text-[#ec7161] [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4"
                  dangerouslySetInnerHTML={{ __html: r.description ?? '' }}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Reply box */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-[#0F1112] mb-3">Add Reply</h2>
          {error && <div className="mb-3 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">{error}</div>}
          <form onSubmit={handleReply} className="space-y-3">
            <RichEditor
              value={reply}
              onChange={setReply}
              placeholder=""
            />
            <button
              type="submit"
              disabled={sending || !reply.replace(/<[^>]*>/g, '').trim()}
              className="px-6 py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending…' : 'Send reply'}
            </button>
          </form>
        </div>
    </div>
  );
}
