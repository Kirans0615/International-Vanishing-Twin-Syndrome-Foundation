import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, ChevronDown } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;
const LOGO_TRANSPARENT = `${BASE}Logo Without Background.png`;
const LOGO_PURPLE = `${BASE}High Res_Outlined Butterfly_Purple Background_IVTSF Logo.png`;

const DROPDOWNS: Record<string, { label: string; href: string }[]> = {
  '/about': [
    { label: 'Overview',     href: '/about' },
    { label: 'Our Team',     href: '/about/team' },
    { label: 'Our Ethics',   href: '/about/ethics' },
    { label: 'Tax Returns',  href: '/about/tax-returns' },
    { label: 'Newsletters',  href: '/about/newsletters' },
  ],
  '/what-is-vts': [
    { label: 'Overview',      href: '/what-is-vts' },
    { label: 'Diagnosing VTS', href: '/what-is-vts/diagnosing' },
    { label: 'Treatment',     href: '/what-is-vts/treatment' },
    { label: 'Key Terms',     href: '/what-is-vts/key-terms' },
  ],
  '/knowledge-hub': [
    { label: 'Overview',              href: '/knowledge-hub' },
    { label: 'Literature Repository', href: '/knowledge-hub/literature' },
    { label: 'Partners & Resources',  href: '/knowledge-hub/partners' },
    { label: 'Peer Support',          href: '/knowledge-hub/peer-support' },
    { label: 'Stories of Loss',       href: '/knowledge-hub/stories' },
  ],
};

const NAV_ITEMS = [
  { label: 'About',         href: '/about',         hasDropdown: true },
  { label: 'What is VTS',  href: '/what-is-vts',   hasDropdown: true },
  { label: 'Knowledge Hub', href: '/knowledge-hub', hasDropdown: true },
  { label: 'Shop',          href: '/shop',          hasDropdown: false },
  { label: 'Donate',        href: '/donate',        hasDropdown: false },
  { label: 'Volunteer',     href: '/volunteer',     hasDropdown: false },
  { label: 'Contact',       href: '/contact',       hasDropdown: false },
];

const SOCIAL = [
  { label: 'Facebook',  href: 'https://www.facebook.com/vanishingtwinsyndromefoundation', abbr: 'Fb' },
  { label: 'Instagram', href: 'https://www.instagram.com/vanishingtwinsyndrome',          abbr: 'Ig' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/ivtsf',                  abbr: 'Li' },
];

export function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [openDropdown, setOpenDropdown]   = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      {/* ── DESKTOP / SHARED HEADER BAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: 'rgba(250,248,255,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(107,45,181,0.12)',
          boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center h-20">
          <Link to="/" className="flex-none mr-8" aria-label="IVTSF home">
            <img src={LOGO_TRANSPARENT} alt="IVTSF" style={{ height: 48, width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 relative ${
                    isActive(item.href) ? 'text-[#6B2DB5]' : 'text-[#1A1020]/65 hover:text-[#4A1A8C]'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} />}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#6B2DB5]" />
                  )}
                </Link>
                {item.hasDropdown && openDropdown === item.href && (
                  <div
                    className="absolute top-full left-0 mt-1 min-w-48 rounded-xl p-2 border border-white/10"
                    style={{ background: 'rgba(13,5,32,0.97)', backdropFilter: 'blur(20px)' }}
                  >
                    {DROPDOWNS[item.href]?.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            <Link
              to="/donate"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #6B2DB5 0%, #C2408C 100%)' }}
            >
              <Heart size={14} />
              Donate Now
            </Link>

            {/* Animated hamburger button */}
            <button
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl transition-colors"
              style={{ background: mobileOpen ? 'rgba(107,45,181,0.12)' : 'transparent' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className="block h-[2px] rounded-full transition-all duration-300 origin-center"
                style={{
                  width: mobileOpen ? '20px' : '22px',
                  background: '#4A1A8C',
                  transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block h-[2px] rounded-full transition-all duration-300"
                style={{
                  width: '16px',
                  background: '#4A1A8C',
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? 'scaleX(0)' : 'none',
                }}
              />
              <span
                className="block h-[2px] rounded-full transition-all duration-300 origin-center"
                style={{
                  width: mobileOpen ? '20px' : '22px',
                  background: '#4A1A8C',
                  transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE BACKDROP ── */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          background: 'rgba(10,4,28,0.6)',
          backdropFilter: 'blur(4px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      {/* ── MOBILE SLIDE PANEL ── */}
      <aside
        className="fixed top-0 right-0 h-full z-50 lg:hidden flex flex-col"
        style={{
          width: 'min(340px, 88vw)',
          background: 'linear-gradient(160deg, #1A0A3D 0%, #0D0520 55%, #1A0855 100%)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '-12px 0 48px rgba(0,0,0,0.5)',
        }}
        aria-hidden={!mobileOpen}
      >
        {/* Decorative glow blobs */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,45,181,0.35) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-24 left-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(194,64,140,0.2) 0%, transparent 70%)', transform: 'translate(-30%, 0)' }} />

        {/* Panel header */}
        <div className="relative flex items-center justify-between px-6 pt-6 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Link to="/" onClick={() => setMobileOpen(false)} aria-label="IVTSF home">
            <img src={LOGO_PURPLE} alt="IVTSF" style={{ height: 52, width: 'auto' }} />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const expanded = mobileExpanded === item.href;

            if (item.hasDropdown) {
              return (
                <div key={item.href}>
                  <button
                    onClick={() => setMobileExpanded(expanded ? null : item.href)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-left"
                    style={{
                      background: active ? 'rgba(107,45,181,0.2)' : expanded ? 'rgba(255,255,255,0.04)' : 'transparent',
                      borderLeft: active ? '3px solid #4DB8E8' : '3px solid transparent',
                    }}
                  >
                    <span
                      className="text-base font-semibold"
                      style={{
                        fontFamily: 'Lora, serif',
                        color: active ? '#4DB8E8' : 'rgba(255,255,255,0.88)',
                      }}
                    >
                      {item.label}
                    </span>
                    <ChevronDown
                      size={16}
                      style={{
                        color: active ? '#4DB8E8' : 'rgba(255,255,255,0.45)',
                        transform: expanded ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  <div
                    style={{
                      maxHeight: expanded ? '300px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                    }}
                  >
                    <div className="ml-2 mt-1 mb-2 flex flex-col gap-0.5 pl-4" style={{ borderLeft: '1px solid rgba(107,45,181,0.3)' }}>
                      {DROPDOWNS[item.href]?.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block px-3 py-2.5 rounded-lg text-sm transition-colors"
                          style={{
                            color: location.pathname === sub.href ? '#4DB8E8' : 'rgba(255,255,255,0.55)',
                            background: location.pathname === sub.href ? 'rgba(77,184,232,0.08)' : 'transparent',
                            fontWeight: location.pathname === sub.href ? 500 : 400,
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center px-4 py-3 rounded-xl transition-all duration-200 text-base font-semibold"
                style={{
                  fontFamily: 'Lora, serif',
                  color: active ? '#4DB8E8' : 'rgba(255,255,255,0.88)',
                  background: active ? 'rgba(107,45,181,0.2)' : 'transparent',
                  borderLeft: active ? '3px solid #4DB8E8' : '3px solid transparent',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Panel footer */}
        <div className="px-5 pb-8 pt-5 flex flex-col gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Link
            to="/donate"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #6B2DB5 0%, #C2408C 100%)' }}
          >
            <Heart size={15} />
            Donate Now
          </Link>

          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Mono, monospace' }}>
              Follow Us
            </p>
            <div className="flex gap-2">
              {SOCIAL.map(({ label, href, abbr }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-[10px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'Lora, serif', fontStyle: 'italic' }}>
            &ldquo;A world where VTS is recognized,<br />supported, and accurately communicated.&rdquo;
          </p>
        </div>
      </aside>
    </>
  );
}
