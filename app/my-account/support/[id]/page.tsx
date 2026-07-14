'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { reportCrash, isNetworkError } from '@/lib/crash';
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

type MediaAttachment = {
  id: number;
  title: string;
  ext: string;
  size: number;
  url: string;
  media_type: string;
};

function formatBytes(bytes: number): string {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** i).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function ImageLightbox({ attachment, onClose }: { attachment: MediaAttachment; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const reset = useCallback(() => { setZoom(1); setPos({ x: 0, y: 0 }); }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom(z => Math.min(Math.max(z + (e.deltaY > 0 ? -0.15 : 0.15), 0.5), 5));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
  }, [zoom, pos]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return;
    setPos({ x: dragStart.current.px + (e.clientX - dragStart.current.x), y: dragStart.current.py + (e.clientY - dragStart.current.y) });
  }, [dragging]);

  const handleMouseUp = useCallback(() => setDragging(false), []);

  const handleDownload = useCallback(() => {
    const a = document.createElement('a');
    a.href = attachment.url;
    a.download = attachment.title || 'download';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [attachment]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') setZoom(z => Math.min(z + 0.25, 5));
      if (e.key === '-') setZoom(z => Math.max(z - 0.25, 0.5));
      if (e.key === '0') reset();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose, reset]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      {/* Top toolbar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/60 to-transparent z-10" onClick={e => e.stopPropagation()}>
        <p className="text-white text-sm font-medium truncate max-w-[60%]">{attachment.title}</p>
        <div className="flex items-center gap-2">
          <button onClick={() => setZoom(z => Math.min(z + 0.25, 5))} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" title="Zoom in">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </button>
          <button onClick={() => setZoom(z => Math.max(z - 0.25, 0.5))} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" title="Zoom out">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </button>
          <button onClick={reset} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xs font-bold" title="Reset zoom">
            1:1
          </button>
          <button onClick={handleDownload} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" title="Download">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </button>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" title="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>

      {/* Image */}
      <div
        className="w-full h-full flex items-center justify-center overflow-hidden"
        style={{ cursor: zoom > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in' }}
        onClick={e => e.stopPropagation()}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          ref={imgRef}
          src={attachment.url}
          alt={attachment.title}
          className="max-w-[90vw] max-h-[85vh] object-contain select-none transition-transform duration-100"
          style={{ transform: `scale(${zoom}) translate(${pos.x / zoom}px, ${pos.y / zoom}px)` }}
          draggable={false}
        />
      </div>

      {/* Zoom indicator */}
      {zoom !== 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-sm">
          {Math.round(zoom * 100)}%
        </div>
      )}
    </div>
  );
}

function Attachments({ items }: { items: MediaAttachment[] | null | undefined }) {
  const [lightbox, setLightbox] = useState<MediaAttachment | null>(null);

  if (!items || items.length === 0) return null;

  const images = items.filter(a => a.media_type === 'image');
  const files = items.filter(a => a.media_type !== 'image');

  const handleFileDownload = (a: MediaAttachment) => {
    const link = document.createElement('a');
    link.href = a.url;
    link.download = a.title || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
        {images.map((a) => (
          <button
            key={a.id}
            onClick={() => setLightbox(a)}
            className="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-[#ec7161] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec7161]"
          >
            <img
              src={a.url}
              alt={a.title}
              className="w-20 h-20 object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </button>
        ))}
        {files.map((a) => (
          <button
            key={a.id}
            onClick={() => handleFileDownload(a)}
            className="group flex items-center gap-2 text-xs px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 hover:border-[#ec7161] hover:text-[#ec7161] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="font-medium">{a.title}</span>
            <span className="text-gray-400">{formatBytes(a.size)}</span>
          </button>
        ))}
      </div>
      {lightbox && <ImageLightbox attachment={lightbox} onClose={() => setLightbox(null)} />}
    </>
  );
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
  const pollStoppedRef = useRef(false);

  // Pagination state for older replies
  const [olderReplies, setOlderReplies] = useState<any[]>([]);
  const [loadingOlder, setLoadingOlder] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // 0 = not loaded yet
  const [totalPages, setTotalPages] = useState(1);
  const [totalReplies, setTotalReplies] = useState(0);

  async function loadTicket() {
    if (!id || id === 'undefined') return;
    try {
      const res = await fetch(`/api/support-tickets/${id}`);
      if (!res.ok) {
        // 4xx = unrecoverable data error — stop polling, don't spam crash reports
        if (res.status >= 400 && res.status < 500) {
          pollStoppedRef.current = true;
          return;
        }
        // 5xx = upstream Taskip outage — transient, keep polling silently
        return;
      }
      const data = await res.json();
      const ticketData = data.data ?? data;
      setTicket(ticketData);
      // Capture reply count from meta (may come from show endpoint)
      const meta = ticketData?.meta;
      if (meta?.reply_count) setTotalReplies(meta.reply_count);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to fetch';
      if (!isNetworkError(msg)) {
        reportCrash({
          type: 'API fetch failure',
          message: msg,
          stack: err instanceof Error ? (err.stack ?? '') : '',
          apiEndpoint: `/api/support-tickets/${id}`,
          operation: 'loadTicket',
        });
      }
    }
  }

  async function loadOlderReplies() {
    if (loadingOlder || !id) return;
    setLoadingOlder(true);
    try {
      // First load: start from last page (oldest replies). Then decrement.
      const pageToLoad = currentPage === 0 ? totalPages : currentPage - 1;
      if (pageToLoad < 1) { setLoadingOlder(false); return; }

      const res = await fetch(`/api/support-tickets/${id}/replies?page=${pageToLoad}&per_page=10`);
      if (!res.ok) {
        setLoadingOlder(false);
        return;
      }
      const data = await res.json();
      const newReplies: any[] = data.data ?? [];
      const meta = data.meta;

      if (meta) {
        setTotalPages(meta.last_page ?? 1);
        setTotalReplies(meta.total ?? totalReplies);
      }

      // Paginated endpoint returns oldest-first — prepend to olderReplies
      setOlderReplies(prev => [...newReplies, ...prev]);
      setCurrentPage(pageToLoad);
    } catch {
      // silent
    }
    setLoadingOlder(false);
  }

  useEffect(() => {
    pollStoppedRef.current = false;
    setOlderReplies([]);
    setCurrentPage(0);
    setTotalPages(1);
    setTotalReplies(0);
    loadTicket();
    const interval = setInterval(() => {
      if (pollStoppedRef.current) return;
      loadTicket();
    }, 30_000);
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
  const latestReplies = allReplies.filter((r) => !r.description?.includes('ff_all_data'));
  // Combine: older replies (oldest-first from paginated endpoint) + latest replies (newest-first from show endpoint)
  const replies = [...olderReplies.filter((r) => !r.description?.includes('ff_all_data')), ...latestReplies];

  // Calculate if there are more older replies to load
  const replyCount = totalReplies || ticket.meta?.reply_count || 0;
  const displayedCount = olderReplies.length + latestReplies.length;
  const hasMoreOlder = replyCount > displayedCount && replyCount > 10;
  const remainingCount = Math.max(0, replyCount - displayedCount);

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
        <Attachments items={ticket.attachment ? [ticket.attachment] : null} />
      </div>

      {/* Replies */}
      {replies.length > 0 && (
        <div className="space-y-3">
          {/* Show older messages button */}
          {hasMoreOlder && (
            <div className="flex justify-center">
              <button
                onClick={loadOlderReplies}
                disabled={loadingOlder}
                className="flex items-center gap-2 px-4 py-2 text-sm text-[#ec7161] hover:text-[#e05e4d] hover:bg-[#ec7161]/5 rounded-lg transition-colors disabled:opacity-60 font-medium"
              >
                {loadingOlder ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Loading…
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    Show older messages ({remainingCount} more)
                  </>
                )}
              </button>
            </div>
          )}
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
                <Attachments items={r.attachment} />
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
