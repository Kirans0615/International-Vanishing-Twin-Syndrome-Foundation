export interface NavChild {
  label: string
  href: string
  children?: NavChild[]
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Team', href: '/about/team' },
      { label: 'Our Ethics', href: '/about/ethics' },
      { label: 'Tax Returns', href: '/about/tax-returns' },
      { label: 'Newsletters', href: '/about/newsletters' },
    ],
  },
  {
    label: 'What is VTS',
    href: '/what-is-vts',
    children: [
      { label: 'Diagnosing VTS', href: '/what-is-vts/diagnosing' },
      { label: 'Treatment', href: '/what-is-vts/treatment' },
      { label: 'Key Terms', href: '/what-is-vts/key-terms' },
    ],
  },
  {
    label: 'Knowledge Hub',
    href: '/knowledge-hub',
    children: [
      {
        label: 'Literature Repository',
        href: '/knowledge-hub/literature',
      },
      {
        label: 'Partners & Resources',
        href: '/knowledge-hub/partners',
        children: [
          {
            label: 'For Families & Patients',
            href: '/knowledge-hub/partners/families',
            children: [
              {
                label: 'Prenatal Patient Question Checklist',
                href: '/knowledge-hub/partners/families/prenatal-checklist',
              },
              {
                label: 'Education',
                href: '/knowledge-hub/partners/families/education',
              },
            ],
          },
          {
            label: 'Memorialization / Disposal of Remains',
            href: '/knowledge-hub/partners/memorialization',
          },
          {
            label: 'For Providers',
            href: '/knowledge-hub/partners/providers',
            children: [
              {
                label: 'Prenatal Provider Reference Guide',
                href: '/knowledge-hub/partners/providers/prenatal-reference',
              },
            ],
          },
        ],
      },
      {
        label: 'Peer Support',
        href: '/knowledge-hub/peer-support',
      },
      {
        label: 'Stories of Multiple Loss',
        href: '/knowledge-hub/stories',
        children: [
          {
            label: 'Share Your Story',
            href: '/knowledge-hub/stories/share',
          },
        ],
      },
    ],
  },
  { label: 'Shop', href: '/shop' },
  { label: 'Donate', href: '/donate' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' },
]

export function flattenNav(items: NavItem[]): NavChild[] {
  const result: NavChild[] = []
  const recurse = (nodes: NavChild[]) => {
    nodes.forEach(n => {
      result.push(n)
      if (n.children) recurse(n.children)
    })
  }
  recurse(items)
  return result
}

export function getBreadcrumbs(pathname: string): NavChild[] {
  const flat = flattenNav(NAV_ITEMS)
  const crumbs: NavChild[] = []
  const parts = pathname.split('/').filter(Boolean)
  let path = ''
  parts.forEach(part => {
    path += '/' + part
    const match = flat.find(n => n.href === path)
    if (match) crumbs.push(match)
  })
  return crumbs
}
