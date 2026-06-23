import { NavLink, useLocation } from 'react-router-dom'

const LINK_CLASS = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
    isActive
      ? 'text-[#6B2DB5] border-[#6B2DB5]'
      : 'text-[#1A1020]/45 border-transparent hover:text-[#1A1020]'
  }`

const STRIP_STYLE: React.CSSProperties = {
  background: 'rgba(250,248,255,0.95)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderBottom: '1px solid rgba(139,63,212,0.1)',
}

function Strip({ children }: { children: React.ReactNode }) {
  return (
    <div style={STRIP_STYLE}>
      <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto py-2.5 gap-1">
        {children}
      </div>
    </div>
  )
}

export function KnowledgeHubSubNav() {
  const { pathname } = useLocation()

  const isPartners = pathname.startsWith('/knowledge-hub/partners')
  const isFamilies = pathname.startsWith('/knowledge-hub/partners/families')
  const isProviders = pathname.startsWith('/knowledge-hub/partners/providers')
  const isStories = pathname.startsWith('/knowledge-hub/stories')

  return (
    <div className="knowledge-subnav sticky z-40" style={{ top: 80 }}>
      {/* Level 1 */}
      <Strip>
        <NavLink to="/knowledge-hub" end className={LINK_CLASS}>Overview</NavLink>
        <NavLink to="/knowledge-hub/literature" className={LINK_CLASS}>Literature Repository</NavLink>
        <NavLink to="/knowledge-hub/partners" className={LINK_CLASS}>Partners &amp; Resources</NavLink>
        <NavLink to="/knowledge-hub/peer-support" className={LINK_CLASS}>Peer Support</NavLink>
        <NavLink to="/knowledge-hub/stories" className={LINK_CLASS}>Stories of Multiple Loss</NavLink>
      </Strip>

      {/* Level 2 — Partners */}
      {isPartners && (
        <Strip>
          <NavLink to="/knowledge-hub/partners/families" className={LINK_CLASS}>For Families &amp; Patients</NavLink>
          <NavLink to="/knowledge-hub/partners/memorialization" className={LINK_CLASS}>Memorialization / Disposal of Remains</NavLink>
          <NavLink to="/knowledge-hub/partners/providers" className={LINK_CLASS}>For Providers</NavLink>
        </Strip>
      )}

      {/* Level 3 — Families sub-pages */}
      {isFamilies && (
        <Strip>
          <NavLink to="/knowledge-hub/partners/families/prenatal-checklist" className={LINK_CLASS}>Prenatal Patient Question Checklist</NavLink>
          <NavLink to="/knowledge-hub/partners/families/education" className={LINK_CLASS}>Education</NavLink>
        </Strip>
      )}

      {/* Level 3 — Providers sub-pages */}
      {isProviders && (
        <Strip>
          <NavLink to="/knowledge-hub/partners/providers/prenatal-reference" className={LINK_CLASS}>Prenatal Provider Reference Guide</NavLink>
        </Strip>
      )}

      {/* Level 2 — Stories sub-pages */}
      {isStories && (
        <Strip>
          <NavLink to="/knowledge-hub/stories/share" className={LINK_CLASS}>Share Your Story</NavLink>
        </Strip>
      )}
    </div>
  )
}
