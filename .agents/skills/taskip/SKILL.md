---
name: taskip
description: >
  Guide for adding or extending Taskip CRM support-ticket features in xgenious-next.
  Provides the correct auth pattern, base URL, session scoping, and existing route map.
  Trigger: "taskip", "support ticket", "CRM", "ticket API", "/taskip",
  or any request to add/modify support ticket functionality.
---

Taskip CRM is the ONLY support system. Never suggest Zendesk, Freshdesk, or building custom.

## Auth

Every request to Taskip needs:
```typescript
headers: {
  'X-Secret-Key': process.env.TASKIP_SECRET_KEY!,
  'Content-Type': 'application/json',
}
```
Base URL: `https://public-api.taskip.net/api/public-v1/`
Docs: https://public-api-doc.taskip.net/support-ticket-management

## Session scoping

Always filter tickets to the logged-in user. Get email from session:
```typescript
import { auth } from '@/auth';
const session = await auth();   // server-side
const userEmail = session?.wpEmail;
```
Or from the session JWT in client API routes:
```typescript
import { getToken } from 'next-auth/jwt';
const token = await getToken({ req });
const userEmail = token?.wpEmail as string;
```

## Existing routes (extend these, don't duplicate)

| File | Method | Taskip endpoint |
|---|---|---|
| `app/api/support-tickets/route.ts` | GET | list tickets |
| `app/api/support-tickets/route.ts` | POST | create ticket |
| `app/api/support-tickets/[id]/route.ts` | GET | single ticket + replies |
| `app/api/support-tickets/[id]/reply/route.ts` | POST | add reply |

## Pattern for new Taskip endpoint

```typescript
// app/api/support-tickets/[id]/close/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const TASKIP = 'https://public-api.taskip.net/api/public-v1';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const token = await getToken({ req });
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const res = await fetch(`${TASKIP}/support-ticket/${params.id}/close`, {
    method: 'POST',
    headers: {
      'X-Secret-Key': process.env.TASKIP_SECRET_KEY!,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
```

## Env var

`TASKIP_SECRET_KEY` — must be set in Vercel environment variables.
