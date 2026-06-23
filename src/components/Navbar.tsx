import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Heart, ChevronDown, ChevronRight } from 'lucide-react'
import { NAV_ITEMS } from '../data/navigation'
import type { NavChild } from '../data/navigation'

const BASE = import.meta.env.BASE_URL
const LOGO_TRANSPARENT = `${BASE}Logo Without Background.png`
const LOGO_PURPLE = `${BASE}High Res_Outlined Butterfly_Purple Background_IVTSF Logo.png`

const SOCIAL = [
  { label: 'Facebook',  href: 'https://www.facebook.com/vanishingtwinsyndromefoundation', abbr: 'Fb' },
  { label: 'Instagram', href: 'https://www.instagram.com/vanishingtwinsyndrome',          abbr: 'Ig' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/ivtsf',                  abbr: 'Li' },
]

// ── DESKTOP DROPDOWN ─────────────────────────────────────────────────────────

function DropdownItem({
  item,
  level,
  isHovered,
  onHover,
}: {
  item: NavChild
  level: number
  isHovered: boolean
  onHover: (href: string) => void
}) {
  const { pathname } = useLocation()
  const isActive = pathname.startsWith(item.href)

  const style: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    padding: '9px 14px',
    borderRadius: 10,
    color: isActive ? '#4DB8E8' : isHovered ? 'white' : 'rgba(255,255,255,0.68)',
    background: isActive
      ? 'rgba(77,184,232,0.08)'
      : isHovered
      ? 'rgba(255,255,255,0.06)'
      : 'transparent',
    fontSize: 13.5,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background 0.15s ease, color 0.15s ease',
    cursor: 'pointer',
  }

  return (
    <div style={{ position: 'relative' }} onMouseEnter={() => onHover(item.href)}>
      <Link to={item.href} style={style}>
        <span>{item.label}</span>
        {item.children && (
          <ChevronRight size={13} style={{ opacity: 0.4, flexShrink: 0 }} />
        )}
      </Link>
      {item.children && isHovered && (
        <DropdownPanel items={item.children} level={(level + 1) as 1 | 2 | 3} />
      )}
    </div>
  )
}

function DropdownPanel({
  items,
  level,
}: {
  items: NavChild[]
  level: 1 | 2 | 3
}) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const panelStyle: React.CSSProperties = {
    position: 'absolute',
    background: 'rgba(13,5,32,0.97)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 16,
    padding: 6,
    minWidth: 220,
    boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
    zIndex: 9999 - level,
    ...(level === 1
      ? { top: 'calc(100% + 10px)', left: 0 }
      : { top: -6, left: 'calc(100% + 8px)' }),
  }

  return (
    <div
      className={level === 1 ? 'dropdown-panel' : 'dropdown-panel-right'}
      style={panelStyle}
      onMouseEnter={() => {
        if (closeTimer.current) clearTimeout(closeTimer.current)
      }}
      onMouseLeave={() => {
        closeTimer.current = setTimeout(() => setHoveredItem(null), 180)
      }}
    >
      {items.map(item => (
        <DropdownItem
          key={item.href}
          item={item}
          level={level}
          isHovered={hoveredItem === item.href}
          onHover={setHoveredItem}
        />
      ))}
    </div>
  )
}

// ── MOBILE ACCORDION ──────────────────────────────────────────────────────────

function MobileNavItem({
  item,
  depth,
  onClose,
}: {
  item: NavChild
  depth: number
  onClose: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isActive = pathname.startsWith(item.href)

  const fontSize =
    depth === 0 ? 22 : depth === 1 ? 16 : depth === 2 ? 14 : 13
  const fontWeight = depth === 0 ? 600 : 400
  const fontFamily = depth === 0 ? 'Lora, serif' : 'Inter, sans-serif'
  const color =
    depth === 0
      ? isActive ? '#4DB8E8' : 'white'
      : depth === 1
      ? isActive ? '#4DB8E8' : 'rgba(255,255,255,0.75)'
      : depth === 2
      ? isActive ? '#4DB8E8' : 'rgba(255,255,255,0.55)'
      : 'rgba(255,255,255,0.4)'

  const handleClick = () => {
    if (item.children) {
      setIsOpen(o => !o)
    } else {
      navigate(item.href)
      onClose()
    }
  }

  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 24 + depth * 20,
          paddingRight: 24,
          paddingTop: depth === 0 ? 14 : 10,
          paddingBottom: depth === 0 ? 14 : 10,
          cursor: 'pointer',
          borderBottom:
            depth === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
          background: isActive && !item.children
            ? 'rgba(107,45,181,0.15)'
            : 'transparent',
        }}
      >
        <span style={{ fontFamily, fontSize, fontWeight, color }}>
          {item.label}
        </span>
        {item.children && (
          <ChevronDown
            size={depth === 0 ? 18 : 14}
            color="rgba(255,255,255,0.3)"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.25s ease',
              flexShrink: 0,
            }}
          />
        )}
      </div>
      {item.children && (
        <div
          style={{
            maxHeight: isOpen ? '800px' : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {item.children.map(child => (
            <MobileNavItem
              key={child.href}
              item={child}
              depth={depth + 1}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openItem, setOpenItem] = useState<string | null>(null)
  const navCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenItem(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className="navbar-root fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: 'rgba(250,248,255,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(107,45,181,0.12)',
          boxShadow: scrolled
            ? '0 2px 16px rgba(0,0,0,0.08)'
            : '0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center h-20">
          <Link to="/" className="flex-none mr-8" aria-label="IVTSF home">
            <img
              src={LOGO_TRANSPARENT}
              alt="IVTSF"
              style={{ height: 48, width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {NAV_ITEMS.map(item => {
              const active = isActive(item.href)
              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      active
                        ? 'text-[#6B2DB5]'
                        : 'text-[#1A1020]/65 hover:text-[#4A1A8C]'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#6B2DB5]" />
                    )}
                  </Link>
                )
              }
              return (
                <div
                  key={item.href}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => {
                    if (navCloseTimer.current) clearTimeout(navCloseTimer.current)
                    setOpenItem(item.href)
                  }}
                  onMouseLeave={() => {
                    navCloseTimer.current = setTimeout(
                      () => setOpenItem(null),
                      180,
                    )
                  }}
                >
                  <Link
                    to={item.href}
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      active
                        ? 'text-[#6B2DB5]'
                        : 'text-[#1A1020]/65 hover:text-[#4A1A8C]'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      style={{
                        transform:
                          openItem === item.href
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        opacity: 0.5,
                        marginLeft: 3,
                      }}
                    />
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#6B2DB5]" />
                    )}
                  </Link>
                  {openItem === item.href && item.children && (
                    <DropdownPanel items={item.children} level={1} />
                  )}
                </div>
              )
            })}
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

            {/* Hamburger */}
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
                  transform: mobileOpen
                    ? 'translateY(7px) rotate(45deg)'
                    : 'none',
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
                  transform: mobileOpen
                    ? 'translateY(-7px) rotate(-45deg)'
                    : 'none',
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

      {/* ── MOBILE PANEL ── */}
      <aside
        className="fixed top-0 right-0 h-full z-50 lg:hidden flex flex-col"
        style={{
          width: 'min(340px, 88vw)',
          background: 'rgba(13,5,32,0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.34,1.2,0.64,1)',
          boxShadow: '-12px 0 48px rgba(0,0,0,0.5)',
        }}
        aria-hidden={!mobileOpen}
      >
        {/* Glow blobs */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(107,45,181,0.35) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-24 left-0 w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(194,64,140,0.2) 0%, transparent 70%)',
            transform: 'translate(-30%, 0)',
          }}
        />

        {/* Panel header */}
        <div
          className="relative flex items-center justify-between px-6 pt-6 pb-5"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Link to="/" onClick={() => setMobileOpen(false)} aria-label="IVTSF home">
            <img
              src={LOGO_PURPLE}
              alt="IVTSF"
              style={{ height: 52, width: 'auto' }}
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.7)',
            }}
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2L14 14M14 2L2 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto">
          {NAV_ITEMS.map(item => (
            <MobileNavItem
              key={item.href}
              item={item as NavChild}
              depth={0}
              onClose={() => setMobileOpen(false)}
            />
          ))}
        </nav>

        {/* Panel footer */}
        <div
          className="px-5 pb-8 pt-5 flex flex-col gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Link
            to="/donate"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #6B2DB5 0%, #C2408C 100%)' }}
          >
            <Heart size={15} />
            Donate Now
          </Link>

          <div className="flex items-center justify-between">
            <p
              className="text-[10px] tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Mono, monospace' }}
            >
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

          <p
            className="text-center text-[10px] leading-relaxed"
            style={{
              color: 'rgba(255,255,255,0.2)',
              fontFamily: 'Lora, serif',
              fontStyle: 'italic',
            }}
          >
            &ldquo;A world where VTS is recognized,
            <br />
            supported, and accurately communicated.&rdquo;
          </p>
        </div>
      </aside>
    </>
  )
}
