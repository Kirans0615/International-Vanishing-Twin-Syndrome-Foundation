import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, ArrowRight, Microscope, Stethoscope, Building2, BookOpen, Megaphone, Globe } from 'lucide-react'
import { useReveal } from '../hooks/useInView'
import { HiggsVideo } from '../components/HiggsVideo'
import { HIGGSFIELD } from '../assets/higgsfield'

const COLLAB_TYPES = [
  {
    Icon: Microscope,
    color: '#6B2DB5',
    title: 'Research Collaboration',
    desc: 'Partner with IVTSF on studies, registries, data initiatives, or publication efforts related to VTS, multifetal pregnancy, or perinatal outcomes.',
  },
  {
    Icon: Stethoscope,
    color: '#4DB8E8',
    title: 'Clinical Partnership',
    desc: 'Work with us to develop clinical resources, patient education tools, or provider training materials for VTS-aware care.',
  },
  {
    Icon: Building2,
    color: '#C2408C',
    title: 'Organizational Partnership',
    desc: 'Join our network of nonprofit, advocacy, and healthcare organizations committed to improving outcomes for multiple-birth families.',
  },
  {
    Icon: BookOpen,
    color: '#4A1A8C',
    title: 'Academic & Educational Institutions',
    desc: 'Collaborate on curricula, student projects, continuing education, or institutional VTS awareness initiatives.',
  },
  {
    Icon: Megaphone,
    color: '#8B3FD4',
    title: 'Media & Press',
    desc: 'Journalists, documentarians, and content creators are welcome to reach out for interviews, fact-checking, or editorial partnerships.',
  },
  {
    Icon: Globe,
    color: '#4DB8E8',
    title: 'International Outreach',
    desc: 'We actively seek international partners to help expand access to VTS resources and support across diverse languages and healthcare systems.',
  },
]

const COLLAB_CATEGORIES = [
  'Research collaboration',
  'Clinical partnership',
  'Organizational / nonprofit partnership',
  'Academic or educational institution',
  'Media or press inquiry',
  'Grant or funding partnership',
  'International outreach',
  'Other',
] as const

type CollabCategory = (typeof COLLAB_CATEGORIES)[number]

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

export function Collaborate() {
  const [form, setForm] = useState({
    org: '',
    contact: '',
    email: '',
    category: '' as CollabCategory | '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const inputStyle: React.CSSProperties = {
    background: '#FAF8FF',
    border: '1px solid rgba(139,63,212,0.2)',
    borderRadius: 12,
    padding: '14px 20px',
    color: '#1A1020',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s ease',
    width: '100%',
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Partnership / Collaboration Request — ${form.org || form.contact}`)
    const body = encodeURIComponent(
      `Organization / Institution: ${form.org}\nContact Name: ${form.contact}\nEmail: ${form.email}\nType of Collaboration: ${form.category}\n\n${form.message}`
    )
    window.location.href = `mailto:contact@vanishingtwinsyndrome.org?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <div className="relative h-[50vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.contactHero}
          fallbackGradient="linear-gradient(135deg, #2D1060 0%, #4A1A8C 60%, #9B2D6E 100%)"
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.35) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4 tracking-[-0.02em]">
            Collaboration &amp; Partnerships
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Partner with the IVTSF to advance VTS awareness, research, and support for families worldwide.
          </p>
        </div>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">

          {/* ── Intro ── */}
          <RevealDiv className="mb-14">
            <div className="max-w-3xl">
              <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-5">
                Let's Build Something Together
              </h2>
              <p className="text-[#1A1020]/65 text-lg leading-relaxed mb-4">
                The IVTSF believes that advancing understanding of vanishing twin syndrome requires collaboration across disciplines, institutions, and communities. We welcome partnership requests from researchers, clinicians, advocacy organizations, academic institutions, media professionals, and others who share our commitment to improving outcomes for families affected by multiple pregnancy loss.
              </p>
              <p className="text-[#1A1020]/65 text-base leading-relaxed">
                Whether you're looking to co-develop resources, explore joint research, expand international reach, or simply connect — we'd love to hear from you.
              </p>
            </div>
          </RevealDiv>

          {/* ── Types of Collaboration ── */}
          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-2">
              Areas of Collaboration
            </h2>
            <p className="text-[#1A1020]/50 text-base">
              We welcome requests across a broad range of partnership types.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {COLLAB_TYPES.map(({ Icon, color, title, desc }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${(i % 3) + 1}`}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)', boxShadow: '0 2px 12px rgba(74,26,140,0.04)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} color={color} aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-base mb-2">{title}</h3>
                  <p className="text-sm text-[#1A1020]/55 leading-relaxed flex-1">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mb-5">
            <div
              className="rounded-xl p-5 flex items-start gap-3"
              style={{ background: 'rgba(74,26,140,0.05)', border: '1px solid rgba(107,45,181,0.12)' }}
            >
              <ArrowRight size={16} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-[#1A1020]/60 leading-relaxed">
                Not sure which category fits? We'd still love to hear from you — use the form below and describe your idea or inquiry, and we'll follow up to explore how we might work together.
              </p>
            </div>
          </RevealDiv>

          {/* Partners link */}
          <RevealDiv className="mb-16">
            <p className="text-sm text-[#1A1020]/50 leading-relaxed">
              To see our current partners and supported organizations, visit the{' '}
              <Link to="/knowledge-hub/partners" className="font-medium underline underline-offset-2" style={{ color: '#6B2DB5' }}>
                Partners &amp; Resources page
              </Link>.
            </p>
          </RevealDiv>

          {/* ── Form ── */}
          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-2">
              Submit a Partnership Request
            </h2>
            <p className="text-[#1A1020]/50 text-base">
              Fill in the details below and a member of the IVTSF team will be in touch.
            </p>
          </RevealDiv>

          <div className="max-w-2xl">
            {submitted ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
              >
                <p className="font-serif font-semibold text-[#1A1020] text-2xl mb-3">
                  Thank you for reaching out.
                </p>
                <p className="text-[#1A1020]/60 text-base leading-relaxed mb-6">
                  Your request has been sent. The IVTSF team will review it and follow up at the email address you provided. For urgent inquiries, contact us directly at{' '}
                  <a href="mailto:contact@vanishingtwinsyndrome.org" className="text-[#6B2DB5] underline">
                    contact@vanishingtwinsyndrome.org
                  </a>
                  .
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: '#6B2DB5' }}
                >
                  Back to Contact
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-10 flex flex-col gap-6"
                style={{ background: '#fff', border: '1px solid rgba(139,63,212,0.1)', boxShadow: '0 2px 16px rgba(74,26,140,0.05)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1A1020]/70 mb-2" htmlFor="org">
                      Organization / Institution <span style={{ color: '#C2408C' }}>*</span>
                    </label>
                    <input
                      id="org"
                      name="org"
                      type="text"
                      required
                      value={form.org}
                      onChange={e => setForm(p => ({ ...p, org: e.target.value }))}
                      placeholder="Your organization or institution"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#6B2DB5')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(139,63,212,0.2)')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1020]/70 mb-2" htmlFor="contact">
                      Contact Name <span style={{ color: '#C2408C' }}>*</span>
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      value={form.contact}
                      onChange={e => setForm(p => ({ ...p, contact: e.target.value }))}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#6B2DB5')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(139,63,212,0.2)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1020]/70 mb-2" htmlFor="email">
                    Email Address <span style={{ color: '#C2408C' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#6B2DB5')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(139,63,212,0.2)')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1020]/70 mb-2" htmlFor="category">
                    Type of Collaboration <span style={{ color: '#C2408C' }}>*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={form.category}
                    onChange={e => setForm(p => ({ ...p, category: e.target.value as CollabCategory }))}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#6B2DB5')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(139,63,212,0.2)')}
                  >
                    <option value="" disabled>Select a category…</option>
                    {COLLAB_CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1020]/70 mb-2" htmlFor="message">
                    Tell us about your proposal <span style={{ color: '#C2408C' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Describe the partnership or collaboration you have in mind — goals, scope, timeline, and any relevant context."
                    rows={6}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 160 }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#6B2DB5')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(139,63,212,0.2)')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-white font-semibold transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                >
                  <Send size={16} />
                  Submit Partnership Request
                </button>
              </form>
            )}

            <p className="text-center text-xs text-[#1A1020]/40 italic mt-6 leading-relaxed">
              Submissions are reviewed by the IVTSF team. We aim to respond within 5–10 business days.{' '}
              <a href="mailto:contact@vanishingtwinsyndrome.org" className="underline">
                contact@vanishingtwinsyndrome.org
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
