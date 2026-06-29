import { create } from 'zustand';

const CACHE_TTL = 30 * 60 * 1000;

interface Ticket {
  id: number;
  uuid?: string;
  subject: string;
  status: string | number;
  priority: string;
  created_at?: string;
  updated_at?: string;
  last_replied_at?: string;
  [key: string]: unknown;
}

interface TicketCacheEntry {
  tickets: Ticket[];
  total: number;
  fetchedAt: number;
}

interface TicketParams {
  page: number;
  search: string;
  status: string;
}

interface TicketsStore {
  cache: Record<string, TicketCacheEntry>;
  loading: boolean;
  error: string;
  fetch: (params: TicketParams) => Promise<void>;
  invalidate: () => void;
  getEntry: (params: TicketParams) => TicketCacheEntry | null;
}

const PAGE_SIZE = 20;

function queryKey(params: TicketParams) {
  return JSON.stringify(params);
}

export const useTicketsStore = create<TicketsStore>((set, get) => ({
  cache: {},
  loading: false,
  error: '',

  getEntry(params) {
    const entry = get().cache[queryKey(params)];
    if (!entry) return null;
    if (Date.now() - entry.fetchedAt > CACHE_TTL) return null;
    return entry;
  },

  async fetch(params) {
    const key = queryKey(params);
    const existing = get().getEntry(params);
    if (existing) return;

    set({ loading: true, error: '' });
    try {
      const p = new URLSearchParams({ page: String(params.page), limit: String(PAGE_SIZE) });
      if (params.search) p.set('search', params.search);
      if (params.status !== 'all' && params.status !== 'all-except-closed' && params.status !== 'active') {
        p.set('status', params.status);
      }

      const res = await fetch(`/api/support-tickets?${p}`);
      const data = await res.json();

      if (!res.ok) {
        set({ error: data.error ?? 'Failed to load tickets.' });
        return;
      }

      // Backend SupportTicketStatusEum: 2 = Close (closed/terminal)
      const isClosedT = (t: Ticket) => t.status === 2 || t.status === 'close' || t.status === 'closed';
      let tickets: Ticket[] = data.data ?? data ?? [];
      if (params.status === 'all-except-closed') {
        tickets = tickets.filter((t) => !isClosedT(t));
      } else if (params.status === 'active') {
        // open (0) or in progress (1) only
        tickets = tickets.filter((t) => t.status === 0 || t.status === 1 || t.status === 'open' || t.status === 'in-progress');
      }
      const total = data.total ?? data.meta?.total ?? tickets.length;

      set((s) => ({
        cache: { ...s.cache, [key]: { tickets, total, fetchedAt: Date.now() } },
      }));
    } catch {
      set({ error: 'Failed to load tickets.' });
    } finally {
      set({ loading: false });
    }
  },

  invalidate() {
    set({ cache: {} });
  },
}));
