import { create } from 'zustand';

export interface EnvatoConnectionStatus {
  status:
    | 'not_connected'
    | 'pending'
    | 'connected'
    | 'syncing'
    | 'needs_reconnect'
    | 'failed'
    | 'disconnected';
  envato_username?: string | null;
  last_sync_succeeded_at?: string | null;
  last_sync_summary?: {
    imported: number;
    already_imported: number;
    skipped: Record<string, number>;
  } | null;
  last_sync_error_code?: string | null;
}

interface EnvatoStore {
  connection: EnvatoConnectionStatus | null;
  loading: boolean;
  error: string;
  pollTimedOut: boolean;
  fetchStatus: () => Promise<void>;
  connect: () => Promise<void>;
  sync: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const POLL_INTERVAL_MS = 2000;
const POLL_MAX_ATTEMPTS = 15; // ~30s

function isSettling(status?: string) {
  return status === 'syncing' || status === 'pending';
}

export const useEnvatoStore = create<EnvatoStore>((set) => ({
  connection: null,
  loading: false,
  error: '',
  pollTimedOut: false,

  async fetchStatus() {
    set({ loading: true, error: '' });
    try {
      const res = await fetch('/api/license-server/envato/status');
      const data = await res.json();
      if (!res.ok) {
        set({ error: data.error ?? 'Failed to load Envato connection status.' });
        return;
      }
      set({ connection: data.data ?? { status: 'not_connected' }, pollTimedOut: false });

      if (isSettling(data.data?.status)) {
        pollUntilSettled();
      }
    } catch {
      set({ error: 'Failed to load Envato connection status.' });
    } finally {
      set({ loading: false });
    }
  },

  async connect() {
    set({ loading: true, error: '' });
    try {
      const res = await fetch('/api/license-server/envato/connect', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        set({ error: data.error ?? 'Failed to start Envato connection.', loading: false });
        return;
      }
      if (!data.authorize_url) {
        set({ error: 'Unexpected response starting the Envato connection. Please try again.', loading: false });
        return;
      }
      window.location.href = data.authorize_url;
      // intentionally leave loading:true — the page is navigating away
    } catch {
      set({ error: 'Failed to start Envato connection.', loading: false });
    }
  },

  async sync() {
    set({ loading: true, error: '', pollTimedOut: false });
    try {
      const res = await fetch('/api/license-server/envato/sync', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        set({ error: data.error ?? 'Failed to start sync.', loading: false });
        return;
      }
      set((s) => ({ connection: s.connection ? { ...s.connection, status: 'syncing' } : { status: 'syncing' }, loading: false }));
      pollUntilSettled();
    } catch {
      set({ error: 'Failed to start sync.', loading: false });
    }
  },

  async disconnect() {
    set({ loading: true, error: '' });
    try {
      const res = await fetch('/api/license-server/envato/connection', { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) {
        set({ error: data.error ?? 'Failed to disconnect.', loading: false });
        return;
      }
      set({ connection: { status: 'not_connected' }, loading: false });
    } catch {
      set({ error: 'Failed to disconnect.', loading: false });
    }
  },
}));

// Module-level guard: fetchStatus() and sync() can each trigger a poll, and
// fetchStatus() re-fires on every page mount — without this, revisiting the
// page mid-sync would stack up duplicate concurrent intervals.
let pollingActive = false;

function pollUntilSettled() {
  if (pollingActive) return;
  pollingActive = true;

  let attempts = 0;
  const interval = setInterval(async () => {
    attempts += 1;
    const { connection } = useEnvatoStore.getState();

    if (!isSettling(connection?.status)) {
      clearInterval(interval);
      pollingActive = false;
      return;
    }

    if (attempts >= POLL_MAX_ATTEMPTS) {
      clearInterval(interval);
      pollingActive = false;
      useEnvatoStore.setState({ pollTimedOut: true });
      return;
    }

    try {
      const res = await fetch('/api/license-server/envato/status');
      const data = await res.json();
      if (res.ok) {
        useEnvatoStore.setState({ connection: data.data ?? { status: 'not_connected' } });
      }
    } catch {
      // transient — keep polling until attempts run out
    }

    if (!isSettling(useEnvatoStore.getState().connection?.status)) {
      clearInterval(interval);
      pollingActive = false;
    }
  }, POLL_INTERVAL_MS);
}
