type TocPage = {
  title: string;
  href: string;
};

type TocSection = {
  title: string;
  href: string;
  pages?: TocPage[];
};

type TocData = {
  [key: string]: TocSection[];
};

// Your TocData object with the correct types
export const TocData: TocData = {
  'performance/README': [
    {
      title: 'The goal',
      href: '/docs/performance/README#the-goal',
    },
    {
      title: 'Performance Actions',
      href: '/docs/performance/README#performance-actions',
    },
    {
      title: 'Why these hurt more in Google Cloud SQL',
      href: '/docs/performance/README#why-these-hurt-more-in-google-cloud-sql'
    },
    {
      title: 'Mental model for tuning',
      href: '/docs/performance/README#mental-model-for-tuning'
    },
    {
      title: 'Quick checklist',
      href: '/docs/performance/README#quick-checklist'
    },
  ],
  'performance/01-USE-KEYSET-PAGINATION': [
    {
      title: 'Slow',
      href: '/docs/performance/01-USE-KEYSET-PAGINATION#slow-',
    },
    {
      title: 'Fast',
      href: '/docs/performance/01-USE-KEYSET-PAGINATION#fast-',
    },
    {
      title: 'Fast (Stable tiebreaking)',
      href: '/docs/performance/01-USE-KEYSET-PAGINATION#fast-stable-tiebreaking-',
    },
    {
      title: 'Why',
      href: '/docs/performance/01-USE-KEYSET-PAGINATION#why-',
    },
    {
      title: 'Typical improvement|',
      href: '/docs/performance/01-USE-KEYSET-PAGINATION#typical-improvement-',
    },
    {
      title: 'Best use cases',
      href: '/docs/performance/01-USE-KEYSET-PAGINATION#best-use-cases-',
    },
    {
      title: 'Test it out yourself',
      href: '/docs/performance/01-USE-KEYSET-PAGINATION#test-it-out-yourself-',
    },
  ],
  'performance/02-REPLACE-CORRELATED-SUBQUERIES': [
    {
      title: 'Slow',
      href: '/docs/performance/02-REPLACE-CORRELATED-SUBQUERIES#slow-',
    },
    {
      title: 'Fast',
      href: '/docs/performance/02-REPLACE-CORRELATED-SUBQUERIES#fast-',
    },
    {
      title: 'Why',
      href: '/docs/performance/02-REPLACE-CORRELATED-SUBQUERIES#why-',
    },
    {
      title: 'Typical improvement|',
      href: '/docs/performance/02-REPLACE-CORRELATED-SUBQUERIES#typical-improvement-',
    },
    {
      title: 'Best use cases',
      href: '/docs/performance/02-REPLACE-CORRELATED-SUBQUERIES#best-use-cases-',
    },
    {
      title: 'Test it out yourself',
      href: '/docs/performance/02-REPLACE-CORRELATED-SUBQUERIES#test-it-out-yourself-',
    },
  ],
  'performance/03-INDEX-FRIENDLY-PREDICATES': [
    {
      title: 'Slow',
      href: '/docs/performance/03-INDEX-FRIENDLY-PREDICATES#slow-',
    },
    {
      title: 'Fast',
      href: '/docs/performance/03-INDEX-FRIENDLY-PREDICATES#fast-',
    },
    {
      title: 'Why',
      href: '/docs/performance/03-INDEX-FRIENDLY-PREDICATES#why-',
    },
    {
      title: 'Typical improvement|',
      href: '/docs/performance/03-INDEX-FRIENDLY-PREDICATES#typical-improvement-',
    },
    {
      title: 'Best use cases',
      href: '/docs/performance/03-INDEX-FRIENDLY-PREDICATES#best-use-cases-',
    },
    {
      title: 'Test it out yourself',
      href: '/docs/performance/03-INDEX-FRIENDLY-PREDICATES#test-it-out-yourself-',
    },
  ],
  'performance/04-MATCH-INDEXES-QUERY-PATTERN': [
    {
      title: 'Query',
      href: '/docs/performance/04-MATCH-INDEXES-QUERY-PATTERN#query',
    },
    {
      title: 'Slow',
      href: '/docs/performance/04-MATCH-INDEXES-QUERY-PATTERN#slow-',
    },
    {
      title: 'Fast',
      href: '/docs/performance/04-MATCH-INDEXES-QUERY-PATTERN#fast-',
    },
    {
      title: 'Why',
      href: '/docs/performance/04-MATCH-INDEXES-QUERY-PATTERN#why-',
    },
    {
      title: 'Typical improvement|',
      href: '/docs/performance/04-MATCH-INDEXES-QUERY-PATTERN#typical-improvement-',
    },
    {
      title: 'Best use cases',
      href: '/docs/performance/04-MATCH-INDEXES-QUERY-PATTERN#best-use-cases-',
    },
    {
      title: 'Test it out yourself',
      href: '/docs/performance/04-MATCH-INDEXES-QUERY-PATTERN#test-it-out-yourself-',
    },
  ],
  'performance/05-FILTER-BEFORE-JOIN': [
    {
      title: 'Slow',
      href: '/docs/performance/05-FILTER-BEFORE-JOIN#slow-',
    },
    {
      title: 'Fast',
      href: '/docs/performance/05-FILTER-BEFORE-JOIN#fast-',
    },
    {
      title: 'Why',
      href: '/docs/performance/05-FILTER-BEFORE-JOIN#why-',
    },
    {
      title: 'Typical improvement|',
      href: '/docs/performance/05-FILTER-BEFORE-JOIN#typical-improvement-',
    },
    {
      title: 'Best use cases',
      href: '/docs/performance/05-FILTER-BEFORE-JOIN#best-use-cases-',
    },
    {
      title: 'Test it out yourself',
      href: '/docs/performance/05-FILTER-BEFORE-JOIN#test-it-out-yourself-',
    },
  ],
  'performance/06-AVOID-SELECT-ALL-COLUMNS': [
    {
      title: 'Slow',
      href: '/docs/performance/06-AVOID-SELECT-ALL-COLUMNS#slow-',
    },
    {
      title: 'Fast',
      href: '/docs/performance/06-AVOID-SELECT-ALL-COLUMNS#fast-',
    },
    {
      title: 'Why',
      href: '/docs/performance/06-AVOID-SELECT-ALL-COLUMNS#why-',
    },
    {
      title: 'Typical improvement|',
      href: '/docs/performance/06-AVOID-SELECT-ALL-COLUMNS#typical-improvement-',
    },
    {
      title: 'Best use cases',
      href: '/docs/performance/06-AVOID-SELECT-ALL-COLUMNS#best-use-cases-',
    },
    {
      title: 'Test it out yourself',
      href: '/docs/performance/06-AVOID-SELECT-ALL-COLUMNS#test-it-out-yourself-',
    },
  ],
  'performance/07-AVOID-OR-PREDICATES': [
    {
      title: 'Slow',
      href: '/docs/performance/07-AVOID-OR-PREDICATES#slow-',
    },
    {
      title: 'Fast',
      href: '/docs/performance/07-AVOID-OR-PREDICATES#fast-',
    },
    {
      title: 'Why',
      href: '/docs/performance/07-AVOID-OR-PREDICATES#why-',
    },
    {
      title: 'Typical improvement|',
      href: '/docs/performance/07-AVOID-OR-PREDICATES#typical-improvement-',
    },
    {
      title: 'Best use cases',
      href: '/docs/performance/07-AVOID-OR-PREDICATES#best-use-cases-',
    },
    {
      title: 'Test it out yourself',
      href: '/docs/performance/07-AVOID-OR-PREDICATES#test-it-out-yourself-',
    },
  ],
  'performance/08-REPLACE-SINGLE-ROW-UPDATES-WITH-SET': [
    {
      title: 'Slow',
      href: '/docs/performance/08-REPLACE-SINGLE-ROW-UPDATES-WITH-SET#slow-',
    },
    {
      title: 'Fast',
      href: '/docs/performance/08-REPLACE-SINGLE-ROW-UPDATES-WITH-SET#fast-',
    },
    {
      title: 'Why',
      href: '/docs/performance/08-REPLACE-SINGLE-ROW-UPDATES-WITH-SET#why-',
    },
    {
      title: 'Typical improvement|',
      href: '/docs/performance/08-REPLACE-SINGLE-ROW-UPDATES-WITH-SET#typical-improvement-',
    },
    {
      title: 'Best use cases',
      href: '/docs/performance/08-REPLACE-SINGLE-ROW-UPDATES-WITH-SET#best-use-cases-',
    },
    {
      title: 'Test it out yourself',
      href: '/docs/performance/08-REPLACE-SINGLE-ROW-UPDATES-WITH-SET#test-it-out-yourself-',
    },
  ],
  'performance/09-AVOID-UNNECESSARY-QUERY-LAYERS': [
    {
      title: 'Slow',
      href: '/docs/performance/09-AVOID-UNNECESSARY-QUERY-LAYERS#slow-',
    },
    {
      title: 'Fast',
      href: '/docs/performance/09-AVOID-UNNECESSARY-QUERY-LAYERS#fast-',
    },
    {
      title: 'Why',
      href: '/docs/performance/09-AVOID-UNNECESSARY-QUERY-LAYERS#why-',
    },
    {
      title: 'Typical improvement|',
      href: '/docs/performance/09-AVOID-UNNECESSARY-QUERY-LAYERS#typical-improvement-',
    },
    {
      title: 'Best use cases',
      href: '/docs/performance/09-AVOID-UNNECESSARY-QUERY-LAYERS#best-use-cases-',
    },
    {
      title: 'Test it out yourself',
      href: '/docs/performance/09-AVOID-UNNECESSARY-QUERY-LAYERS#test-it-out-yourself-',
    },
  ],
  'performance/10-AGGREGATE-SORT-LESS-DATA': [
    {
      title: 'Slow',
      href: '/docs/performance/10-AGGREGATE-SORT-LESS-DATA#slow-',
    },
    {
      title: 'Fast',
      href: '/docs/performance/10-AGGREGATE-SORT-LESS-DATA#fast-',
    },
    {
      title: 'Why',
      href: '/docs/performance/10-AGGREGATE-SORT-LESS-DATA#why-',
    },
    {
      title: 'Typical improvement|',
      href: '/docs/performance/10-AGGREGATE-SORT-LESS-DATA#typical-improvement-',
    },
    {
      title: 'Best use cases',
      href: '/docs/performance/10-AGGREGATE-SORT-LESS-DATA#best-use-cases-',
    },
    {
      title: 'Test it out yourself',
      href: '/docs/performance/10-AGGREGATE-SORT-LESS-DATA#test-it-out-yourself-',
    },
  ],
};
