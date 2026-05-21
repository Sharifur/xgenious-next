---
name: new-account-page
description: >
  Scaffold a new page under /my-account/ following the xgenious-next account section patterns.
  Provides correct layout, auth, API route, sidebar nav wiring, and hook compliance.
  Trigger: "new account page", "add my-account page", "account section", "/new-account-page".
---

## Checklist for every new /my-account/* page

1. Create `app/my-account/{slug}/page.tsx` — client or server component
2. Create `app/api/{slug}/route.ts` if data fetching needed
3. Add nav item to `app/my-account/_components/AccountSidebar.tsx`
4. Hook auto-skips `/my-account/*` routes from sitemap — no sitemap update needed

## Page template (client component with data fetch)

```typescript
'use client';
import { useState, useEffect } from 'react';

export default function MyNewPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/my-new-route')
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); });
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="h-4 bg-gray-100 rounded w-1/3 animate-pulse mb-3" />
        <div className="h-4 bg-gray-100 rounded w-2/3 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h1 className="text-xl font-bold text-[#0F1112] mb-6">Page Title</h1>
      {/* content */}
    </div>
  );
}
```

## API route template (user-scoped, reads from WP or Taskip)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const WP_BASE = process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com';

export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  // Use token.wpToken (Bearer JWT) for user-scoped WP calls
  // Use token.wpEmail to scope Taskip queries
  const res = await fetch(`${WP_BASE}/wp-json/wp/v2/users/me`, {
    headers: { Authorization: `Bearer ${token.wpToken as string}` },
    cache: 'no-store',
  });
  const data = await res.json();
  return NextResponse.json(data);
}
```

## Adding sidebar nav item

In `app/my-account/_components/AccountSidebar.tsx`, add to the nav array:

```typescript
{ href: '/my-account/my-new-page', label: 'My New Page' },
```

## Styling conventions

- Card: `bg-white rounded-2xl border border-gray-200 p-6`
- Loading skeleton: `h-4 bg-gray-100 rounded animate-pulse`
- Primary button: `px-4 py-2 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors`
- Error box: `p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100`
- Success box: `p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100`
