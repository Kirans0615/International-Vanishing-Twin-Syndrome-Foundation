import { useState } from 'react';
import { AlertTriangle, Mail, MapPin, Phone, ExternalLink, Send } from 'lucide-react';
import { useReveal } from '../hooks/useInView';
import { HiggsVideo } from '../components/HiggsVideo';
import { HIGGSFIELD } from '../assets/higgsfield';

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link as a simple, serverless contact option
    const subject = encodeURIComponent(form.subject || 'IVTSF Contact Form');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:contact@vanishingtwinsyndrome.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <div className="relative h-[45vh] overflow-hidden">
        <HiggsVideo src={HIGGSFIELD.videos.contactHero} fallbackGradient="linear-gradient(135deg, #2D1060 0%, #4A1A8C 60%, #9B2D6E 100%)" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.85) 0%, rgba(10,4,28,0.3) 100%)' }} aria-hidden />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">We are here to listen, collaborate, and help connect you with the right resources.</p>
        </div>
      </div>

      {/* PROMINENT CRISIS DISCLAIMER */}
      <section className="px-6 py-6">
        <div className="max-w-4xl mx-auto rounded-2xl border-2 border-amber-400 p-6" style={{ background: '#FFFBEB' }}>
          <div className="flex items-start gap-4">
            <AlertTriangle size={24} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
            <div>
              <h2 className="font-semibold text-amber-800 text-base mb-2">Important: IVTSF Is Not a Crisis Service</h2>
              <p className="text-amber-700 text-sm leading-relaxed mb-3">
                IVTSF cannot provide emergency counseling, crisis support, or immediate mental health assistance. If you or someone you know is experiencing a mental health crisis, suicidal ideation, or thoughts of self-harm, please contact a crisis service immediately.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:988"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
                  style={{ background: '#D97706' }}
                >
                  <Phone size={13} />
                  988 Suicide &amp; Crisis Lifeline
                </a>
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-amber-800 text-sm font-semibold border border-amber-400 hover:bg-amber-50 transition-colors"
                >
                  <ExternalLink size={13} />
                  International Crisis Lines
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pb-20 pt-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-2">
            <RevealDiv className="reveal-left mb-8">
              <h2 className="font-serif font-semibold text-[#1A1020] text-2xl mb-4">Get in Touch</h2>
              <p className="text-[#1A1020]/55 text-sm leading-relaxed">
                We welcome inquiries from families, researchers, healthcare providers, journalists, and collaborators. We do our best to respond within 5 business days.
              </p>
            </RevealDiv>

            <RevealDiv className="reveal-left mb-6 reveal-delay-1">
              <div className="flex items-center gap-4 p-5 rounded-xl" style={{ background: '#F0EBF8' }}>
                <Mail size={20} color="#6B2DB5" className="flex-shrink-0" aria-hidden />
                <div>
                  <p className="text-xs font-medium text-[#6B2DB5] uppercase tracking-wide mb-0.5">Email</p>
                  <a href="mailto:contact@vanishingtwinsyndrome.org" className="text-sm text-[#1A1020] hover:text-[#6B2DB5] transition-colors break-all">
                    contact@vanishingtwinsyndrome.org
                  </a>
                </div>
              </div>
            </RevealDiv>

            <RevealDiv className="reveal-left mb-6 reveal-delay-2">
              <div className="flex items-center gap-4 p-5 rounded-xl" style={{ background: '#F0EBF8' }}>
                <MapPin size={20} color="#C2408C" className="flex-shrink-0" aria-hidden />
                <div>
                  <p className="text-xs font-medium text-[#C2408C] uppercase tracking-wide mb-0.5">Location</p>
                  <p className="text-sm text-[#1A1020]">United States (virtual-first organization)</p>
                </div>
              </div>
            </RevealDiv>

            <RevealDiv className="reveal-left reveal-delay-3">
              <div className="rounded-xl p-5 border border-[#8B3FD4]/15" style={{ background: '#F0EBF8' }}>
                <p className="text-xs text-[#1A1020]/45 leading-relaxed">
                  For media inquiries, research collaboration, or partnership opportunities, please include a brief description of your organization and the nature of your request.
                </p>
              </div>
            </RevealDiv>
          </div>

          {/* Form */}
          <RevealDiv className="lg:col-span-3 reveal-right">
            <div className="rounded-2xl p-8" style={{ background: '#F0EBF8' }}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: '#E8DFF5' }}>
                    <Send size={24} color="#6B2DB5" aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-2xl mb-3">Your email app should open shortly</h3>
                  <p className="text-[#1A1020]/55 text-sm leading-relaxed max-w-xs mx-auto">
                    If it didn't open automatically, please email us directly at{' '}
                    <a href="mailto:contact@vanishingtwinsyndrome.org" className="text-[#6B2DB5] hover:underline">contact@vanishingtwinsyndrome.org</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-2xl mb-6">Send a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-[#1A1020]/60 uppercase tracking-wide mb-1.5" htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#8B3FD4]/20 text-[#1A1020] text-sm outline-none transition-colors placeholder:text-[#1A1020]/30 focus:border-[#6B2DB5]"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#1A1020]/60 uppercase tracking-wide mb-1.5" htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#8B3FD4]/20 text-[#1A1020] text-sm outline-none transition-colors placeholder:text-[#1A1020]/30 focus:border-[#6B2DB5]"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-medium text-[#1A1020]/60 uppercase tracking-wide mb-1.5" htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#8B3FD4]/20 text-[#1A1020] text-sm outline-none transition-colors focus:border-[#6B2DB5]"
                    >
                      <option value="">Select a topic…</option>
                      <option>General Inquiry</option>
                      <option>Research Collaboration</option>
                      <option>Media &amp; Press</option>
                      <option>Partnership Opportunity</option>
                      <option>Story Submission</option>
                      <option>Volunteer Inquiry</option>
                      <option>Donation / Giving</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-medium text-[#1A1020]/60 uppercase tracking-wide mb-1.5" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#8B3FD4]/20 text-[#1A1020] text-sm outline-none transition-colors placeholder:text-[#1A1020]/30 focus:border-[#6B2DB5] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base transition-all hover:brightness-110"
                    style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                  <p className="text-xs text-[#1A1020]/35 text-center mt-4 leading-relaxed">
                    This form opens your default email app. Your message is never sent through IVTSF servers.
                  </p>
                </form>
              )}
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
