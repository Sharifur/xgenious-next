'use client';
import { useState } from 'react';

const COLOR = '#f26b4e';

const QUESTION_BANK: Record<string, Record<string, string[]>> = {
  'Software Engineer': {
    Technical: [
      'Explain the difference between a stack and a queue. When would you use each?',
      'What is time complexity? Give an example of O(n²) and how you would optimize it.',
      'Describe the difference between REST and GraphQL. When would you choose one over the other?',
      'How does garbage collection work in your primary language?',
      'Explain SOLID principles and give a real example for each.',
      'What is the CAP theorem and how does it affect distributed system design?',
      'Describe how you would design a URL shortener like bit.ly.',
      'What are the differences between SQL and NoSQL databases? Give use cases for each.',
    ],
    Behavioral: [
      'Tell me about a time you had to refactor a large, poorly-written codebase. What was your approach?',
      'Describe a production incident you experienced. How did you diagnose and resolve it?',
      'How do you approach code reviews? What makes a good review?',
      'Tell me about a technical disagreement with a colleague. How did you resolve it?',
    ],
    'System Design': [
      'How would you design a notification system that handles 1M users?',
      'Design a rate limiter for an API.',
      'How would you architect a real-time chat application?',
      'Design a job scheduling system with priorities and retries.',
    ],
  },
  'Product Manager': {
    Strategy: [
      'How do you prioritize features when everything seems equally important?',
      'Walk me through how you would approach entering a new market.',
      'Describe your product roadmap process. How do you get buy-in from stakeholders?',
      'How do you decide when to kill a feature?',
    ],
    Analytics: [
      'How do you define and measure product success?',
      'Walk me through a time you used data to make a product decision.',
      'What metrics would you use to evaluate the health of a SaaS product?',
      'How do you design an A/B test? What are common pitfalls?',
    ],
    Behavioral: [
      'Tell me about a product you launched that failed. What did you learn?',
      'How do you handle conflicting priorities from engineering, design, and business?',
      'Describe how you gather customer requirements.',
    ],
  },
  'UI/UX Designer': {
    Design: [
      'Walk me through your design process from research to final handoff.',
      'How do you handle design feedback you disagree with?',
      'How do you ensure accessibility in your designs?',
      'Describe a time you simplified a complex user flow.',
    ],
    Research: [
      'What user research methods have you used? When do you use qualitative vs quantitative?',
      'How do you validate a design before handing it off to development?',
      'How do you test designs with users on a tight budget?',
    ],
  },
  'Sales': {
    Skills: [
      'Walk me through your typical sales process from lead to close.',
      'How do you handle objections around pricing?',
      'Describe your approach to prospecting.',
      'How do you manage a large pipeline without losing deals?',
    ],
    Behavioral: [
      'Tell me about your biggest win. How did you close it?',
      'Describe a deal you lost. What would you do differently?',
      'How do you build relationships with decision-makers you cannot easily access?',
    ],
  },
};

export default function InterviewQuestionGenerator() {
  const [role, setRole] = useState('Software Engineer');
  const [category, setCategory] = useState('Technical');
  const [count, setCount] = useState(5);
  const [questions, setQuestions] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const roles = Object.keys(QUESTION_BANK);
  const categories = Object.keys(QUESTION_BANK[role] || {});

  function generate() {
    const pool = QUESTION_BANK[role]?.[category] ?? [];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, count));
  }

  function copy() {
    navigator.clipboard.writeText(questions.map((q, i) => `${i + 1}. ${q}`).join('\n\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Role</label>
          <select value={role} onChange={(e) => { setRole(e.target.value); setCategory(Object.keys(QUESTION_BANK[e.target.value])[0]); setQuestions([]); }}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors">
            {roles.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Category</label>
          <select value={category} onChange={(e) => { setCategory(e.target.value); setQuestions([]); }}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors">
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-[13px] font-semibold text-[#0F1112]">Number of Questions: {count}</label>
          <input type="range" min={3} max={Math.min(10, QUESTION_BANK[role]?.[category]?.length ?? 5)}
            value={count} onChange={(e) => setCount(+e.target.value)}
            className="w-full accent-[#f26b4e]" />
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={generate}
          className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95"
          style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}>
          Generate Questions
        </button>
        {questions.length > 0 && (
          <button onClick={copy} className="text-[13px] text-[#f26b4e] hover:underline self-center">
            {copied ? 'Copied!' : 'Copy All'}
          </button>
        )}
      </div>

      {questions.length > 0 && (
        <div className="flex flex-col gap-3">
          {questions.map((q, i) => (
            <div key={i} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 flex gap-3">
              <span className="text-[16px] font-bold shrink-0" style={{ color: COLOR }}>{i + 1}.</span>
              <p className="text-[14px] text-[#0F1112] leading-6">{q}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
