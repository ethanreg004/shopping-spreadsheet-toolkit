# GitHub Resource Asset Brief

## Platform and status

- Date: 2026-07-25
- Agent: Codex
- Plan ID: platform validation draft; not claimed from the production queue
- Platform: GitHub Pages with a GitHub repository
- Platform ID: `github-pages`; parent account platform: `github`
- Execution mode: `code_automation`
- Verification status: `unverified`; publication remains blocked until remote QA and user verification
- Platform account: `github-ethanreg004` / public owner `ethanreg004`
- Asset ID: `lovegobuy-github-shopping-data-toolkit-01`
- Asset capability: `html_site`
- Capability source: compatibility inference from the GitHub playbook and controllable repository/Pages fields
- Planned repository slug: `shopping-spreadsheet-toolkit`
- Candidates: `shopping-spreadsheet-toolkit`, `shopping-link-data-checklist`, `community-spreadsheet-auditor`
- Precheck: the preferred GitHub repository URL returned 404 on 2026-07-25; it is not reserved
- Expected project Pages URL: `https://ethanreg004.github.io/shopping-spreadsheet-toolkit/`

## Brand, keyword, and target

- Target brand: Lovegobuy
- Approved active target: `https://lovego.org`
- Internal primary keyword: `Lovegobuy Spreadsheet`
- Keyword catalog source: `kw-51f0b29ed04fd9fb5996`, intent `spreadsheet_core`, priority P0
- Public title: `Shopping Spreadsheet Quality Checklist | Data Fields & Link Audits`
- GitHub-specific title decision: the exact brand keyword is not forced into the repository name, H1, or primary project title because the project must be function-led; the brand appears once in a relevant public example
- Target anchor: `LoveGoBuy Spreadsheet web guide`
- Target rel: `nofollow sponsored` where controllable
- Page purpose: provide a usable audit tool and documentation for community-maintained shopping spreadsheets
- Unique task: help maintainers find structural spreadsheet problems before publication

## Platform-native value

- Code: dependency-free CSV parser and audit functions
- Tests: valid row, duplicate URL, invalid status, stale review, quoted comma
- Data: fictional CSV example using `example.com`
- Contract: public JSON Schema
- Documentation: field reference, review checklist, README, optional Pages guide
- Limit boundary: no claims about authenticity, price, stock, QC coverage, sellers, warehouses, or shipping outcomes
- Reverse check: after removing `https://lovego.org`, the project still runs, tests, documents its data contract, and solves a complete maintenance task

## Research and page model

- Current research batch: `SERP-20260724-us-desktop-four-intents`
- Relevant Query IDs: `LGB-01` through `LGB-04`; US English Desktop, Google first page only, not Top 100
- Snapshot age at execution: 1 day
- Current-brand model reviewed: `https://lovegobuy.net/` for task-first tools and separated guide/checklist intent
- Cross-brand model reviewed: `https://litbuy.net/` for tool-first entry and real task completion
- Risk model rejected: thin exact-match pages, unified redirect pages, unsubstantiated counts, brand-swapped templates, and canvas/text pages without a working task
- Selected model: tool documentation / checklist, not a commercial Home resource hub
- Data availability: `unavailable` for real product catalogs and QC datasets; therefore no Product, Category, ItemList, quantities, prices, or inventory pages are generated

## SEO and technical plan

- Semantic structure: `header/nav/main/article/section/aside/footer`
- Unique title, description, and H1: prepared
- Canonical: expected project Pages URL; must be rechecked after publication
- Robots: `index,follow` in HTML plus `docs/robots.txt`
- Sitemap: expected project Pages URL
- Initial HTML: all core text is present without client-side rendering
- Internal project links: README to docs, examples, schema, and checklist
- External dependencies: none; system fonts and local CSS only
- Main project CTA: GitHub repository URL; intentionally blocked until remote repository exists
- Target link: one contextual example in README and Pages content
- Mobile: responsive single-column fallback below 42rem

## Quality gate

- Planning gate: passed for a local validation draft
- Functional tests: 4 passed
- Example audit: 3 rows, 0 errors, 0 warnings
- Documentation contract: passed
- Local DOM check: one H1, four H3 check cards, workflow, limits, and contextual example visible
- Publication gate: blocked pending explicit user confirmation, remote repository creation, push, optional Pages enablement, and public QA
- Friend-link candidate: `no`
- Published URL: empty
- Index status: `unknown`
