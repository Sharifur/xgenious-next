'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type LogEntry = { id: number; time: string; type: string; text: string };

type AgentStats = {
  s1: { label: string; value: number; note: string; noteColor: string };
  s2: { label: string; value: string; bars: number[] };
  s3: { label: string; value: number; sub: string };
  s4: { label: string; value: string; sub: string; subColor: string };
};

type WorkspaceDataset = {
  agentColors: Record<string, string>;
  agentLabels: Record<string, string>;
  logPool: Record<string, Omit<LogEntry, 'id'>[]>;
  taskList: { id: string; agentId: string; label: string; trigger: string }[];
  agentStats: Record<string, AgentStats>;
  connectedTools: { icon: string; label: string; color: string }[];
  toolKeywords: [string, string][];
};

const TYPE_COLOR: Record<string, string> = {
  reasoning: 'text-[#4ade80]',
  memory:    'text-[#60a5fa]',
  tool:      'text-[#fbbf24]',
  action:    'text-[#c084fc]',
};

const DATASETS: Record<string, WorkspaceDataset> = {
  'ai-agents-for-saas': {
    agentColors: { onboarding: '#ec7161', retention: '#60a5fa', support: '#4ade80', expansion: '#c084fc' },
    agentLabels: { onboarding: 'Onboarding', retention: 'Retention', support: 'Support', expansion: 'Expansion' },
    taskList: [
      { id: 't1', agentId: 'onboarding', label: 'Activating trial user #3821',   trigger: 'webhook · Segment' },
      { id: 't2', agentId: 'retention',  label: 'At-risk: Acme Corp (-62%)',      trigger: 'usage · signal' },
      { id: 't3', agentId: 'support',    label: 'Ticket #7742 — CSV export',      trigger: 'in-app · chat' },
      { id: 't4', agentId: 'expansion',  label: 'Starter plan at 94% seat cap',   trigger: 'webhook · Stripe' },
      { id: 't5', agentId: 'onboarding', label: 'Day-3 onboarding sequence',      trigger: 'schedule · 09:00' },
      { id: 't6', agentId: 'retention',  label: 'Churn flag: BuildFast.io',       trigger: 'usage · signal' },
    ],
    logPool: {
      onboarding: [
        { time: '09:02:11', type: 'reasoning', text: 'User at activation step 2/5 — idle 48h' },
        { time: '09:02:13', type: 'memory',    text: 'Retrieved onboarding history from vector store' },
        { time: '09:02:15', type: 'tool',      text: 'intercom.send({template: "feature_guide", user_id: "3821"})' },
        { time: '09:02:17', type: 'action',    text: 'Nudge sent — user re-engaged ✓' },
      ],
      retention: [
        { time: '10:14:02', type: 'reasoning', text: 'Usage drop 62% vs 30-day avg — churn risk: high' },
        { time: '10:14:04', type: 'tool',      text: 'hubspot.update_contact({risk_score: 94})' },
        { time: '10:14:06', type: 'action',    text: 'Check-in email queued + CSM notified ✓' },
        { time: '10:14:08', type: 'memory',    text: 'Last login: 18 days ago — 3 sessions this month' },
      ],
      support: [
        { time: '11:30:05', type: 'reasoning', text: 'Query: CSV export — found 3 matching doc sections' },
        { time: '11:30:07', type: 'memory',    text: 'Retrieved articles from knowledge base (vector store)' },
        { time: '11:30:09', type: 'tool',      text: 'intercom.resolve_ticket({id: "7742", auto: true})' },
        { time: '11:30:11', type: 'action',    text: 'Resolved autonomously — CSAT survey queued ✓' },
      ],
      expansion: [
        { time: '14:05:01', type: 'reasoning', text: 'Seat limit at 94% — high upgrade intent signal' },
        { time: '14:05:03', type: 'tool',      text: 'stripe.fetch_plan({customer: "cus_A8xK"})' },
        { time: '14:05:05', type: 'action',    text: 'Upgrade prompt sent · sales alerted ✓' },
      ],
    },
    agentStats: {
      onboarding: { s1: { label: 'Users Activated',    value: 2847,    note: '↑ 34% this month',       noteColor: '#4ade80' }, s2: { label: 'Activation Rate',  value: '71.3%', bars: [5,6,7,8,6,9,7,8,9,10] }, s3: { label: 'Tokens / Hr', value: 1800000, sub: 'Avg cost: $0.0014' }, s4: { label: 'Avg Response', value: '0.8s', sub: 'p95 · 1.9s', subColor: '#60a5fa' } },
      retention:  { s1: { label: 'Accounts Saved',     value: 142,     note: '↑ 28 this month',        noteColor: '#4ade80' }, s2: { label: 'Churn Rate',       value: '1.2%',  bars: [8,7,6,5,4,4,3,3,2,2] }, s3: { label: 'Tokens / Hr', value: 960000,  sub: 'Avg cost: $0.0009' }, s4: { label: 'Avg Response', value: '2.1s', sub: 'p95 · 4.2s', subColor: '#60a5fa' } },
      support:    { s1: { label: 'Tickets Resolved',   value: 3241,    note: '↑ 21% vs yesterday',     noteColor: '#4ade80' }, s2: { label: 'Deflection Rate',  value: '63.8%', bars: [5,6,7,6,8,7,9,8,9,10] }, s3: { label: 'Tokens / Hr', value: 1200000, sub: 'Avg cost: $0.0011' }, s4: { label: 'Avg Response', value: '1.1s', sub: 'p95 · 2.4s', subColor: '#60a5fa' } },
      expansion:  { s1: { label: 'Upgrades Triggered', value: 89,      note: '↑ 15 this week',         noteColor: '#4ade80' }, s2: { label: 'Expansion MRR',    value: '+18%',  bars: [3,4,5,4,6,5,7,6,8,9] }, s3: { label: 'Tokens / Hr', value: 480000,  sub: 'Avg cost: $0.0006' }, s4: { label: 'Avg Response', value: '1.4s', sub: 'p95 · 2.8s', subColor: '#60a5fa' } },
    },
    connectedTools: [
      { icon: 'Sg', label: 'Segment',  color: '#60a5fa' },
      { icon: 'H',  label: 'HubSpot',  color: '#fb923c' },
      { icon: 'I',  label: 'Intercom', color: '#4ade80' },
      { icon: 'St', label: 'Stripe',   color: '#c084fc' },
      { icon: 'P',  label: 'Pinecone', color: '#f87171' },
    ],
    toolKeywords: [['segment','Segment'],['hubspot','HubSpot'],['intercom','Intercom'],['stripe','Stripe'],['pinecone','Pinecone']],
  },
  'ai-agents-for-real-estate': {
    agentColors: { leadqual: '#ec7161', propmatch: '#60a5fa', marketintel: '#4ade80', followup: '#fbbf24' },
    agentLabels: { leadqual: 'Lead Qual', propmatch: 'Prop Match', marketintel: 'Market Intel', followup: 'Follow-Up' },
    taskList: [
      { id: 't1', agentId: 'leadqual',    label: 'Qualifying inbound — John M',    trigger: 'webhook · website' },
      { id: 't2', agentId: 'propmatch',   label: 'Matching buyer: Sarah K #891',   trigger: 'crm · HubSpot' },
      { id: 't3', agentId: 'marketintel', label: 'MENA Q2 market report',          trigger: 'schedule · 11:00' },
      { id: 't4', agentId: 'followup',    label: 'Post-viewing: 14 Oak St',        trigger: 'trigger · viewing' },
      { id: 't5', agentId: 'leadqual',    label: 'Qualify lead: Emma R — £850k',   trigger: 'email · inquiry' },
      { id: 't6', agentId: 'propmatch',   label: 'Matching: 4-bed, SW London',     trigger: 'crm · HubSpot' },
    ],
    logPool: {
      leadqual: [
        { time: '09:15:02', type: 'reasoning', text: 'Budget: £850k, timeline: 3 months — hot lead' },
        { time: '09:15:04', type: 'memory',    text: 'No prior interaction found — first contact' },
        { time: '09:15:06', type: 'tool',      text: 'hubspot.create_contact({budget: "850k", score: 91})' },
        { time: '09:15:08', type: 'action',    text: 'Lead routed to agent Sarah — meeting booked ✓' },
      ],
      propmatch: [
        { time: '10:22:01', type: 'reasoning', text: 'Buyer profile: 4-bed, SW London, £850k max' },
        { time: '10:22:04', type: 'memory',    text: 'Queried 2,841 live listings from vector store' },
        { time: '10:22:06', type: 'tool',      text: 'mls.search({beds: 4, area: "SW_London", max: 850000})' },
        { time: '10:22:09', type: 'action',    text: '6 matches ranked and sent via email ✓' },
      ],
      marketintel: [
        { time: '11:01:03', type: 'reasoning', text: 'Q2 MENA market report — 8 data sources required' },
        { time: '11:01:06', type: 'tool',      text: 'pinecone.query({namespace: "market_data", top_k: 40})' },
        { time: '11:01:09', type: 'memory',    text: 'Cross-referenced 14 comparable reports' },
        { time: '11:01:14', type: 'action',    text: 'Report drafted — 6 charts, 3 trend tables ✓' },
      ],
      followup: [
        { time: '14:48:11', type: 'reasoning', text: 'Viewing at 14 Oak St — 48h post-visit, no response' },
        { time: '14:48:13', type: 'tool',      text: 'gmail.send({template: "post_viewing", prop_id: "14oak"})' },
        { time: '14:48:15', type: 'action',    text: 'Follow-up sent — interest signal captured ✓' },
      ],
    },
    agentStats: {
      leadqual:    { s1: { label: 'Leads Qualified',     value: 4821,  note: '5× faster than team',    noteColor: '#4ade80' }, s2: { label: 'Qual Rate',       value: '68.4%',  bars: [4,5,6,7,8,7,9,8,9,10] }, s3: { label: 'Tokens / Hr', value: 1600000, sub: 'Avg cost: $0.0018' }, s4: { label: 'Avg Response', value: '0.6s',   sub: 'p95 · 1.4s',          subColor: '#60a5fa' } },
      propmatch:   { s1: { label: 'Matches Sent',        value: 12473, note: '↑ 40% more viewings',    noteColor: '#4ade80' }, s2: { label: 'Match Accuracy', value: '89.2%',  bars: [6,7,8,9,8,9,10,9,10,10] }, s3: { label: 'Tokens / Hr', value: 2200000, sub: 'Avg cost: $0.0022' }, s4: { label: 'Avg Response', value: '1.3s',   sub: 'p95 · 2.8s',          subColor: '#60a5fa' } },
      marketintel: { s1: { label: 'Reports Generated',   value: 284,   note: '↑ 12 this week',         noteColor: '#4ade80' }, s2: { label: 'Avg Gen Time',   value: '2.8 min', bars: [8,7,6,7,5,6,5,4,4,3] }, s3: { label: 'Tokens / Hr', value: 3400000, sub: 'Avg cost: $0.0034' }, s4: { label: 'Avg Response', value: '3.1s',   sub: 'p95 · 6.4s',          subColor: '#60a5fa' } },
      followup:    { s1: { label: 'Follow-ups Sent',     value: 8921,  note: '70% response rate',      noteColor: '#4ade80' }, s2: { label: 'Conversion',     value: '34.1%',  bars: [3,4,5,6,5,7,6,7,8,9] }, s3: { label: 'Tokens / Hr', value: 840000,  sub: 'Avg cost: $0.0008' }, s4: { label: 'Avg Response', value: '0.9s',   sub: 'p95 · 2.1s',          subColor: '#60a5fa' } },
    },
    connectedTools: [
      { icon: 'H',  label: 'HubSpot',  color: '#fb923c' },
      { icon: 'ML', label: 'MLS API',  color: '#60a5fa' },
      { icon: 'G',  label: 'Gmail',    color: '#f87171' },
      { icon: 'Ca', label: 'Calendly', color: '#c084fc' },
      { icon: 'P',  label: 'Pinecone', color: '#4ade80' },
    ],
    toolKeywords: [['hubspot','HubSpot'],['mls','MLS API'],['gmail','Gmail'],['calendly','Calendly'],['pinecone','Pinecone']],
  },
  'ai-agents-for-ecommerce': {
    agentColors: { cartrecovery: '#ec7161', custsupport: '#60a5fa', personalise: '#4ade80', inventoryalert: '#fbbf24' },
    agentLabels: { cartrecovery: 'Cart Recovery', custsupport: 'Support', personalise: 'Personalise', inventoryalert: 'Inventory' },
    taskList: [
      { id: 't1', agentId: 'cartrecovery',   label: 'Abandoned cart — order #44891', trigger: 'webhook · Shopify' },
      { id: 't2', agentId: 'custsupport',    label: 'Return request: order #32104',  trigger: 'email · customer' },
      { id: 't3', agentId: 'personalise',    label: 'Recs refresh — user #9921',     trigger: 'schedule · 08:00' },
      { id: 't4', agentId: 'inventoryalert', label: 'Low stock alert: SKU-4421',     trigger: 'monitor · WMS' },
      { id: 't5', agentId: 'cartrecovery',   label: 'Cart recovery: $349 basket',    trigger: 'webhook · Shopify' },
      { id: 't6', agentId: 'custsupport',    label: 'Size query — Nike Air M10',     trigger: 'live chat · web' },
    ],
    logPool: {
      cartrecovery: [
        { time: '08:14:02', type: 'reasoning', text: 'Cart abandoned 2h ago — $349, loyalty tier: Gold' },
        { time: '08:14:04', type: 'memory',    text: 'Customer has 3 prior purchases — prefers email' },
        { time: '08:14:06', type: 'tool',      text: 'klaviyo.send({flow: "cart_recovery", offer: "10%"})' },
        { time: '08:14:08', type: 'action',    text: 'Recovery email sent · WhatsApp fallback queued ✓' },
      ],
      custsupport: [
        { time: '10:30:05', type: 'reasoning', text: 'Return requested: wrong size, within 30-day policy' },
        { time: '10:30:07', type: 'tool',      text: 'shopify.create_return({order: "32104", reason: "wrong_size"})' },
        { time: '10:30:09', type: 'action',    text: 'Return label sent — refund queued ✓' },
        { time: '10:30:11', type: 'memory',    text: 'Customer sentiment: neutral — no escalation needed' },
      ],
      personalise: [
        { time: '08:02:11', type: 'reasoning', text: 'User #9921 — affinity: running gear, neutral colors' },
        { time: '08:02:13', type: 'memory',    text: 'Retrieved 142 interactions from vector store' },
        { time: '08:02:15', type: 'tool',      text: 'algolia.update_recs({user: "9921", strategy: "collab_filter"})' },
        { time: '08:02:17', type: 'action',    text: 'Recommendation set refreshed — 18 products ✓' },
      ],
      inventoryalert: [
        { time: '11:45:02', type: 'reasoning', text: 'SKU-4421 — 8 units left, 34 units/day velocity' },
        { time: '11:45:04', type: 'tool',      text: 'shopify.pause_ad({sku: "4421", platform: "meta"})' },
        { time: '11:45:06', type: 'action',    text: 'Ad paused · reorder alert sent to buyer team ✓' },
      ],
    },
    agentStats: {
      cartrecovery:   { s1: { label: 'Carts Recovered',   value: 6842,  note: '↑ 22% vs last month',       noteColor: '#4ade80' }, s2: { label: 'Recovery Rate',    value: '21.4%', bars: [4,5,6,7,8,7,9,8,9,10] }, s3: { label: 'Tokens / Hr', value: 1400000, sub: 'Avg cost: $0.0013' }, s4: { label: 'Avg Response', value: '0.7s',  sub: 'p95 · 1.6s', subColor: '#60a5fa' } },
      custsupport:    { s1: { label: 'Tickets Resolved',  value: 9241,  note: '70% resolved — no human',   noteColor: '#4ade80' }, s2: { label: 'Resolution Rate',  value: '70.1%', bars: [5,6,7,6,8,7,9,8,9,10] }, s3: { label: 'Tokens / Hr', value: 1800000, sub: 'Avg cost: $0.0016' }, s4: { label: 'Avg Response', value: '1.2s',  sub: 'p95 · 2.5s', subColor: '#60a5fa' } },
      personalise:    { s1: { label: 'Recs Refreshed',    value: 48210, note: '↑ 22% repeat purchases',    noteColor: '#4ade80' }, s2: { label: 'Click-Through',    value: '14.8%', bars: [4,5,6,7,6,8,7,8,9,10] }, s3: { label: 'Tokens / Hr', value: 2400000, sub: 'Avg cost: $0.0021' }, s4: { label: 'Avg Response', value: '1.8s',  sub: 'p95 · 3.4s', subColor: '#60a5fa' } },
      inventoryalert: { s1: { label: 'Alerts Triggered',  value: 284,   note: '0 stockouts on monitored SKUs', noteColor: '#4ade80' }, s2: { label: 'False Positive',  value: '0.4%',  bars: [3,2,3,2,2,1,2,1,1,1] }, s3: { label: 'Tokens / Hr', value: 480000,  sub: 'Avg cost: $0.0005' }, s4: { label: 'Avg Response', value: '0.4s',  sub: 'p95 · 0.9s', subColor: '#60a5fa' } },
    },
    connectedTools: [
      { icon: 'Sh', label: 'Shopify',  color: '#4ade80' },
      { icon: 'K',  label: 'Klaviyo', color: '#fb923c' },
      { icon: 'A',  label: 'Algolia', color: '#60a5fa' },
      { icon: 'St', label: 'Stripe',  color: '#c084fc' },
      { icon: 'W',  label: 'WMS API', color: '#fbbf24' },
    ],
    toolKeywords: [['shopify','Shopify'],['klaviyo','Klaviyo'],['algolia','Algolia'],['stripe','Stripe'],['wms','WMS API']],
  },
  'ai-agents-for-finance': {
    agentColors: { kyc: '#ec7161', frauddetect: '#60a5fa', onboarding: '#4ade80', reportgen: '#c084fc' },
    agentLabels: { kyc: 'KYC', frauddetect: 'Fraud Detect', onboarding: 'Onboarding', reportgen: 'Report Gen' },
    taskList: [
      { id: 't1', agentId: 'kyc',         label: 'KYC review: James O. #4421',     trigger: 'upload · portal' },
      { id: 't2', agentId: 'frauddetect', label: 'Suspicious txn: $42k wire',      trigger: 'realtime · monitor' },
      { id: 't3', agentId: 'onboarding',  label: 'New client: Apex Capital',        trigger: 'referral · email' },
      { id: 't4', agentId: 'reportgen',   label: 'Q1 portfolio report: 12 clients', trigger: 'schedule · 09:00' },
      { id: 't5', agentId: 'kyc',         label: 'PEP flag review: Maria C.',       trigger: 'sanctions · check' },
      { id: 't6', agentId: 'onboarding',  label: 'Onboarding: TechVenture Ltd',     trigger: 'portal · form' },
    ],
    logPool: {
      kyc: [
        { time: '09:10:02', type: 'reasoning', text: 'Passport verified — cross-checking PEP and sanctions lists' },
        { time: '09:10:05', type: 'tool',      text: 'comply_advantage.check({name: "James O.", dob: "1981-04-12"})' },
        { time: '09:10:08', type: 'memory',    text: 'No prior records — low risk score: 12/100' },
        { time: '09:10:10', type: 'action',    text: 'KYC passed — account provisioned ✓' },
      ],
      frauddetect: [
        { time: '14:32:01', type: 'reasoning', text: '$42k wire transfer — 3 anomaly flags triggered' },
        { time: '14:32:02', type: 'tool',      text: 'risk_engine.score({txn_id: "TXN-8821", model: "v3"})' },
        { time: '14:32:04', type: 'action',    text: 'Txn frozen — risk team alerted via Slack ✓' },
        { time: '14:32:05', type: 'memory',    text: 'Customer avg transaction: $1,200 — 35× deviation' },
      ],
      onboarding: [
        { time: '10:05:01', type: 'reasoning', text: 'New client — gathering risk profile and suitability data' },
        { time: '10:05:04', type: 'tool',      text: 'docusign.send({template: "client_agreement", client: "apex_capital"})' },
        { time: '10:05:07', type: 'action',    text: 'Documents sent — completion tracking active ✓' },
        { time: '10:05:09', type: 'memory',    text: 'Referral source: existing client — high-trust flag' },
      ],
      reportgen: [
        { time: '09:01:03', type: 'reasoning', text: 'Q1 report: 12 client portfolios, 34 positions' },
        { time: '09:01:06', type: 'tool',      text: 'portfolio_api.fetch({period: "Q1_2026", clients: 12})' },
        { time: '09:01:14', type: 'action',    text: 'Reports generated and emailed ✓ — avg 4 min/client' },
      ],
    },
    agentStats: {
      kyc:         { s1: { label: 'KYC Reviews',        value: 1842, note: '80% faster than manual', noteColor: '#4ade80' }, s2: { label: 'Pass Rate',         value: '94.1%',  bars: [8,9,9,8,10,9,10,9,10,10] }, s3: { label: 'Tokens / Hr', value: 2100000, sub: 'Avg cost: $0.0019' }, s4: { label: 'Avg Review Time',     value: '4.2 min', sub: 'manual: 2–3 days',        subColor: '#4ade80' } },
      frauddetect: { s1: { label: 'Fraud Flags',        value: 284,  note: 'Sub-second detection',  noteColor: '#4ade80' }, s2: { label: 'False Positive',    value: '0.3%',   bars: [2,2,1,2,1,1,1,1,1,1] }, s3: { label: 'Tokens / Hr', value: 3200000, sub: 'Avg cost: $0.0028' }, s4: { label: 'Detection Latency',   value: '0.3s',    sub: 'p95 · 0.8s',             subColor: '#60a5fa' } },
      onboarding:  { s1: { label: 'Clients Onboarded',  value: 621,  note: '55% less drop-off',     noteColor: '#4ade80' }, s2: { label: 'Completion Rate',   value: '87.4%',  bars: [6,7,8,7,9,8,9,8,9,10] }, s3: { label: 'Tokens / Hr', value: 960000,  sub: 'Avg cost: $0.0009' }, s4: { label: 'Avg Time',            value: '18 min',  sub: 'prev: 3–5 days',          subColor: '#4ade80' } },
      reportgen:   { s1: { label: 'Reports Generated',  value: 2841, note: '12 clients this morning',noteColor: '#4ade80' }, s2: { label: 'Avg Gen Time',      value: '4.1 min', bars: [6,5,5,4,5,4,4,4,3,4] }, s3: { label: 'Tokens / Hr', value: 4200000, sub: 'Avg cost: $0.0038' }, s4: { label: 'Avg Accuracy',        value: '99.8%',   sub: 'validated on output',     subColor: '#4ade80' } },
    },
    connectedTools: [
      { icon: 'CA', label: 'ComplyAdv', color: '#ec7161' },
      { icon: 'DS', label: 'DocuSign',  color: '#60a5fa' },
      { icon: 'Sl', label: 'Slack',     color: '#4ade80' },
      { icon: 'PA', label: 'Portfolio', color: '#c084fc' },
      { icon: 'P',  label: 'Pinecone',  color: '#fbbf24' },
    ],
    toolKeywords: [['comply','ComplyAdv'],['docusign','DocuSign'],['slack','Slack'],['portfolio','Portfolio'],['pinecone','Pinecone']],
  },
  'ai-agents-for-healthcare': {
    agentColors: { intake: '#ec7161', scheduler: '#60a5fa', billing: '#4ade80', followup: '#c084fc' },
    agentLabels: { intake: 'Intake', scheduler: 'Scheduler', billing: 'Billing', followup: 'Follow-Up' },
    taskList: [
      { id: 't1', agentId: 'intake',    label: 'Intake: Sarah M — 10:30 appt',  trigger: 'form · portal' },
      { id: 't2', agentId: 'scheduler', label: 'Booking: Dr. Chen, cardiology',  trigger: 'inbound · phone' },
      { id: 't3', agentId: 'billing',   label: 'Billing query: invoice #4421',   trigger: 'email · patient' },
      { id: 't4', agentId: 'followup',  label: 'Post-visit: Dr. Park, Apr 8',    trigger: 'trigger · EMR' },
      { id: 't5', agentId: 'intake',    label: 'New patient intake: #8291',      trigger: 'form · portal' },
      { id: 't6', agentId: 'scheduler', label: 'Rebook: missed appt #2041',      trigger: 'sms · patient' },
    ],
    logPool: {
      intake: [
        { time: '09:28:04', type: 'reasoning', text: 'Pre-visit intake form — collecting 8 required fields' },
        { time: '09:28:07', type: 'tool',      text: 'epic.update_patient({id: "8291", fields: "intake_complete"})' },
        { time: '09:28:09', type: 'memory',    text: 'Patient history retrieved from EHR — 2 prior visits' },
        { time: '09:28:11', type: 'action',    text: 'Intake complete — record updated in Epic ✓' },
      ],
      scheduler: [
        { time: '10:14:02', type: 'reasoning', text: 'Cardiology — Dr. Chen next available: Apr 14, 2pm' },
        { time: '10:14:04', type: 'tool',      text: 'calendar.book({provider: "dr_chen", slot: "Apr_14_14:00"})' },
        { time: '10:14:06', type: 'action',    text: 'Appointment booked — confirmation SMS sent ✓' },
        { time: '10:14:08', type: 'memory',    text: 'Patient preference: afternoon slots — noted' },
      ],
      billing: [
        { time: '11:05:01', type: 'reasoning', text: 'Invoice #4421 — insurance coverage question' },
        { time: '11:05:03', type: 'memory',    text: 'Policy details retrieved from billing system' },
        { time: '11:05:05', type: 'tool',      text: 'billing.fetch_eob({claim_id: "4421", insurer: "BlueCross"})' },
        { time: '11:05:07', type: 'action',    text: 'Coverage explained — no escalation needed ✓' },
      ],
      followup: [
        { time: '08:00:02', type: 'reasoning', text: 'Post-visit day 2 — medication reminder due' },
        { time: '08:00:04', type: 'tool',      text: 'twilio.sms({template: "post_visit_day2", patient: "8291"})' },
        { time: '08:00:06', type: 'action',    text: 'Reminder sent — adherence survey queued ✓' },
      ],
    },
    agentStats: {
      intake:    { s1: { label: 'Intakes Completed', value: 4821,  note: '40% less admin time',    noteColor: '#4ade80' }, s2: { label: 'Completion Rate', value: '96.2%', bars: [8,9,9,10,9,10,9,10,10,10] }, s3: { label: 'Tokens / Hr', value: 1400000, sub: 'Avg cost: $0.0013' }, s4: { label: 'Avg Intake Time', value: '4.1 min', sub: 'prev: 22 min manual', subColor: '#4ade80' } },
      scheduler: { s1: { label: 'Appts Booked',      value: 12841, note: '35% fewer no-shows',    noteColor: '#4ade80' }, s2: { label: 'Booking Rate',    value: '88.4%', bars: [7,8,9,8,9,9,10,9,10,10] }, s3: { label: 'Tokens / Hr', value: 1200000, sub: 'Avg cost: $0.0011' }, s4: { label: 'Avg Response',    value: '0.9s',    sub: 'p95 · 2.1s',         subColor: '#60a5fa' } },
      billing:   { s1: { label: 'Queries Resolved',  value: 3241,  note: '70% resolved — no human', noteColor: '#4ade80' }, s2: { label: 'Resolution Rate', value: '70.4%', bars: [5,6,7,6,8,7,9,8,9,10] }, s3: { label: 'Tokens / Hr', value: 960000,  sub: 'Avg cost: $0.0009' }, s4: { label: 'Avg Response',    value: '1.4s',    sub: 'p95 · 2.9s',         subColor: '#60a5fa' } },
      followup:  { s1: { label: 'Reminders Sent',    value: 28412, note: '60% better adherence',  noteColor: '#4ade80' }, s2: { label: 'Response Rate',   value: '74.1%', bars: [4,5,6,7,8,7,8,9,8,10] }, s3: { label: 'Tokens / Hr', value: 840000,  sub: 'Avg cost: $0.0008' }, s4: { label: 'Avg Response',    value: '0.6s',    sub: 'p95 · 1.4s',         subColor: '#60a5fa' } },
    },
    connectedTools: [
      { icon: 'EP', label: 'Epic EHR', color: '#60a5fa' },
      { icon: 'Tw', label: 'Twilio',   color: '#4ade80' },
      { icon: 'DS', label: 'DocuSign', color: '#ec7161' },
      { icon: 'BI', label: 'Billing',  color: '#c084fc' },
      { icon: 'Ca', label: 'Calendly', color: '#fbbf24' },
    ],
    toolKeywords: [['epic','Epic EHR'],['twilio','Twilio'],['docusign','DocuSign'],['billing','Billing'],['calendar','Calendly']],
  },
  'ai-agents-for-education': {
    agentColors: { support: '#ec7161', contentgen: '#60a5fa', enrolment: '#4ade80', progresswatch: '#c084fc' },
    agentLabels: { support: 'Student Support', contentgen: 'Content Gen', enrolment: 'Enrolment', progresswatch: 'Progress' },
    taskList: [
      { id: 't1', agentId: 'support',       label: 'Query: assignment deadline JS101',  trigger: 'chat · LMS' },
      { id: 't2', agentId: 'contentgen',    label: 'Generate: week 4 quiz, Python',     trigger: 'schedule · 07:00' },
      { id: 't3', agentId: 'enrolment',     label: 'Enrolment inquiry: Data Science',   trigger: 'email · prospect' },
      { id: 't4', agentId: 'progresswatch', label: 'At-risk flag: user #2841',          trigger: 'monitor · LMS' },
      { id: 't5', agentId: 'support',       label: 'Policy Q: refund policy',           trigger: 'chat · portal' },
      { id: 't6', agentId: 'contentgen',    label: 'Content: lesson summary W3',        trigger: 'schedule · 07:30' },
    ],
    logPool: {
      support: [
        { time: '09:12:04', type: 'reasoning', text: 'Assignment deadline query — found in course FAQ' },
        { time: '09:12:06', type: 'memory',    text: 'Retrieved 2 course docs from vector store' },
        { time: '09:12:08', type: 'tool',      text: 'lms.fetch_syllabus({course: "JS101", section: "deadlines"})' },
        { time: '09:12:10', type: 'action',    text: 'Answered autonomously — no escalation required ✓' },
      ],
      contentgen: [
        { time: '07:01:03', type: 'reasoning', text: 'Week 4 Python quiz — generating 10 MCQ questions' },
        { time: '07:01:06', type: 'tool',      text: 'llm.generate({type: "quiz", topic: "python_loops"})' },
        { time: '07:01:09', type: 'memory',    text: 'Prior quizzes retrieved — avoiding duplication' },
        { time: '07:01:12', type: 'action',    text: 'Quiz drafted — pending educator review ✓' },
      ],
      enrolment: [
        { time: '10:30:02', type: 'reasoning', text: 'Data Science MSc inquiry — qualifying eligibility' },
        { time: '10:30:04', type: 'tool',      text: 'crm.create_lead({program: "data_science_msc", source: "email"})' },
        { time: '10:30:06', type: 'action',    text: 'Info pack sent — discovery call booked ✓' },
        { time: '10:30:08', type: 'memory',    text: 'Similar inquiries: 84% convert within 2 weeks' },
      ],
      progresswatch: [
        { time: '08:00:02', type: 'reasoning', text: 'User #2841 — 0 logins in 14 days, 3 missed submissions' },
        { time: '08:00:04', type: 'tool',      text: 'lms.flag_atrisk({user: "2841", reason: "engagement_drop"})' },
        { time: '08:00:06', type: 'action',    text: 'Tutor check-in triggered — WhatsApp nudge sent ✓' },
      ],
    },
    agentStats: {
      support:       { s1: { label: 'Queries Resolved',  value: 18421, note: '70% resolved — no human', noteColor: '#4ade80' }, s2: { label: 'Autonomous Rate',   value: '70.4%', bars: [5,6,7,6,8,7,9,8,9,10] }, s3: { label: 'Tokens / Hr', value: 1600000, sub: 'Avg cost: $0.0015' }, s4: { label: 'Avg Response',  value: '0.8s',    sub: 'p95 · 1.9s',          subColor: '#60a5fa' } },
      contentgen:    { s1: { label: 'Content Pieces',    value: 4821,  note: '4× faster production',   noteColor: '#4ade80' }, s2: { label: 'Educator Approval', value: '94.2%', bars: [8,9,9,8,10,9,10,9,10,10] }, s3: { label: 'Tokens / Hr', value: 4800000, sub: 'Avg cost: $0.0042' }, s4: { label: 'Avg Gen Time',  value: '3.2 min', sub: 'prev: 14 min manual',  subColor: '#4ade80' } },
      enrolment:     { s1: { label: 'Leads Converted',   value: 1284,  note: '50% less team workload', noteColor: '#4ade80' }, s2: { label: 'Conversion Rate',   value: '31.4%', bars: [3,4,5,6,5,7,6,7,8,9] }, s3: { label: 'Tokens / Hr', value: 960000,  sub: 'Avg cost: $0.0009' }, s4: { label: 'Avg Response',  value: '1.1s',    sub: 'p95 · 2.4s',          subColor: '#60a5fa' } },
      progresswatch: { s1: { label: 'At-Risk Flagged',   value: 842,   note: '25% better completion',  noteColor: '#4ade80' }, s2: { label: 'Intervention Rate', value: '78.1%', bars: [5,6,7,8,7,9,8,9,9,10] }, s3: { label: 'Tokens / Hr', value: 720000,  sub: 'Avg cost: $0.0007' }, s4: { label: 'Avg Flag Lag',  value: '4.1 hr',  sub: 'prev: 1–2 weeks',     subColor: '#4ade80' } },
    },
    connectedTools: [
      { icon: 'LM', label: 'LMS API',  color: '#60a5fa' },
      { icon: 'Tw', label: 'Twilio',   color: '#4ade80' },
      { icon: 'H',  label: 'HubSpot',  color: '#fb923c' },
      { icon: 'Ca', label: 'Calendly', color: '#c084fc' },
      { icon: 'P',  label: 'Pinecone', color: '#ec7161' },
    ],
    toolKeywords: [['lms','LMS API'],['twilio','Twilio'],['hubspot','HubSpot'],['calendly','Calendly'],['pinecone','Pinecone']],
  },
  'ai-agents-for-logistics': {
    agentColors: { routeopt: '#ec7161', exceptionhandler: '#60a5fa', customernotify: '#4ade80', carriercoord: '#fbbf24' },
    agentLabels: { routeopt: 'Route Opt', exceptionhandler: 'Exception', customernotify: 'Notify', carriercoord: 'Carrier Coord' },
    taskList: [
      { id: 't1', agentId: 'routeopt',         label: 'Route: 34 deliveries, NW8',      trigger: 'schedule · 06:00' },
      { id: 't2', agentId: 'exceptionhandler', label: 'Exception: parcel #88221',        trigger: 'carrier · webhook' },
      { id: 't3', agentId: 'customernotify',   label: 'ETA update: 12 orders',           trigger: 'schedule · 10:00' },
      { id: 't4', agentId: 'carriercoord',     label: 'SLA risk: TNT parcel #4',         trigger: 'monitor · api' },
      { id: 't5', agentId: 'routeopt',         label: 'Route replan: 2 cancellations',   trigger: 'realtime · dispatch' },
      { id: 't6', agentId: 'exceptionhandler', label: 'Failed delivery: address error',  trigger: 'carrier · event' },
    ],
    logPool: {
      routeopt: [
        { time: '06:01:02', type: 'reasoning', text: '34 deliveries, 4 vehicles — calculating optimal routes' },
        { time: '06:01:06', type: 'tool',      text: 'route_engine.optimise({depot: "NW8", stops: 34, vehicles: 4})' },
        { time: '06:01:09', type: 'memory',    text: 'Traffic: M25 incident — avoiding J15–17' },
        { time: '06:01:12', type: 'action',    text: 'Routes dispatched to driver apps ✓ — 18% shorter avg' },
      ],
      exceptionhandler: [
        { time: '09:42:01', type: 'reasoning', text: 'Parcel #88221 — customs hold, recipient unreachable' },
        { time: '09:42:03', type: 'tool',      text: 'twilio.call({recipient: "consignee", reason: "customs_hold"})' },
        { time: '09:42:08', type: 'action',    text: 'Resolution collected — parcel rerouted ✓' },
        { time: '09:42:10', type: 'memory',    text: 'Carrier: DHL — avg resolution 2.4h' },
      ],
      customernotify: [
        { time: '10:00:02', type: 'reasoning', text: '12 orders with updated ETAs — proactive notification' },
        { time: '10:00:04', type: 'tool',      text: 'sms.bulk_send({orders: 12, template: "eta_update"})' },
        { time: '10:00:06', type: 'action',    text: '12 ETA updates sent — 0 inbound WISMO calls ✓' },
      ],
      carriercoord: [
        { time: '11:14:02', type: 'reasoning', text: 'TNT parcel #4 — 4h delay risk, SLA breach in 2h' },
        { time: '11:14:04', type: 'tool',      text: 'carrier_api.escalate({parcel: "TNT-4", priority: "urgent"})' },
        { time: '11:14:07', type: 'action',    text: 'Escalated to TNT priority lane — backup queued ✓' },
      ],
    },
    agentStats: {
      routeopt:         { s1: { label: 'Routes Optimised',   value: 12841, note: '18% shorter on avg',       noteColor: '#4ade80' }, s2: { label: 'On-Time Rate',     value: '96.4%', bars: [7,8,9,8,9,10,9,10,9,10] }, s3: { label: 'Tokens / Hr', value: 2800000, sub: 'Avg cost: $0.0026' }, s4: { label: 'Planning Time',   value: '4.2 min', sub: 'prev: 2–3 hrs manual', subColor: '#4ade80' } },
      exceptionhandler: { s1: { label: 'Exceptions Handled', value: 4821,  note: '80% resolved — no human',  noteColor: '#4ade80' }, s2: { label: 'Auto-Resolution', value: '81.4%', bars: [6,7,8,7,9,8,9,8,9,10] }, s3: { label: 'Tokens / Hr', value: 1800000, sub: 'Avg cost: $0.0016' }, s4: { label: 'Avg Resolution', value: '2.1 hr',  sub: 'prev: 6–12 hrs',      subColor: '#4ade80' } },
      customernotify:   { s1: { label: 'Notifications Sent', value: 84210, note: '60% fewer WISMO calls',    noteColor: '#4ade80' }, s2: { label: 'Open Rate',       value: '74.2%', bars: [6,7,8,7,8,9,8,9,8,10] }, s3: { label: 'Tokens / Hr', value: 960000,  sub: 'Avg cost: $0.0009' }, s4: { label: 'Avg Response',   value: '0.4s',    sub: 'p95 · 0.9s',          subColor: '#60a5fa' } },
      carriercoord:     { s1: { label: 'SLA Breaches',       value: 12,    note: 'prev: 142 last quarter',   noteColor: '#4ade80' }, s2: { label: 'Detection Rate',  value: '99.1%', bars: [8,9,9,10,9,10,9,10,10,10] }, s3: { label: 'Tokens / Hr', value: 1200000, sub: 'Avg cost: $0.0011' }, s4: { label: 'Detection Lag',  value: '3.8 min', sub: 'p95 · 7.2 min',       subColor: '#60a5fa' } },
    },
    connectedTools: [
      { icon: 'RE', label: 'Route Eng', color: '#ec7161' },
      { icon: 'Tw', label: 'Twilio',    color: '#4ade80' },
      { icon: 'DH', label: 'DHL API',   color: '#fbbf24' },
      { icon: 'TN', label: 'TNT API',   color: '#60a5fa' },
      { icon: 'P',  label: 'Pinecone',  color: '#c084fc' },
    ],
    toolKeywords: [['route','Route Eng'],['twilio','Twilio'],['dhl','DHL API'],['tnt','TNT API'],['pinecone','Pinecone']],
  },
  'ai-agents-for-hr-recruiting': {
    agentColors: { cvscreener: '#ec7161', outreach: '#60a5fa', scheduler: '#4ade80', onboarding: '#c084fc' },
    agentLabels: { cvscreener: 'CV Screener', outreach: 'Outreach', scheduler: 'Scheduler', onboarding: 'Onboarding' },
    taskList: [
      { id: 't1', agentId: 'cvscreener', label: 'Screen: 84 CVs — Senior Eng',       trigger: 'ats · Greenhouse' },
      { id: 't2', agentId: 'outreach',   label: 'Outreach: sourced candidates ×12',   trigger: 'linkedin · api' },
      { id: 't3', agentId: 'scheduler',  label: 'Schedule: panel interview — Riya K', trigger: 'calendar · Google' },
      { id: 't4', agentId: 'onboarding', label: 'New hire onboarding: Mark T',        trigger: 'hrms · Workday' },
      { id: 't5', agentId: 'cvscreener', label: 'CV batch: Product Manager role',     trigger: 'ats · Greenhouse' },
      { id: 't6', agentId: 'scheduler',  label: 'Reschedule: interview conflict',     trigger: 'email · candidate' },
    ],
    logPool: {
      cvscreener: [
        { time: '09:05:02', type: 'reasoning', text: 'Ranking 84 CVs — criteria: 5+ yrs, React, system design' },
        { time: '09:05:05', type: 'memory',    text: 'Job spec retrieved — 7 key criteria extracted' },
        { time: '09:05:08', type: 'tool',      text: 'ats.batch_score({role: "senior_eng", cvs: 84})' },
        { time: '09:05:12', type: 'action',    text: 'Shortlist: 9 candidates — ranked and sent to panel ✓' },
      ],
      outreach: [
        { time: '10:00:02', type: 'reasoning', text: '12 sourced candidates — personalising outreach messages' },
        { time: '10:00:04', type: 'tool',      text: 'linkedin.send_inmail({template: "senior_eng_v2", personalised: true})' },
        { time: '10:00:07', type: 'memory',    text: 'Response rate history: 34% on this template' },
        { time: '10:00:09', type: 'action',    text: '12 InMails sent — follow-up queued for day 5 ✓' },
      ],
      scheduler: [
        { time: '11:14:02', type: 'reasoning', text: 'Riya K confirmed — coordinating 3 panel members' },
        { time: '11:14:04', type: 'tool',      text: 'google_calendar.create_event({attendees: ["panel_1","panel_2","panel_3","riya_k"]})' },
        { time: '11:14:07', type: 'action',    text: 'Interview booked · confirmation emails sent ✓' },
        { time: '11:14:09', type: 'memory',    text: 'Riya K preference: mornings — slot: 10am confirmed' },
      ],
      onboarding: [
        { time: '08:00:02', type: 'reasoning', text: 'Mark T start date: Apr 14 — sending Day 1 workflow' },
        { time: '08:00:04', type: 'tool',      text: 'workday.create_employee({id: "mark_t", start: "2026-04-14"})' },
        { time: '08:00:07', type: 'action',    text: 'IT access, docs, and welcome pack sent ✓' },
        { time: '08:00:09', type: 'memory',    text: 'Dept: Engineering, Manager: Sarah L — notified' },
      ],
    },
    agentStats: {
      cvscreener: { s1: { label: 'CVs Screened',       value: 28421, note: '5× faster shortlisting',    noteColor: '#4ade80' }, s2: { label: 'Shortlist Accuracy', value: '91.4%', bars: [7,8,9,8,9,10,9,10,9,10] }, s3: { label: 'Tokens / Hr', value: 3200000, sub: 'Avg cost: $0.0029' }, s4: { label: 'Avg Screen Time',  value: '8 sec/CV', sub: 'prev: 4 min/CV manual',      subColor: '#4ade80' } },
      outreach:   { s1: { label: 'Candidates Reached', value: 8421,  note: '3× higher response rate',  noteColor: '#4ade80' }, s2: { label: 'Response Rate',      value: '34.2%', bars: [4,5,6,7,6,8,7,8,9,10] }, s3: { label: 'Tokens / Hr', value: 1400000, sub: 'Avg cost: $0.0013' }, s4: { label: 'Avg Send Time',    value: '0.6s',    sub: 'p95 · 1.4s',                subColor: '#60a5fa' } },
      scheduler:  { s1: { label: 'Interviews Booked',  value: 2841,  note: '80% less scheduling time', noteColor: '#4ade80' }, s2: { label: 'Booking Rate',       value: '94.1%', bars: [7,8,9,8,10,9,10,9,10,10] }, s3: { label: 'Tokens / Hr', value: 960000,  sub: 'Avg cost: $0.0009' }, s4: { label: 'Avg Coord Time',   value: '1.2 min', sub: 'prev: 2–4 hrs email',        subColor: '#4ade80' } },
      onboarding: { s1: { label: 'Hires Onboarded',    value: 842,   note: '50% less HR overhead',     noteColor: '#4ade80' }, s2: { label: 'Task Completion',    value: '96.8%', bars: [8,9,9,10,9,10,9,10,10,10] }, s3: { label: 'Tokens / Hr', value: 720000,  sub: 'Avg cost: $0.0007' }, s4: { label: 'Day 1 Readiness',  value: '100%',    sub: 'IT + docs pre-provisioned', subColor: '#4ade80' } },
    },
    connectedTools: [
      { icon: 'GH', label: 'Greenhouse', color: '#ec7161' },
      { icon: 'LI', label: 'LinkedIn',   color: '#60a5fa' },
      { icon: 'GC', label: 'Google Cal', color: '#4ade80' },
      { icon: 'WD', label: 'Workday',    color: '#c084fc' },
      { icon: 'P',  label: 'Pinecone',   color: '#fbbf24' },
    ],
    toolKeywords: [['greenhouse','Greenhouse'],['linkedin','LinkedIn'],['google_calendar','Google Cal'],['workday','Workday'],['pinecone','Pinecone']],
  },
};

function PulseDot({ active, color }: { active: boolean; color?: string }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      {active && (
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: color ?? '#ef4444' }}
        />
      )}
      <span
        className="relative inline-flex rounded-full h-2 w-2"
        style={{ background: active ? (color ?? '#ef4444') : '#374151' }}
      />
    </span>
  );
}

function AnimatedCounter({ target }: { target: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    setVal(0);
    const step = Math.ceil(target / 50);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(cur);
      if (cur >= target) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [target]);
  return <>{val.toLocaleString()}</>;
}

export default function AgentWorkspaceIndustry({ slug }: { slug: string }) {
  const dataset = DATASETS[slug] ?? Object.values(DATASETS)[0];

  const { agentColors, agentLabels, logPool, taskList, agentStats, connectedTools, toolKeywords } = dataset;

  function detectTool(text: string): string | null {
    const lower = text.toLowerCase();
    for (const [kw, label] of toolKeywords) {
      if (lower.includes(kw)) return label;
    }
    return null;
  }

  const [taskIdx, setTaskIdx] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<LogEntry[]>([]);
  const [runtime, setRuntime] = useState(0);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const idRef = useRef(0);
  const logPoolIdx = useRef(0);

  const currentTask = taskList[taskIdx];
  const activeAgent = currentTask.agentId;
  const stats = agentStats[activeAgent];
  const agentColor = agentColors[activeAgent];

  useEffect(() => {
    const t = setInterval(() => setTaskIdx((i) => (i + 1) % taskList.length), 6000);
    return () => clearInterval(t);
  }, [taskList.length]);

  useEffect(() => {
    setVisibleLogs([]);
    setActiveTool(null);
    logPoolIdx.current = 0;
    setRuntime(0);

    const pool = logPool[taskList[taskIdx].agentId];
    const addLine = () => {
      const entry = pool[logPoolIdx.current % pool.length];
      setVisibleLogs((prev) => [...prev.slice(-6), { ...entry, id: ++idRef.current }]);
      if (entry.type === 'tool') setActiveTool(detectTool(entry.text));
      logPoolIdx.current++;
    };

    addLine();
    const t = setInterval(addLine, 1800);
    const rt = setInterval(() => setRuntime((r) => r + 1), 1000);
    return () => { clearInterval(t); clearInterval(rt); };
  }, [taskIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  const mins = String(Math.floor(runtime / 60)).padStart(1, '0');
  const secs = String(runtime % 60).padStart(2, '0');

  return (
    <div
      className="w-full rounded-[16px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
      style={{ background: '#0d1117' }}
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]" style={{ background: '#161b22' }}>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="text-[#6b7280] text-[11px] font-mono ml-3">xgenious.cloud · live agent ops</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <PulseDot active color="#ef4444" />
          <span className="text-[#ef4444] font-medium">4 agents running</span>
          <span className="text-[#4b5563]">·</span>
          <span className="text-[#6b7280]">18 tools active</span>
        </div>
      </div>

      <div className="flex" style={{ minHeight: 400 }}>

        <div className="w-[220px] shrink-0 border-r border-white/[0.06] p-4 flex flex-col gap-5" style={{ background: '#0d1117' }}>

          <div className="flex flex-col gap-0.5">
            <p className="text-[#4b5563] text-[9px] font-semibold tracking-widest uppercase mb-2">Task Queue</p>
            {taskList.map((task, idx) => {
              const isActive = idx === taskIdx;
              const color = agentColors[task.agentId];
              return (
                <button
                  key={task.id}
                  onClick={() => setTaskIdx(idx)}
                  className={`flex items-start gap-2 px-2 py-2 rounded-[6px] w-full text-left transition-colors ${isActive ? 'bg-white/[0.07]' : 'hover:bg-white/[0.03]'}`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-[4px] shrink-0 transition-all"
                    style={{ background: color, opacity: isActive ? 1 : 0.3, boxShadow: isActive ? `0 0 6px ${color}` : 'none' }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] leading-[16px] truncate transition-colors" style={{ color: isActive ? '#ffffff' : '#6b7280' }}>
                      {task.label}
                    </p>
                    {isActive && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[9px] text-[#4b5563] truncate mt-0.5">
                        {agentLabels[task.agentId]} · {task.trigger}
                      </motion.p>
                    )}
                  </div>
                  {isActive && <PulseDot active color={color} />}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="text-[#4b5563] text-[9px] font-semibold tracking-widest uppercase mb-2">Connected Tools</p>
            {connectedTools.map((tool) => {
              const isLit = activeTool === tool.label;
              return (
                <div
                  key={tool.label}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-[4px] transition-all duration-300"
                  style={{ background: isLit ? `${tool.color}14` : 'transparent' }}
                >
                  <span className="text-[10px] font-bold w-3 transition-colors duration-300" style={{ color: isLit ? tool.color : '#4b5563' }}>
                    {tool.icon}
                  </span>
                  <span className="text-[11px] flex-1 transition-colors duration-300" style={{ color: isLit ? tool.color : '#6b7280' }}>
                    {tool.label}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{ background: isLit ? tool.color : '#374151', boxShadow: isLit ? `0 0 4px ${tool.color}` : 'none' }}
                  />
                </div>
              );
            })}
          </div>

        </div>

        <div className="flex-1 flex flex-col p-5 gap-4 border-r border-white/[0.06]">
          <div className="flex items-start justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={taskIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white font-semibold text-[14px]">
                  <span style={{ color: agentColor }}>{agentLabels[activeAgent]} Agent</span>
                  {' · '}{currentTask.label}
                </p>
                <p className="text-[#6b7280] text-[11px] mt-0.5">Triggered by {currentTask.trigger}</p>
              </motion.div>
            </AnimatePresence>
            <span className="text-[#6b7280] text-[11px] font-mono shrink-0 ml-4">runtime · {mins}:{secs}</span>
          </div>

          <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
            <AnimatePresence initial={false}>
              {visibleLogs.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-3 text-[11px] leading-5 font-mono"
                >
                  <span className="text-[#374151] shrink-0">{log.time}</span>
                  <span className={`font-semibold shrink-0 ${TYPE_COLOR[log.type] ?? 'text-white'}`}>[{log.type}]</span>
                  <span className="text-[#9ca3af] truncate">{log.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            <div className="flex gap-1 items-center mt-1">
              <span className="text-[#374151] text-[11px] font-mono">›</span>
              <motion.span
                className="inline-block w-1.5 h-3.5 rounded-sm"
                style={{ background: agentColor }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>

          <div className="flex gap-3">
            {[
              { label: 'GPT-4o',     sub: 'primary llm',    bg: '#1e3a5f' },
              { label: 'LangGraph',  sub: 'orchestration',  bg: '#2d1f47' },
              { label: 'Vector RAG', sub: '128k context',   bg: '#1a2e1a' },
              { label: 'Tool Use',   sub: 'function calls', bg: '#3b1f1a' },
            ].map((c) => (
              <div key={c.label} className="flex flex-col px-3 py-2 rounded-[8px] flex-1" style={{ background: c.bg }}>
                <span className="text-white text-[11px] font-semibold">{c.label}</span>
                <span className="text-[#6b7280] text-[10px]">{c.sub}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[220px] shrink-0 p-4 flex flex-col gap-3" style={{ background: '#0d1117' }}>

          <div className="flex flex-col gap-1 p-3 rounded-[10px] overflow-hidden relative" style={{ background: '#161b22' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`s1-${activeAgent}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-1"
              >
                <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">{stats.s1.label}</p>
                <p className="text-white text-[22px] font-bold leading-none mt-1">
                  <AnimatedCounter key={`c1-${activeAgent}`} target={stats.s1.value} />
                </p>
                <p className="text-[10px] mt-0.5" style={{ color: stats.s1.noteColor }}>{stats.s1.note}</p>
              </motion.div>
            </AnimatePresence>
            <motion.div
              key={`accent1-${activeAgent}`}
              className="absolute bottom-0 left-0 h-[2px]"
              style={{ background: agentColor }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>

          <div className="flex flex-col gap-1 p-3 rounded-[10px] overflow-hidden relative" style={{ background: '#161b22' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`s2-${activeAgent}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="flex flex-col gap-1"
              >
                <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">{stats.s2.label}</p>
                <p className="text-white text-[22px] font-bold leading-none mt-1">{stats.s2.value}</p>
                <div className="flex items-end gap-0.5 mt-2 h-8">
                  {stats.s2.bars.map((h, i) => (
                    <motion.div
                      key={`${activeAgent}-bar-${i}`}
                      className="flex-1 rounded-sm"
                      style={{ background: agentColor }}
                      initial={{ height: 0 }}
                      animate={{ height: h * 3.2 }}
                      transition={{ duration: 0.5, delay: i * 0.04, ease: 'easeOut' }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-1 p-3 rounded-[10px] overflow-hidden relative" style={{ background: '#161b22' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`s3-${activeAgent}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="flex flex-col gap-1"
              >
                <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">{stats.s3.label}</p>
                <p className="text-white text-[22px] font-bold leading-none mt-1">
                  <AnimatedCounter key={`c3-${activeAgent}`} target={stats.s3.value} />
                </p>
                <p className="text-[#6b7280] text-[10px] mt-0.5">{stats.s3.sub}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-1 p-3 rounded-[10px] overflow-hidden relative" style={{ background: '#161b22' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`s4-${activeAgent}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="flex flex-col gap-1"
              >
                <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">{stats.s4.label}</p>
                <p className="text-white text-[22px] font-bold leading-none mt-1">{stats.s4.value}</p>
                <p className="text-[10px] mt-0.5" style={{ color: stats.s4.subColor }}>{stats.s4.sub}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
