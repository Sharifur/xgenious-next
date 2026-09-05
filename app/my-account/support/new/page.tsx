'use client';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { newTicketSchema, type NewTicketInput } from '@/lib/schemas/auth';
import { useTicketsStore } from '@/store/useTicketsStore';
import { useLicensesStore } from '@/store/useLicensesStore';

const RichEditor = dynamic(() => import('@/components/RichEditor'), { ssr: false });

const PRODUCTS = [
  'Nexelit',
  'Nazmart',
  'Multisaas',
  'Xilancer',
  'Fundorex',
  'Prohandy',
  'Qixer',
  'Gocar',
  'Helpnest',
  'Botmerze',
  'Safecart',
  'Other',
];

const inputClass = (hasError: boolean) =>
  `w-full px-3.5 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors ${hasError ? 'border-red-300' : 'border-gray-200'}`;

export default function NewTicketPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState('');
  const invalidate = useTicketsStore((s) => s.invalidate);
  const { items: purchases, fetch: fetchLicenses } = useLicensesStore();
  const myPurchases = purchases.filter((p) => p.license_key);

  const [modeOverride, setModeOverride] = useState<'select' | 'manual' | null>(null);
  const mode: 'select' | 'manual' = modeOverride ?? (myPurchases.length > 0 ? 'select' : 'manual');
  const [selectedKey, setSelectedKey] = useState('');

  useEffect(() => { fetchLicenses(); }, [fetchLicenses]);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<NewTicketInput>({
    resolver: zodResolver(newTicketSchema),
    defaultValues: { priority: 'medium' },
  });

  function handlePurchaseSelect(licenseKey: string) {
    setSelectedKey(licenseKey);
    const match = myPurchases.find((p) => p.license_key === licenseKey);
    setValue('product', match?.product_name ?? '', { shouldValidate: true });
    setValue('purchaseCode', match?.license_key ?? '', { shouldValidate: true });
  }

  function switchToManual() {
    setModeOverride('manual');
    setSelectedKey('');
    setValue('product', '', { shouldValidate: false });
    setValue('purchaseCode', '', { shouldValidate: false });
  }

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
      const ticketId = data.id ?? data.data?.id ?? data.data?.uuid ?? data.uuid;
      router.push(ticketId ? `/my-account/support/${ticketId}` : '/my-account/support');
    } else {
      const d = await res.json();
      const msg = typeof d.error === 'string' ? d.error : (d.message ?? 'Failed to create ticket.');
      setServerError(msg);
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
          {/* Subject */}
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

          {/* Product + Purchase Code */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-[#0F1112]">
                Product & Purchase Code <span className="text-red-500">*</span>
              </label>
              {myPurchases.length > 0 && (
                <button
                  type="button"
                  onClick={() => (mode === 'select' ? switchToManual() : setModeOverride('select'))}
                  className="text-xs font-medium text-[#ec7161] hover:text-[#e05e4d] transition-colors cursor-pointer"
                >
                  {mode === 'select' ? 'Enter a different purchase code' : 'Choose from my purchases'}
                </button>
              )}
            </div>

            {mode === 'select' && myPurchases.length > 0 ? (
              <div>
                <select
                  value={selectedKey}
                  onChange={(e) => handlePurchaseSelect(e.target.value)}
                  className={inputClass(!!errors.product || !!errors.purchaseCode) + ' bg-white cursor-pointer'}
                >
                  <option value="">Select one of your purchases…</option>
                  {myPurchases.map((p) => (
                    <option key={p.license_key} value={p.license_key}>
                      {p.product_name}{p.variant?.name ? ` (${p.variant.name})` : ''} — {p.license_key}
                    </option>
                  ))}
                </select>
                <input type="hidden" {...register('product')} />
                <input type="hidden" {...register('purchaseCode')} />
                {selectedKey && (
                  <p className="mt-1.5 text-xs text-gray-400">Purchase code: <span className="font-mono">{selectedKey}</span></p>
                )}
                {(errors.product || errors.purchaseCode) && (
                  <p className="mt-1 text-xs text-red-500">Please choose one of your purchases from the list.</p>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <select {...register('product')} className={inputClass(!!errors.product) + ' bg-white cursor-pointer'}>
                    <option value="">Select a product…</option>
                    {PRODUCTS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.product && <p className="mt-1 text-xs text-red-500">{errors.product.message}</p>}
                </div>
                <div>
                  <input
                    {...register('purchaseCode')}
                    type="text"
                    placeholder="e.g. 45ca289a-48f9-47dc…"
                    className={inputClass(!!errors.purchaseCode)}
                  />
                  {errors.purchaseCode && <p className="mt-1 text-xs text-red-500">{errors.purchaseCode.message}</p>}
                </div>
              </div>
            )}
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
              Priority <span className="text-red-500">*</span>
            </label>
            <select {...register('priority')} className={inputClass(!!errors.priority) + ' bg-white cursor-pointer'}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
            {errors.priority && <p className="mt-1 text-xs text-red-500">{errors.priority.message}</p>}
          </div>

          {/* Description — rich editor */}
          <div>
            <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
              Description <span className="text-red-500">*</span>
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <RichEditor
                  value={field.value ?? ''}
                  onChange={field.onChange}
                  placeholder="Describe your issue in detail. You can paste or upload screenshots."
                  hasError={!!errors.description}
                />
              )}
            />
            {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>}
            <p className="mt-1 text-xs text-gray-400">You can paste images directly into the editor.</p>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
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
