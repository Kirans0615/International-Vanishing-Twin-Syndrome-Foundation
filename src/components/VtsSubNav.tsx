import { NavLink } from 'react-router-dom';

const SUB_PAGES = [
  { label: 'Overview',      href: '/what-is-vts' },
  { label: 'Diagnosing VTS', href: '/what-is-vts/diagnosing' },
  { label: 'Treatment',     href: '/what-is-vts/treatment' },
  { label: 'Key Terms',     href: '/what-is-vts/key-terms' },
];

export function VtsSubNav() {
  return (
    <div className="sticky top-20 z-40 border-b border-[#8B3FD4]/15 bg-[#FAF8FF]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto py-3">
        {SUB_PAGES.map(({ label, href }) => (
          <NavLink
            key={href}
            to={href}
            end={href === '/what-is-vts'}
            className={({ isActive }) =>
              `px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                isActive
                  ? 'text-[#6B2DB5] bg-[#8B3FD4]/10'
                  : 'text-[#1A1020]/60 hover:text-[#6B2DB5] hover:bg-[#8B3FD4]/5'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
