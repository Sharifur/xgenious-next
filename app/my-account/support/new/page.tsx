'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewTicketPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const fd = new FormData(e.currentTarget);

    const res = await fetch('/api/support-tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: fd.get('subject'),
        priority: fd.get('priority'),
        description: fd.get('description'),
      }),
    });

    setLoading(false);
    if (res.ok) {
      const data = await res.json();
      router.push(`/my-account/support/${data.id ?? data.data?.id}`);
    } else {
      const d = await res.json();
      setError(d.error ?? 'Failed to create ticket.');
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/my-account/support" className="text-sm text-gray-400 hover:text-[#ec7161] transition-colors">
          ← Back
        </Link>
        <h1 className="text-xl font-bold text-[#0F1112]">New Support Ticket</h1>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Subject</label>
            <input
              name="subject"
              type="text"
              required
              placeholder="Brief description of your issue"
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Priority</label>
            <select
              name="priority"
              required
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors bg-white"
            >
              <option value="low">Low</option>
              <option value="medium" selected>Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Description</label>
            <textarea
              name="description"
              required
              rows={6}
              placeholder="Describe your issue in detail…"
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors resize-none"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60"
            >
              {loading ? 'Submitting…' : 'Submit ticket'}
            </button>
            <Link
              href="/my-account/support"
              className="px-6 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
