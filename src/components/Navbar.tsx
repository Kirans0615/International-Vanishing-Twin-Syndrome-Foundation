import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;
const LOGO_TRANSPARENT = `${BASE}Logo Without Background.png`;
const LOGO_PURPLE = `${BASE}High Res_Outlined Butterfly_Purple Background_IVTSF Logo.png`;

const DROPDOWNS: Record<string, { label: string; href: string }[]> = {
  '/about': [
    { label: 'Overview', href: '/about' },
    { label: 'Our Team', href: '/about/team' },
    { label: 'Our Ethics', href: '/about/ethics' },
    { label: 'Tax Returns', href: '/about/tax-returns' },
    { label: 'Newsletters', href: '/about/newsletters' },
  ],
  '/what-is-vts': [
    { label: 'Overview', href: '/what-is-vts' },
    { label: 'Diagnosing VTS', href: '/what-is-vts/diagnosing' },
    { label: 'Treatment', href: '/what-is-vts/treatment' },
    { label: 'Key Terms', href: '/what-is-vts/key-terms' },
  ],
  '/knowledge-hub': [
    { label: 'Overview', href: '/knowledge-hub' },
    { label: 'Literature Repository', href: '/knowledge-hub/literature' },
    { label: 'Partners & Resources', href: '/knowledge-hub/partners' },
    { label: 'Peer Support', href: '/knowledge-hub/peer-support' },
    { label: 'Stories of Loss', href: '/knowledge-hub/stories' },
  ],
};

const NAV_ITEMS = [
  { label: 'About', href: '/about', hasDropdown: true },
  { label: 'What is VTS', href: '/what-is-vts', hasDropdown: true },
  { label: 'Knowledge Hub', href: '/knowledge-hub', hasDropdown: true },
  { label: 'Shop', href: '/shop', hasDropdown: false },
  { label: 'Donate', href: '/donate', hasDropdown: false },
  { label: 'Volunteer', href: '/volunteer', hasDropdown: false },
  { label: 'Contact', href: '/contact', hasDropdown: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
          <button
            className="lg:hidden p-2 text-[#1A1020]/70 hover:text-[#4A1A8C] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-8 pb-10 overflow-y-auto"
          style={{ background: 'rgba(13,5,32,0.97)', backdropFilter: 'blur(24px)' }}
        >
          <div className="flex justify-end px-6 mb-6">
            <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white">
              <X size={28} />
            </button>
          </div>
          <div className="flex justify-center mb-8">
            <img src={LOGO_PURPLE} alt="IVTSF" style={{ height: 80, width: 'auto' }} />
          </div>
          <nav className="flex flex-col gap-1 px-6 flex-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.href ? null : item.href)}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-xl font-medium text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                      style={{ fontFamily: 'Lora, serif' }}
                    >
                      {item.label}
                      <ChevronDown size={18} className={`transition-transform ${mobileExpanded === item.href ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === item.href && (
                      <div className="ml-4 mb-2 flex flex-col gap-1">
                        {DROPDOWNS[item.href]?.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="px-4 py-2.5 rounded-lg text-base text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center px-4 py-3.5 rounded-xl text-xl font-medium text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                    style={{ fontFamily: 'Lora, serif' }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="px-6 mt-4">
            <Link
              to="/donate"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-white font-semibold text-lg"
              style={{ background: 'linear-gradient(135deg, #6B2DB5 0%, #C2408C 100%)' }}
            >
              <Heart size={18} />
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
