import { NavLink } from 'react-router-dom';

const SUB_PAGES = [
  { label: 'Overview',              href: '/knowledge-hub' },
  { label: 'Literature Repository', href: '/knowledge-hub/literature' },
  { label: 'Partners & Resources',  href: '/knowledge-hub/partners' },
  { label: 'Peer Support',          href: '/knowledge-hub/peer-support' },
  { label: 'Stories of Loss',       href: '/knowledge-hub/stories' },
];

export function KnowledgeSubNav() {
  return (
    <div className="sticky top-20 z-40 border-b border-[#8B3FD4]/15 bg-[#FAF8FF]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto py-3">
        {SUB_PAGES.map(({ label, href }) => (
          <NavLink
            key={href}
            to={href}
            end={href === '/knowledge-hub'}
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
