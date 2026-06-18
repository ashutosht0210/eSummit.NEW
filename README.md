# E-Summit 2026 — Shift Gears

Welcome to the E-Summit 2026 React web application. This is IIT Dharwad's flagship entrepreneurship summit platform. The codebase has been optimized for speed, transitions, and modularity using clean abstractions.

---

## Tech Stack

- **Core**: [React 19](https://react.dev/) & [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS (`src/styles.css`)
- **Routing**: [React Router Dom v6](https://reactrouter.com/)
- **Animations**: [GSAP 3](https://gsap.com/) (Timeline, ScrollTrigger, and page transitions)
- **Scrolling**: [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) & [Lenis](https://lenis.darkroom.engineering/)
- **State Management**: LocalStorage & [TanStack React Query v5](https://tanstack.com/query/latest)

---

## Project Structure

Here is the architecture layout of E-Summit 2026:

```text
ESummit26.NEW/
├── adr/                      # Architectural Decision Records (ADRs)
│   ├── README.md             # Guidelines for writing and categorizing ADRs
│   └── 0001-*.md             # ADR 0001: DRY Refactoring & Custom Hooks
├── docs/                     # General Documentation
│   └── README.md             # Git commands, branch conventions, and troubleshooting
├── src/                      # Source Code
│   ├── assets/               # Image assets (dials, hero cars, tracks)
│   │   └── README.md
│   ├── components/           # Shared high-level components & modals
│   │   ├── ui/               # Reusable atomic UI elements (buttons, inputs, etc.)
│   │   │   └── README.md
│   │   ├── Nav.jsx           # Global Navigation Menu
│   │   ├── Footer.jsx        # Footer layout
│   │   ├── CheckoutModal.jsx # Ticket purchase booking modal
│   │   └── README.md
│   ├── hooks/                # Custom hooks (localStorage sync, document titles, navigation)
│   │   └── README.md
│   ├── lib/                  # Static databases, helper hooks, utilities
│   │   ├── store.js          # Databases (events, pricing, FAQ data)
│   │   ├── transition.js     # GSAP page-transition timeline controller
│   │   └── README.md
│   ├── pages/                # Route pages and entry points
│   │   ├── Home.jsx          # Homepage
│   │   ├── Buy.jsx           # Booking passes page
│   │   ├── Events.jsx         # Event grids catalog
│   │   └── README.md
│   ├── App.jsx               # Router mapping and main provider declarations
│   ├── main.jsx              # React mounting root entrypoint
│   └── styles.css            # Stylesheets & Tailwind variables definitions
├── index.html                # Main application frame (with Outfits & Outfit fonts)
├── package.json              # Scripts and package dependencies catalog
├── vite.config.js            # Vite configurations (path aliases, plugins)
└── components.json           # Shadcn style/directory alias configurations
```

---

## Getting Started

To spin up the E-Summit dev server:

```bash
# 1. Install dependencies
npm install

# 2. Run the local development server
npm run dev

# 3. Compile optimization bundle for production
npm run build

# 4. Run ESLint code checks
npm run lint

# 5. Format the codebase
npm run format
```

---

## Contributing Guidelines

We welcome contributions! To keep our codebase clean:

1. **Follow the DRY Principle**: Never write duplicate click handlers, manual localStorage operations, page banners, or inline HTML inputs. Always reuse existing hooks in `src/hooks/` and UI primitives in `src/components/ui/`.
2. **Document Your Folders**: If you add new modules/hooks/pages, document them at the top of the corresponding directory's `README.md`.
3. **Format & Lint**: Run `npm run lint` and `npm run format` prior to pushing your commits.

---

## Branching & Git Conventions

- **Branch Naming**:
  - `feature/<issue-id>-<short-description>` (e.g. `feature/12-stripe-integration`)
  - `bugfix/<issue-id>-<short-description>` (e.g. `bugfix/44-layout-alignment`)
- **Stuck with Git?**: Refer to the detailed **[docs/README.md](file:///d:/Projects/ESummit26.NEW/docs/README.md)** for help on rebasing, conflict resolution, stashing, and discarding changes.

---

## Architectural Decisions (ADRs)

We track significant design decisions in our **[ADR Folder](file:///d:/Projects/ESummit26.NEW/adr/README.md)**.

- **When to add an ADR**: Add an ADR if you propose a major architectural change, introduce a new dependency, change state-management strategies, or modify styling paradigms.
- Refer to the template instructions in [adr/README.md](file:///d:/Projects/ESummit26.NEW/adr/README.md) to add a record.
