import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowLeft, CheckCircle, Heart } from 'lucide-react'

const SUBMISSION_OPTIONS = [
  'Share publicly on the IVTSF website',
  'Share anonymously',
  'Include photographs or memorial images',
  'Contribute stories for educational or advocacy purposes',
  'Submit stories privately for future research or archival initiatives',
]

const COMMITMENTS = [
  'Respect family language and identity preferences',
  'Never alter the meaning of shared experiences',
  'Honor requests for anonymity or removal',
  'Approach all submissions with compassion and dignity',
  'Avoid sensationalising grief or trauma',
]
import { HiggsVideo } from '../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../assets/higgsfield'

export function ShareYourStory() {
  const [firstName, setFirstName] = useState('')
  const [country, setCountry] = useState('')
  const [story, setStory] = useState('')
  const [credit, setCredit] = useState<'first-name' | 'anonymous' | 'reference-only'>('first-name')
  const [consented, setConsented] = useState(false)
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

  return (
    <>
      <div className="relative h-[48vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.storiesHero}
          fallbackGradient={FALLBACKS.magentaDeep}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.35) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Share Your Story</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Your experience matters — and others may find comfort in knowing they are not alone.
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Sensitive content notice */}
          <div
            className="rounded-2xl border-2 border-amber-300 p-6 mb-12"
            style={{ background: '#FFFBEB' }}
          >
            <div className="flex items-start gap-4">
              <AlertTriangle size={20} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
              <p className="text-amber-700 text-sm leading-relaxed">
                Stories are reviewed before publication to ensure they align with our trauma-informed communication standards. Sharing is entirely optional and voluntary.
              </p>
            </div>
          </div>

          {/* ── Your Story Matters ── */}
          <div className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-5">
              Your Story Matters
            </h2>
            <p className="text-[#1A1020]/65 text-base leading-relaxed">
              Whether you write a few sentences or several pages, or whether your loss occurred early or later in pregnancy, your experience may help another family feel recognized, understood, and less alone. By submitting your story below, you are helping us build a space for shared healing and advocacy.
            </p>
          </div>

          {/* ── Submission Options + Commitment ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {/* Options */}
            <div
              className="rounded-2xl p-7"
              style={{ background: '#F0EBF8', border: '1px solid rgba(107,45,181,0.08)' }}
            >
              <h3 className="font-serif font-semibold text-[#1A1020] text-xl mb-4">
                Story Submission Options
              </h3>
              <p className="text-sm text-[#1A1020]/55 mb-4 leading-relaxed">
                Families may choose to:
              </p>
              <ul className="flex flex-col gap-3">
                {SUBMISSION_OPTIONS.map((opt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-sm text-[#1A1020]/65 leading-relaxed">{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commitment */}
            <div
              className="rounded-2xl p-7"
              style={{ background: '#1A0A3D' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart size={18} color="#C2408C" className="flex-shrink-0" aria-hidden />
                <h3 className="font-serif font-semibold text-white text-xl">
                  Our Commitment to Families
                </h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                The IVTSF is committed to sharing stories in a respectful, trauma-informed, and family-centred manner. We recognize that experiences of multiple loss are deeply personal and may evolve over time.
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#C2408C', fontFamily: 'DM Mono, monospace' }}>We will:</p>
              <ul className="flex flex-col gap-3">
                {COMMITMENTS.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} color="#C2408C" className="flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-sm text-white/60 leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-10" style={{ borderTop: '1px solid rgba(107,45,181,0.1)' }} />

          {/* Form container — narrower */}
          <div className="max-w-2xl mx-auto">

          {submitted ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
            >
              <p className="font-serif font-semibold text-[#1A1020] text-2xl mb-3">
                Thank you for sharing your story.
              </p>
              <p className="text-[#1A1020]/60 text-base leading-relaxed mb-6">
                Your submission has been received. The IVTSF team will review it with care. You may contact us at any time at{' '}
                <a
                  href="mailto:contact@vanishingtwinsyndrome.org"
                  className="text-[#6B2DB5] underline"
                >
                  contact@vanishingtwinsyndrome.org
                </a>
                .
              </p>
              <Link
                to="/knowledge-hub/stories"
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: '#6B2DB5' }}
              >
                <ArrowLeft size={14} />
                Back to Stories of Multiple Loss
              </Link>
            </div>
          ) : (
            <form
              onSubmit={e => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="rounded-2xl p-10 flex flex-col gap-6"
              style={{
                background: '#fff',
                border: '1px solid rgba(139,63,212,0.1)',
                boxShadow: '0 2px 16px rgba(74,26,140,0.05)',
              }}
            >
              <div>
                <label
                  className="block text-sm font-medium text-[#1A1020]/70 mb-2"
                  htmlFor="firstName"
                >
                  First name <span style={{ color: '#C2408C' }}>*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  placeholder="Your first name"
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = '#6B2DB5')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(139,63,212,0.2)')}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-[#1A1020]/70 mb-2"
                  htmlFor="country"
                >
                  Country / Region <span className="text-[#1A1020]/30 font-normal">(optional)</span>
                </label>
                <input
                  id="country"
                  type="text"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  placeholder="e.g. United States, United Kingdom"
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = '#6B2DB5')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(139,63,212,0.2)')}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-[#1A1020]/70 mb-2"
                  htmlFor="story"
                >
                  Your story <span style={{ color: '#C2408C' }}>*</span>
                </label>
                <textarea
                  id="story"
                  required
                  value={story}
                  onChange={e => setStory(e.target.value)}
                  placeholder="Share as much or as little as you feel comfortable with. You may use your own words and terminology."
                  rows={8}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 192 }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#6B2DB5')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(139,63,212,0.2)')}
                />
              </div>

              <div>
                <p className="block text-sm font-medium text-[#1A1020]/70 mb-3">
                  How would you like to be credited?
                </p>
                <div className="flex flex-col gap-3">
                  {(
                    [
                      { value: 'first-name', label: 'First name only' },
                      { value: 'anonymous', label: 'Anonymous' },
                      { value: 'reference-only', label: 'Do not publish — submit for IVTSF reference only' },
                    ] as const
                  ).map(opt => (
                    <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="credit"
                        value={opt.value}
                        checked={credit === opt.value}
                        onChange={() => setCredit(opt.value)}
                        style={{ accentColor: '#6B2DB5' }}
                      />
                      <span className="text-sm text-[#1A1020]/70">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={consented}
                    onChange={e => setConsented(e.target.checked)}
                    className="mt-1 flex-shrink-0"
                    style={{ accentColor: '#6B2DB5' }}
                  />
                  <span className="text-sm text-[#1A1020]/65 leading-relaxed">
                    I consent to IVTSF reviewing and potentially publishing this story in accordance with their communication guidelines. I understand I may withdraw consent at any time by contacting{' '}
                    <a
                      href="mailto:contact@vanishingtwinsyndrome.org"
                      className="text-[#6B2DB5] underline"
                    >
                      contact@vanishingtwinsyndrome.org
                    </a>
                    . <span style={{ color: '#C2408C' }}>*</span>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full text-white font-semibold transition-all hover:brightness-110 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                Submit Your Story
              </button>
            </form>
          )}

          </div>{/* end max-w-2xl form container */}

          {/* Privacy note */}
          <p className="text-center text-xs text-[#1A1020]/40 italic max-w-lg mx-auto mt-6 leading-relaxed">
            Stories submitted here are reviewed by the IVTSF team. Personal information is handled in accordance with our Privacy Policy and GDPR/HIPAA standards. You may request removal of your story at any time.
          </p>

          {/* Back link */}
          <div className="flex justify-center mt-8">
            <Link
              to="/knowledge-hub/stories"
              className="inline-flex items-center gap-1.5 text-sm font-medium"
              style={{ color: '#6B2DB5' }}
            >
              <ArrowLeft size={14} />
              Back to Stories of Multiple Loss
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
