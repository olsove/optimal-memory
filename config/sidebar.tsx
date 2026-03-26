import {LayoutTemplate, Rocket, Wrench} from 'lucide-react';

export const sidebarNav = [
  {
    title: 'Getting Started',
    icon: <Rocket className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Introduction',
        href: '/docs/getting-started/introduction',
      },
      {
        title: 'Quick Start',
        href: '/docs/getting-started/quick-start',
      },
    ],
  },
  {
    title: 'Performance Cheats',
    href: '/docs/performance/README',
    icon: <Wrench className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Use keyset pagination',
        href: '/docs/performance/01-USE-KEYSET-PAGINATION',
      },
      {
        title: 'Replace correlated subqueries',
        href: '/docs/performance/02-REPLACE-CORRELATED-SUBQUERIES',
      },
      {
        title: 'Use index friendly predicates',
        href: '/docs/performance/03-INDEX-FRIENDLY-PREDICATES',
      },
      {
        title: 'Match index query pattern',
        href: '/docs/performance/04-MATCH-INDEXES-QUERY-PATTERN',
      },
      {
        title: 'Filter before join',
        href: '/docs/performance/05-FILTER-BEFORE-JOIN',
      },
      {
        title: 'Avoid select *',
        href: '/docs/performance/06-AVOID-SELECT-ALL-COLUMNS',
      },
      {
        title: 'Avoid OR predicates',
        href: '/docs/performance/07-AVOID-OR-PREDICATES',
      },
      {
        title: 'Replace single row updates with SET',
        href: '/docs/performance/08-REPLACE-SINGLE-ROW-UPDATES-WITH-SET',
      },
      {
        title: 'Avoid unnecessary query layers',
        href: '/docs/performance/09-AVOID-UNNECESSARY-QUERY-LAYERS',
      },
      {
        title: 'Aggregate sort less data',
        href: '/docs/performance/10-AGGREGATE-SORT-LESS-DATA',
      },
    ],
  },
  {
    title: 'Template',
    icon: <LayoutTemplate className="h-5 w-5" />,
    defaultOpen: true,
    href: '/docs/template/about',
  },
];
