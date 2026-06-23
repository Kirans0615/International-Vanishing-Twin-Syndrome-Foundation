import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { getBreadcrumbs } from '../data/navigation'

export function Breadcrumb() {
  const { pathname } = useLocation()
  const crumbs = getBreadcrumbs(pathname)

  if (crumbs.length <= 1) return null

  return (
    <div
      className="breadcrumb-bar"
      style={{
        background: 'rgba(26,10,61,0.5)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '10px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '88rem',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          flexWrap: 'wrap',
        }}
      >
        <Link to="/" style={{ color: 'rgba(255,255,255,0.35)', display: 'flex' }} aria-label="Home">
          <Home size={13} />
        </Link>
        {crumbs.map((crumb, i) => (
          <React.Fragment key={crumb.href}>
            <ChevronRight size={11} color="rgba(255,255,255,0.2)" />
            {i === crumbs.length - 1 ? (
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                  color: '#4DB8E8',
                  fontWeight: 500,
                }}
              >
                {crumb.label}
              </span>
            ) : (
              <Link
                to={crumb.href}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.38)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
              >
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
