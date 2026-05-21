'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const STATUS_COLORS: Record<string, string> = {
  open: 'bg-blue-50 text-blue-700',
  'in-progress': 'bg-yellow-50 text-yellow-700',
  resolved: 'bg-green-50 text-green-700',
  closed: 'bg-gray-100 text-gray-600',
};

export default function TicketDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [ticket, setTicket] = useState<any>(null);
  const [reply, setReply] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  async function loadTicket() {
    const res = await fetch(`/api/support-tickets/${id}`);
    const data = await res.json();
    setTicket(data.data ?? data);
  }

  useEffect(() => { loadTicket(); }, [id]);

  async function handleReply(e: React.FormEvent) {
    e.preventDefault();
    if (!reply.trim()) return;
    setSending(true);
    setError('');
    const res = await fetch(`/api/support-tickets/${id}/reply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: reply }),
    });
    setSending(false);
    if (res.ok) {
      setReply('');
      loadTicket();
    } else {
      const d = await res.json();
      setError(d.error ?? 'Failed to send reply.');
    }
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

  const replies = ticket.replies ?? ticket.ticket_replies ?? [];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/my-account/support" className="text-sm text-gray-400 hover:text-[#ec7161] transition-colors">
          ← Back
        </Link>
        <h1 className="text-xl font-bold text-[#0F1112] flex-1 truncate">{ticket.subject}</h1>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${STATUS_COLORS[ticket.status] ?? 'bg-gray-100 text-gray-600'}`}>
          {ticket.status}
        </span>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
          <span>#{ticket.id}</span>
          <span className="capitalize">Priority: <span className="font-medium text-gray-600">{ticket.priority}</span></span>
        </div>
        <div className="prose prose-sm max-w-none text-sm text-gray-700 whitespace-pre-wrap">
          {ticket.description}
        </div>
      </div>

      {replies.length > 0 && (
        <div className="space-y-3">
          {replies.map((r: any, i: number) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-600">{r.author ?? r.created_by ?? 'Support'}</span>
                <span className="text-xs text-gray-400">{r.created_at ? new Date(r.created_at).toLocaleDateString() : ''}</span>
              </div>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{r.description ?? r.message}</p>
            </div>
          ))}
        </div>
      )}

      {ticket.status !== 'closed' && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-[#0F1112] mb-3">Add Reply</h2>
          {error && <div className="mb-3 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">{error}</div>}
          <form onSubmit={handleReply} className="space-y-3">
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              rows={4}
              placeholder="Type your reply…"
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending || !reply.trim()}
              className="px-6 py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60"
            >
              {sending ? 'Sending…' : 'Send reply'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
