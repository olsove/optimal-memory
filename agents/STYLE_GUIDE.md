# Style Guide — learn-sql

This document defines writing, formatting, and technical conventions for the `learn-sql` repository.

The goal is consistency, clarity, and professional quality across all documentation.

---

## 1. Language & Tone

### British English (Required)

All content must use **British English spelling**.

| Incorrect (US) | Correct (UK) |
|----------------|--------------|
| optimize       | optimise     |
| analyze        | analyse      |
| behavior       | behaviour    |
| color          | colour       |
| organization   | organisation |

⚠️ Exception:
SQL keywords and PostgreSQL syntax must remain unchanged:

* `EXPLAIN ANALYZE` (not *ANALYSE*)
* `VARCHAR`, `SELECT`, etc.

---

### Tone

Write as a **senior engineer explaining to other engineers**.

* Be precise, not verbose
* Avoid fluff and filler language
* Prefer clarity to cleverness
* Avoid marketing tone

Good:

> This query forces a sequential scan due to the function on the indexed column.

Bad:

> This query is not very good and could be improved in many ways.

---

## 2. Audience

Target reader:

* Developers with basic SQL knowledge
* Moving towards production-grade PostgreSQL usage

Assume:

* They understand `SELECT`, `JOIN`, `WHERE`
* They do **not fully understand performance internals**

---

## 3. Document Structure

Every guide should follow this general structure:

```md
# Title

> One-line description of the topic

## Table of Contents

## Introduction

## Core Concepts

## Examples (Bad vs Optimised)

## Performance Considerations

## EXPLAIN ANALYSE

## Checklist

## Summary
```

Consistency is more important than perfection.

---

## 4. Markdown Conventions

### Headings

* Use `#`, `##`, `###` properly (no skipping levels)
* Use sentence case:

    * ✅ `## Query performance fundamentals`
    * ❌ `## Query Performance Fundamentals`

---

### Code Blocks

Always specify language:

```sql
SELECT * FROM users;
```

Never inline complex SQL.

---

### Lists

Prefer bullet points for readability:

* clear
* concise
* consistent

---

### Emphasis

Use sparingly:

* `**bold**` → important concepts
* `*italic*` → light emphasis

Avoid overuse.

---

## 5. SQL Conventions

### Keywords

Always uppercase:

```sql
SELECT order_id
FROM orders
WHERE status = 'completed';
```

---

### Formatting

* One clause per line
* Align logically

```sql
SELECT order_id, total_amount
FROM orders
WHERE status = 'completed'
  AND created_at >= '2026-01-01';
```

---

### Aliases

Use meaningful aliases:

```sql
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
```

Avoid:

```sql
FROM orders a
JOIN customers b
```

---

## 6. Performance Focus (Core Principle)

Every page must answer:

> “Why does this matter for performance?”

Include at least one of:

* execution cost implications
* index interaction
* memory / I/O impact
* planner behaviour

---

## 7. Examples (Required Standard)

Every topic should include:

### 1. Bad example

```sql
SELECT * FROM events
WHERE DATE(start_time) = '2026-03-10';
```

### 2. Optimised example

```sql
SELECT event_id, start_time
FROM events
WHERE start_time >= '2026-03-10'
  AND start_time < '2026-03-11';
```

### 3. Explanation

Explain:

* why the first is inefficient
* why the second is better
* what PostgreSQL is likely doing internally

---

## 8. EXPLAIN ANALYSE Usage

When included:

* Focus on interpretation, not raw output
* Highlight:

    * Seq Scan vs Index Scan
    * row estimates vs actual
    * expensive operations

Never paste large unreadable plans without explanation.

---

## 9. Naming & File Structure

### Files

Use lowercase with hyphens:

```
01-select-performance.md
02-indexing-fundamentals.md
03-join-performance.md
```

---

### Sections

Keep naming consistent across files:

* “Performance checklist”
* “Common anti-patterns”
* “Summary”

---

## 10. Do / Don’t

### Do

* Write for real-world usage
* Use realistic examples
* Think in terms of scale
* Keep structure consistent
* Be explicit about trade-offs

### Don’t

* Write academic explanations without an application
* Use vague language
* Optimise prematurely without context
* Ignore PostgreSQL specifics

---

## 11. Guiding Principle

> The purpose of this repository is not to teach SQL syntax.
> It is to teach how to write SQL that performs well in production.

If a section does not support that goal, remove or rewrite it.

---

## 12. Future Extensions

As the repository grows, this guide may expand to include:

* benchmarking methodology
* schema design conventions
* naming standards
* migration patterns

---

## Final Note

Consistency compounds.

A well-structured, consistent repository is significantly more valuable than a larger but inconsistent one.
