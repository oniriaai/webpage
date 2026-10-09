# Graph Report - webpage  (2026-10-09)

## Corpus Check
- 65 files · ~50,115 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 10, .example 1, .css 1)

## Summary
- 341 nodes · 672 edges · 18 communities (14 shown, 4 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 18 edges (avg confidence: 0.87)
- Token cost: 205,483 input · 0 output

## Community Hubs (Navigation)
- Page Routes & Framework Imports
- Package & ESLint Config
- UI Components & Navbar
- CI/CD & Deployment
- Contact Form & Not-Found
- Locale Layout & Theming
- shadcn Components Config
- TypeScript Config
- Design & Dev Guidelines
- Runtime Dependencies
- Dev Dependencies
- Next Config & Brand Logo
- Workflow Hero Illustration
- Stats Section
- Sitemap
- Type Declarations
- PostCSS Config
- Oniria Icon

## God Nodes (most connected - your core abstractions)
1. `cn()` - 35 edges
2. `next-intl` - 33 edges
3. `react` - 31 edges
4. `lucide-react` - 22 edges
5. `next` - 21 edges
6. `motion` - 18 edges
7. `Button()` - 17 edges
8. `compilerOptions` - 16 edges
9. `Link` - 11 edges
10. `ContactForm()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Animation guidelines (staggerChildren, spring transitions, hover)` --conceptually_related_to--> `Tech stack: Next.js, shadcn/ui, Motion, next-intl`  [INFERRED]
  agent-assist/design-guidelines.md → README.md
- `Project-scoped image prune (label com.oniria.project=webpage)` --shares_data_with--> `web service (oniria-web container, 127.0.0.1:3000)`  [INFERRED]
  .github/workflows/self-host-deploy.yml → docker-compose.yml
- `Development setup (Node 22 via .nvmrc, pnpm via corepack)` --references--> `CI / Quality Checks job (lint, typecheck, build)`  [EXTRACTED]
  README.md → .github/workflows/ci.yml
- `Build needs no env (N8N vars read inside server action body)` --shares_data_with--> `Environment variables N8N_HMAC_SECRET and N8N_WEBHOOK_URL`  [INFERRED]
  .github/workflows/ci.yml → README.md
- `Deploy to self-hosted VPS (manual) workflow` --conceptually_related_to--> `Vercel production deployment from main`  [INFERRED]
  .github/workflows/self-host-deploy.yml → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Self-hosted deploy path (manual workflow, compose stack, Cloudflare Tunnel)** — _github_workflows_self_host_deploy_deploy, docker_compose_web, docker_compose_cloudflared, docker_compose_web_healthcheck, readme_self_hosting_escape_hatch [EXTRACTED 1.00]
- **PR gate to production flow (Dependabot PRs, CI Quality Checks, Vercel deploy)** — _github_dependabot, _github_workflows_ci_quality, readme_vercel_production_deployment, readme_rollback [INFERRED 0.85]
- **Oniria UI pattern library (hero, feature cards, how it works, animated cards)** — agent_assist_design_guidelines_hero_section, agent_assist_design_guidelines_feature_cards, agent_assist_design_guidelines_how_it_works, agent_assist_design_guidelines_animated_cards [EXTRACTED 1.00]
- **WhatsApp to AI Brain to CRM/Analytics/Email Fan-out Pipeline** — public_workflow_hero_whatsapp, public_workflow_hero_ai_brain, public_workflow_hero_crm, public_workflow_hero_analytics_dashboard, public_workflow_hero_email [EXTRACTED 1.00]

## Communities (18 total, 4 thin omitted)

### Community 0 - "Page Routes & Framework Imports"
Cohesion: 0.09
Nodes (35): lucide-react, motion, next, next-intl, react, Education(), Page(), FeatureCardProps (+27 more)

### Community 1 - "Package & ESLint Config"
Cohesion: 0.05
Nodes (37): eslintConfig, engines, node, name, packageManager, pnpm, ignoredBuiltDependencies, onlyBuiltDependencies (+29 more)

### Community 2 - "UI Components & Navbar"
Cohesion: 0.12
Nodes (30): radix-ui, LocaleSwitcher(), Navbar(), CardAction(), CardFooter(), Input(), Label(), Select() (+22 more)

### Community 3 - "CI/CD & Deployment"
Cohesion: 0.11
Nodes (22): Dependabot config, Dependabot github-actions grouped updates, Dependabot npm/pnpm grouped updates, CI workflow, CI / Quality Checks job (lint, typecheck, build), Deploy to self-hosted VPS (manual) workflow, Deploy to VPS job (SSH, confirm-gated), Deploy health wait loop (docker inspect oniria-web) (+14 more)

### Community 4 - "Contact Form & Not-Found"
Cohesion: 0.16
Nodes (19): ActionState, ContactForm(), ContactPage(), submitContact(), LocaleNotFound(), Page(), CardData, containerVariants (+11 more)

### Community 5 - "Locale Layout & Theming"
Cohesion: 0.12
Nodes (14): clsx, next-themes, fontMono, inter, LocaleLayout(), Props, spaceGrotesk, Footer() (+6 more)

### Community 6 - "shadcn Components Config"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 7 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "Design & Dev Guidelines"
Cohesion: 0.16
Nodes (10): Best Practices for Oniria Web Development, Education pages practices (course cards, course detail back link), Design Guidelines for Oniria Web Pages, Animated Cards pattern, Background effects (glowing circles, grid patterns, gradient overlays), Brand color palette (--color-brand-200..900, black bg, white text), Feature Cards pattern, Hero Section pattern (+2 more)

### Community 9 - "Runtime Dependencies"
Cohesion: 0.13
Nodes (15): dependencies, class-variance-authority, clsx, framer, lucide-react, motion, next, next-intl (+7 more)

### Community 10 - "Dev Dependencies"
Cohesion: 0.14
Nodes (14): devDependencies, eslint, eslint-config-next, @eslint/eslintrc, postcss, prettier, prettier-plugin-tailwindcss, tailwindcss (+6 more)

### Community 11 - "Next Config & Brand Logo"
Cohesion: 0.25
Nodes (5): nextConfig, withNextIntl, ONIRIA Logo (logo.svg) - blue interlaced rosette in a ring on a dark disc, 576x576 traced vector, 339 paths, ~74 KB, ONIRIA Brand Mark (geometric rosette / mandala of overlapping arcs around a central circle, sky blue #62a5f0 on near-black #020305), metadata

### Community 12 - "Workflow Hero Illustration"
Cohesion: 0.39
Nodes (6): Workflow Hero Illustration (WhatsApp to AI Brain to CRM/Analytics/Email), AI Brain (central processing hub), Analytics Dashboard (output destination), CRM (output destination), Email (output destination), WhatsApp (inbound channel node)

### Community 13 - "Stats Section"
Cohesion: 0.67
Nodes (3): AnimatedStat(), StatProps, StatsSection()

## Knowledge Gaps
- **19 isolated node(s):** `framer`, `react-dom`, `shadcn`, `tw-animate-css`, `@eslint/eslintrc` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 150 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next-intl` connect `Page Routes & Framework Imports` to `Package & ESLint Config`, `UI Components & Navbar`, `Contact Form & Not-Found`, `Locale Layout & Theming`, `Next Config & Brand Logo`?**
  _High betweenness centrality (0.149) - this node is a cross-community bridge._
- **What connects `framer`, `react-dom`, `shadcn` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page Routes & Framework Imports` be split into smaller, more focused modules?**
  _Cohesion score 0.0855094726062468 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Page Routes & Framework Imports` to `Package & ESLint Config`, `UI Components & Navbar`, `Contact Form & Not-Found`, `Locale Layout & Theming`, `Stats Section`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Should `Package & ESLint Config` be split into smaller, more focused modules?**
  _Cohesion score 0.05263157894736842 - nodes in this community are weakly interconnected._
- **Why does `next` connect `Page Routes & Framework Imports` to `Package & ESLint Config`, `UI Components & Navbar`, `Contact Form & Not-Found`, `Locale Layout & Theming`, `Next Config & Brand Logo`, `Sitemap`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **Should `UI Components & Navbar` be split into smaller, more focused modules?**
  _Cohesion score 0.12010796221322537 - nodes in this community are weakly interconnected._