import ScreenshotGallery from '@/components/ui/ScreenshotGallery';
import { DEMO_URL } from './constants';

const SCREENSHOTS = [
  {
    src: '/site-images/free-software/genius-support/dashboard.png',
    alt: 'Genius Support: Admin dashboard showing knowledge base stats (total pages, published, drafts, admins, users), recent pages list, quick actions to create or manage pages, and system status displaying Laravel 12.21.0 and PHP 8.4.20',
    title: 'Admin Dashboard',
    description: 'Knowledge base stats, admin and user counts, quick actions, and live system status (Laravel and PHP version)',
  },
  {
    src: '/site-images/free-software/genius-support/agent-ticket-queue.png',
    alt: 'Genius Support: Agent ticket queue showing tabs for All Open, Unassigned, Mine, Overdue, and Recently Closed with counts, ticket rows with customer name, status badges (Open, In Progress, On Hold), priority (High, Normal, Urgent), assigned agent, and created date, plus bulk select and assign controls',
    title: 'Agent Ticket Queue',
    description: 'Tabbed queue: All Open, Unassigned, Mine, Overdue, with priority, status, assignment, bulk select, and search filters',
  },
  {
    src: '/site-images/free-software/genius-support/ticket-detail.png',
    alt: 'Genius Support: Agent ticket detail showing full conversation thread with customer messages, agent replies, and a highlighted internal note visible only to agents, plus sidebar controls for status, priority, assigned agent, department, customer info, and ticket merge',
    title: 'Agent Ticket Detail',
    description: 'Conversation thread with internal notes, canned responses, and sidebar controls for status, priority, assignment, department, and ticket merging',
  },
  {
    src: '/site-images/free-software/genius-support/customer-portal.png',
    alt: 'Genius Support: Customer portal dashboard showing open, resolved, and closed ticket counts, recent ticket list with priority badges and status, quick actions panel, and ticket status guide',
    title: 'Customer Portal',
    description: 'Open/resolved/closed counts, recent tickets with priority and status badges, quick actions, and status guide, all in one view',
  },
  {
    src: '/site-images/free-software/genius-support/knowledge-base.png',
    alt: 'Genius Support: Customer-facing knowledge base showing article search bar, categorised articles (Refund Request, Bug Report) with titles and view counts, and a submit ticket fallback link',
    title: 'Knowledge Base',
    description: 'Searchable self-service articles grouped by category with view counts; customers find answers before submitting a ticket',
  },
  {
    src: '/site-images/free-software/genius-support/email-to-ticket.png',
    alt: 'Genius Support: Email Settings admin panel showing SMTP outbound configuration (host, port, TLS encryption, from name and email) and IMAP inbound email-to-ticket configuration (host, port 993, SSL encryption)',
    title: 'Email Settings',
    description: 'SMTP outbound for agent replies and IMAP inbound for email-to-ticket; both configured from one admin panel',
  },
];

export default function Screenshots() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-10">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112]">
            See It in Action
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[480px] mx-auto leading-6">
            Real screenshots from the application. Every screen shown is fully functional and included free.
          </p>
        </div>
        <ScreenshotGallery
          demoUrl={DEMO_URL}
          screenshots={SCREENSHOTS}
        />
      </div>
    </section>
  );
}
