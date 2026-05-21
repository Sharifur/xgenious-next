'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { newTicketSchema, type NewTicketInput } from '@/lib/schemas/auth';
import { useTicketsStore } from '@/store/useTicketsStore';

const inputClass = (hasError: boolean) =>
  `w-full px-3.5 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors ${hasError ? 'border-red-300' : 'border-gray-200'}`;

export default function NewTicketPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState('');
  const invalidate = useTicketsStore((s) => s.invalidate);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewTicketInput>({
    resolver: zodResolver(newTicketSchema),
    defaultValues: { priority: 'medium' },
  });

  async function onSubmit(values: NewTicketInput) {
    setServerError('');
    const res = await fetch('/api/support-tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      invalidate();
      const data = await res.json();
      router.push(`/my-account/support/${data.id ?? data.data?.id}`);
    } else {
      const d = await res.json();
      setServerError(d.error ?? 'Failed to create ticket.');
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
        {serverError && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">{serverError}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              {...register('subject')}
              type="text"
              placeholder="Brief description of your issue"
              className={inputClass(!!errors.subject)}
            />
            {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
              Priority <span className="text-red-500">*</span>
            </label>
            <select
              {...register('priority')}
              className={inputClass(!!errors.priority) + ' bg-white'}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
            {errors.priority && <p className="mt-1 text-xs text-red-500">{errors.priority.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register('description')}
              rows={6}
              placeholder="Describe your issue in detail…"
              className={inputClass(!!errors.description) + ' resize-none'}
            />
            {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>}
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting…' : 'Submit ticket'}
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
