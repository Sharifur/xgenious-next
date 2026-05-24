'use client';
import { useState } from 'react';

const COLOR = '#f26b4e';

const TONE_OPTIONS = ['Professional', 'Friendly', 'Startup', 'Technical'];

const TEMPLATES: Record<string, Partial<{ responsibilities: string; requirements: string; niceToHave: string }>> = {
  'Software Engineer': {
    responsibilities: `- Design, develop, and maintain scalable backend and frontend systems
- Collaborate with product and design teams to deliver high-quality features
- Write clean, testable, and well-documented code
- Participate in code reviews and technical discussions
- Troubleshoot and resolve production issues`,
    requirements: `- 3+ years of software development experience
- Proficiency in JavaScript/TypeScript, Python, or Go
- Experience with REST APIs and microservices
- Familiarity with cloud platforms (AWS, GCP, or Azure)
- Strong problem-solving and communication skills`,
    niceToHave: `- Experience with Docker and Kubernetes
- Contributions to open-source projects
- Knowledge of CI/CD pipelines`,
  },
  'Product Manager': {
    responsibilities: `- Define and communicate product vision, strategy, and roadmap
- Gather and prioritize requirements from stakeholders and customers
- Work closely with engineering, design, and marketing teams
- Track product KPIs and iterate based on data
- Write detailed product specifications and user stories`,
    requirements: `- 3+ years of product management experience
- Strong analytical and data-driven decision-making skills
- Experience with agile development methodologies
- Excellent written and verbal communication
- Proven track record of shipping successful products`,
    niceToHave: '',
  },
  'UI/UX Designer': {
    responsibilities: `- Create wireframes, prototypes, and high-fidelity mockups
- Conduct user research and usability testing
- Collaborate with engineers to ensure pixel-perfect implementation
- Maintain and evolve the design system
- Advocate for user-centered design principles`,
    requirements: `- 2+ years of UI/UX design experience
- Proficiency in Figma or Sketch
- Strong portfolio demonstrating end-to-end design process
- Understanding of accessibility standards (WCAG)
- Experience working in cross-functional agile teams`,
    niceToHave: '',
  },
};

export default function JobDescriptionGenerator() {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('Remote');
  const [type, setType] = useState('Full-time');
  const [tone, setTone] = useState('Professional');
  const [responsibilities, setResponsibilities] = useState('');
  const [requirements, setRequirements] = useState('');
  const [niceToHave, setNiceToHave] = useState('');
  const [salary, setSalary] = useState('');
  const [generated, setGenerated] = useState('');
  const [copied, setCopied] = useState(false);

  function applyTemplate(key: string) {
    const t = TEMPLATES[key];
    if (!t) return;
    setTitle(key);
    if (t.responsibilities) setResponsibilities(t.responsibilities);
    if (t.requirements) setRequirements(t.requirements);
    if (t.niceToHave !== undefined) setNiceToHave(t.niceToHave);
  }

  function generate() {
    const intro = tone === 'Startup'
      ? `We're building something exciting at ${company || 'our company'} and we need a talented ${title || 'team member'} to join us.`
      : tone === 'Friendly'
      ? `Hey! We're ${company || 'a great team'} and we're looking for an awesome ${title || 'person'} to join our crew.`
      : `${company || '[Company Name]'} is seeking a ${type.toLowerCase()} ${title || '[Job Title]'} to join our team.`;

    const jd = `## ${title || '[Job Title]'}
${company ? `**Company:** ${company}` : ''}
**Location:** ${location} · **Type:** ${type}${salary ? ` · **Salary:** ${salary}` : ''}

---

${intro}

### About the Role

${responsibilities ? `### Key Responsibilities\n\n${responsibilities}` : ''}

${requirements ? `### Requirements\n\n${requirements}` : ''}

${niceToHave ? `### Nice to Have\n\n${niceToHave}` : ''}

### Why Join Us

- Competitive compensation and benefits
- Flexible, remote-friendly work environment
- Opportunity to work on meaningful problems
- Collaborative and inclusive team culture

---

*${company || 'We'} ${tone === 'Startup' ? 'move fast and value impact over process.' : 'are an equal opportunity employer.'}*`;

    setGenerated(jd);
  }

  function copy() {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        <span className="text-[13px] text-[#6b7280] self-center">Quick templates:</span>
        {Object.keys(TEMPLATES).map((k) => (
          <button
            key={k} onClick={() => applyTemplate(k)}
            className="px-3 py-1.5 rounded-full border border-[#E5E7EC] text-[12px] text-[#484848] hover:border-[#f26b4e] hover:text-[#f26b4e] transition-colors"
          >
            {k}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Job Title *', val: title, set: setTitle, ph: 'Senior Software Engineer' },
          { label: 'Company Name', val: company, set: setCompany, ph: 'Acme Inc.' },
          { label: 'Location', val: location, set: setLocation, ph: 'Remote / New York' },
          { label: 'Salary Range', val: salary, set: setSalary, ph: '$80k–$120k / year' },
        ].map(({ label, val, set, ph }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input type="text" value={val} onChange={(e) => set(e.target.value)} placeholder={ph}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-2.5 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
          </div>
        ))}

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Job Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-2.5 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors">
            {['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'].map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Tone</label>
          <div className="flex gap-1.5 flex-wrap">
            {TONE_OPTIONS.map((t) => (
              <button key={t} onClick={() => setTone(t)}
                className="px-3 py-1.5 rounded-full border text-[12px] font-medium transition-colors"
                style={tone === t ? { background: COLOR, color: '#fff', borderColor: COLOR } : { borderColor: '#E5E7EC', color: '#484848' }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {[
        { label: 'Key Responsibilities', val: responsibilities, set: setResponsibilities, ph: '- Lead the design of...\n- Collaborate with...' },
        { label: 'Requirements', val: requirements, set: setRequirements, ph: '- 3+ years experience...\n- Strong knowledge of...' },
        { label: 'Nice to Have (optional)', val: niceToHave, set: setNiceToHave, ph: '- Familiarity with...' },
      ].map(({ label, val, set, ph }) => (
        <div key={label} className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
          <textarea value={val} onChange={(e) => set(e.target.value)} placeholder={ph} rows={5}
            className="w-full rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-y focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
        </div>
      ))}

      <button
        onClick={generate}
        className="self-start inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95"
        style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
      >
        Generate Job Description
      </button>

      {generated && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-semibold text-[#0F1112]">Generated Job Description</label>
            <button onClick={copy} className="text-[12px] text-[#f26b4e] hover:underline">{copied ? 'Copied!' : 'Copy'}</button>
          </div>
          <pre className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] px-5 py-4 text-[13px] text-[#0F1112] whitespace-pre-wrap font-sans leading-6 overflow-auto min-h-[300px]">
            {generated}
          </pre>
        </div>
      )}
    </div>
  );
}
