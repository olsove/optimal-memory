# AGENTS.md

## Scope
Provide context for the agents.

## Style guide
* Follow the [style guide](agents/STYLE_GUIDE.md) for this project.

## Security and Safety
- Never commit credentials or secrets.
- Flag destructive or high-risk operations clearly.
- Call out breaking changes and provide migration steps.

## SQL
- Prefer clear repository APIs and explicit SQL when derived methods become hard to reason about.
- Be deliberate about fetch strategy and query shape.
- Avoid N+1 query patterns.
- Prefer parameterised queries and safe SQL composition.

## PostgreSQL and Google Cloud SQL Focus
- Optimise the query shape before scaling instance size.
- Prefer index-friendly predicates (avoid wrapping indexed columns in functions unless using expression indexes).
- Prefer keyset pagination over deep `OFFSET`.
- Match indexes to real `WHERE + ORDER BY + LIMIT` patterns.
- Reduce rows early (filter before join/aggregate/sort).
- Avoid `SELECT *` on wide/high-traffic tables.
- Use `EXPLAIN (ANALYZE, BUFFERS)` when tuning queries.
- For Cloud SQL PostgreSQL, account for managed-environment constraints (IO, memory, tuning limits) when proposing fixes.

## Tooling and Platform
- Source control: GitHub
- CI/CD: GitHub Actions

## GitHub and Branching
- Keep commits focused and messages clear.
- Avoid unrelated refactors in the same PR.
- Summarise risk and rollback approach for impactful changes.

## Response Style
- Use short sections and high-signal bullets.
- Include exact file paths and commands for validation.
- Keep explanations brief unless more depth is requested.
- Use British English
- Coding languages have reserved words, do not translate or change them. Use them as is.

## Collaboration Defaults
- Prefer pragmatic, production-ready solutions.
- Keep responses concise, technical, and actionable.
- If requirements are unclear, ask a small number of precise clarification questions.
- Before larger code changes, summarise approach briefly.
- After changes, always include:
    - What changed
    - Why it changed
    - How to verify

## Current working stack
- Markdown / Mdx
- GitHub Flavored Markdown (GFM)
- Next
- Nextra
- React
- Typescript
- Pnpm
- Vercel

## Documentation Standards
- Use Markdown with GitHub Flavoured Markdown features where helpful.
- Update docs when behaviour/configuration/operations change.
- Include concise examples and verification commands.
