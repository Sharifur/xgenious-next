import { create } from 'zustand';
import type { PurchaseItem } from '@/lib/license-server';

const CACHE_TTL = 30 * 60 * 1000;

interface LicensesStore {
  items: PurchaseItem[];
  fetchedAt: number | null;
  loading: boolean;
  error: string;
  fetch: () => Promise<void>;
  invalidate: () => void;
  updateActivations: (licenseKey: string, activations: PurchaseItem['activations']) => void;
}

export const useLicensesStore = create<LicensesStore>((set, get) => ({
  items: [],
  fetchedAt: null,
  loading: false,
  error: '',

  async fetch() {
    const { fetchedAt } = get();
    if (fetchedAt && Date.now() - fetchedAt < CACHE_TTL) return;

    set({ loading: true, error: '' });
    try {
      const res = await fetch('/api/license-server/purchases');
      const data = await res.json();

      if (!res.ok) {
        set({ error: data.error ?? 'Failed to load licenses.' });
        return;
      }

      set({ items: data.data?.items ?? [], fetchedAt: Date.now() });
    } catch {
      set({ error: 'Failed to load licenses.' });
    } finally {
      set({ loading: false });
    }
  },

  invalidate() {
    set({ fetchedAt: null });
  },

  updateActivations(licenseKey, activations) {
    set((s) => ({
      items: s.items.map((item) =>
        item.license_key === licenseKey ? { ...item, activations } : item
      ),
    }));
  },
}));
