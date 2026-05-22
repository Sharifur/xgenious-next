'use client';
import { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/profile').then((r) => r.json()).then(setProfile);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setMsg('');
    setError('');
    const fd = new FormData(e.currentTarget);
    const password = fd.get('password') as string;
    const confirm = fd.get('confirm') as string;

    if (password && password !== confirm) {
      setError('Passwords do not match.');
      setSaving(false);
      return;
    }

    const body: Record<string, string> = {
      firstName: fd.get('firstName') as string,
      lastName: fd.get('lastName') as string,
      email: fd.get('email') as string,
    };
    if (password) body.password = password;

    const res = await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    setSaving(false);
    if (res.ok) {
      setMsg('Profile updated.');
    } else {
      const d = await res.json();
      setError(d?.message ?? 'Update failed.');
    }
  }

  if (!profile) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="h-4 bg-gray-100 rounded w-1/3 animate-pulse mb-3" />
        <div className="h-4 bg-gray-100 rounded w-2/3 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h1 className="text-xl font-bold text-[#0F1112] mb-6">Edit Profile</h1>

      {msg && <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100">{msg}</div>}
      {error && <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-[#0F1112] mb-1.5">First name</label>
            <input
              name="firstName"
              defaultValue={profile.first_name}
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Last name</label>
            <input
              name="lastName"
              defaultValue={profile.last_name}
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Email</label>
          <input
            name="email"
            type="email"
            defaultValue={profile.email}
            required
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
          />
        </div>
        <div className="pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-3">Leave blank to keep existing password</p>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-[#0F1112] mb-1.5">New password</label>
              <input
                name="password"
                type="password"
                minLength={8}
                autoComplete="new-password"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Confirm new password</label>
              <input
                name="confirm"
                type="password"
                minLength={8}
                autoComplete="new-password"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving…' : 'Save changes'}
        </button>
      </form>
    </div>
  );
}
