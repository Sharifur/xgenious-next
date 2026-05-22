'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTicketsStore } from '@/store/useTicketsStore';
import SupportNotices from '@/components/SupportNotices';

const STATUS_MAP: Record<string | number, { label: string; cls: string }> = {
  0: { label: 'Open',        cls: 'bg-blue-50 text-blue-700 border-blue-100' },
  1: { label: 'In Progress', cls: 'bg-yellow-50 text-yellow-700 border-yellow-100' },
  2: { label: 'Resolved',    cls: 'bg-green-50 text-green-700 border-green-100' },
  3: { label: 'Closed',      cls: 'bg-gray-100 text-gray-500 border-gray-200' },
  4: { label: 'Pending',     cls: 'bg-purple-50 text-purple-700 border-purple-100' },
  open:          { label: 'Open',        cls: 'bg-blue-50 text-blue-700 border-blue-100' },
  'in-progress': { label: 'In Progress', cls: 'bg-yellow-50 text-yellow-700 border-yellow-100' },
  resolved:      { label: 'Resolved',    cls: 'bg-green-50 text-green-700 border-green-100' },
  closed:        { label: 'Closed',      cls: 'bg-gray-100 text-gray-500 border-gray-200' },
  pending:       { label: 'Pending',     cls: 'bg-purple-50 text-purple-700 border-purple-100' },
};

const PRIORITY_MAP: Record<string, { label: string; cls: string; dot: string }> = {
  '0': { label: 'Low',    cls: 'text-gray-500',   dot: 'bg-gray-400' },
  '1': { label: 'Medium', cls: 'text-yellow-700', dot: 'bg-yellow-500' },
  '2': { label: 'High',   cls: 'text-orange-600', dot: 'bg-orange-500' },
  '3': { label: 'Urgent', cls: 'text-red-600',    dot: 'bg-red-500' },
  low:    { label: 'Low',    cls: 'text-gray-500',   dot: 'bg-gray-400' },
  medium: { label: 'Medium', cls: 'text-yellow-700', dot: 'bg-yellow-500' },
  high:   { label: 'High',   cls: 'text-orange-600', dot: 'bg-orange-500' },
  urgent: { label: 'Urgent', cls: 'text-red-600',    dot: 'bg-red-500' },
};

function timeAgo(dateStr?: string): string {
  if (!dateStr) return '';
  // API returns pre-formatted strings like "1 month ago" — return as-is
  if (!/^\d{4}/.test(dateStr)) return dateStr;
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (isNaN(diff) || diff < 0) return '';
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(dateStr).toLocaleDateString();
}

const PAGE_SIZE = 20;

export default function SupportPage() {
  const store = useTicketsStore();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('active');
  const [searchInput, setSearchInput] = useState('');
  const [closingId, setClosingId] = useState<number | null>(null);
  const [confirmClose, setConfirmClose] = useState<number | null>(null);

  const params = { page, search, status };
  const entry = store.getEntry(params);

  useEffect(() => {
    store.fetch(params);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, status]);

  const tickets = entry?.tickets ?? [];
  const total = entry?.total ?? 0;
  const loading = !entry && store.loading;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  }

  async function handleClose(t: { id: number; uuid?: string }) {
    const key = t.uuid ?? t.id;
    setClosingId(t.id);
    setConfirmClose(null);
    try {
      await fetch(`/api/support-tickets/${key}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 3 }),
      });
      store.invalidate();
      store.fetch(params);
    } finally {
      setClosingId(null);
    }
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0F1112]">Support Tickets</h1>
          {total > 0 && <p className="text-xs text-gray-400 mt-0.5">{total} ticket{total !== 1 ? 's' : ''}</p>}
        </div>
        <Link
          href="/my-account/support/new"
          className="flex items-center gap-2 px-4 py-2 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New ticket
        </Link>
      </div>

      <SupportNotices />

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <form onSubmit={handleSearch} className="flex gap-2 flex-1 min-w-0">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by ticket # or title…"
            className="flex-1 min-w-0 px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
          />
          <button type="submit" className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
            Search
          </button>
          {search && (
            <button type="button" onClick={() => { setSearch(''); setSearchInput(''); setPage(1); }} className="px-3 py-2 text-sm text-gray-400 hover:text-gray-600">
              Clear
            </button>
          )}
        </form>
        <select
          value={status}
          onChange={(e) => { setStatus(e.target.value); setPage(1); }}
          className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161]"
        >
          <option value="active">Active (open &amp; in progress)</option>
          <option value="all-except-closed">All (except closed)</option>
          <option value="all">All tickets</option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {store.error && (
        <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">{store.error}</div>
      )}

      {/* Ticket list */}
      <div className="space-y-2">
        {loading ? (
          [...Array(5)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
              <div className="h-4 bg-gray-100 rounded w-2/3 animate-pulse" />
              <div className="h-3 bg-gray-100 rounded w-1/3 animate-pulse" />
            </div>
          ))
        ) : tickets.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 py-16 text-center">
            <svg className="w-10 h-10 text-gray-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-400 text-sm mb-3">No tickets found.</p>
            <Link href="/my-account/support/new" className="text-[#ec7161] text-sm font-medium hover:underline">
              Open your first ticket
            </Link>
          </div>
        ) : (
          tickets.map((t) => {
            const prio = PRIORITY_MAP[String(t.priority)] ?? PRIORITY_MAP['medium'];
            const stat = STATUS_MAP[t.status] ?? STATUS_MAP['open'];
            const isClosed = t.status === 3 || t.status === 'closed';
            const isClosing = closingId === t.id;
            const isConfirming = confirmClose === t.id;
            const lastActivity = (t.last_replied_at as string | undefined) ?? t.updated_at;

            return (
              <div key={t.id} className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors group">
                <div className="flex items-start gap-3 px-4 pt-4 pb-3">
                  {/* Priority dot */}
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${prio.dot}`} />

                  {/* Main content */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/my-account/support/${t.uuid ?? t.id}`} className="block">
                      <p className="text-sm font-semibold text-[#0F1112] leading-snug group-hover:text-[#ec7161] transition-colors line-clamp-2">
                        {String(t.subject ?? '').replace(/\s*\[[^\]]+\]/g, '').trim()}
                      </p>
                    </Link>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                      <span className="text-xs text-gray-400">#{t.id}</span>
                      <span className={`text-xs font-medium ${prio.cls}`}>{prio.label}</span>
                      {lastActivity && (
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {timeAgo(lastActivity)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border capitalize ${stat.cls}`}>
                      {stat.label}
                    </span>

                    {/* Close button */}
                    {!isClosed && (
                      isConfirming ? (
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleClose(t)}
                            disabled={isClosing}
                            className="text-xs px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors disabled:opacity-60"
                          >
                            {isClosing ? '…' : 'Confirm'}
                          </button>
                          <button
                            onClick={() => setConfirmClose(null)}
                            className="text-xs px-2 py-1 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-gray-500"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={(e) => { e.stopPropagation(); e.preventDefault(); setConfirmClose(t.id); }}
                          className="text-xs text-gray-400 hover:text-gray-600 px-1.5 py-1 rounded hover:bg-gray-100 transition-colors"
                          title="Close ticket"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">Page {page} of {totalPages}</p>
          <div className="flex gap-2">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-50 transition-colors">
              Previous
            </button>
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const p = page <= 3 ? i + 1 : page - 2 + i;
              if (p > totalPages) return null;
              return (
                <button key={p} onClick={() => setPage(p)} className={`px-3 py-1.5 text-sm border rounded-lg transition-colors ${p === page ? 'bg-[#ec7161] text-white border-[#ec7161]' : 'border-gray-200 hover:bg-gray-50'}`}>
                  {p}
                </button>
              );
            })}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
