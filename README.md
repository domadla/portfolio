# Personal portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and shadcn/ui with Base UI primitives. The theme uses near-black charcoal surfaces and soft blue accents.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Before committing, run `npm run format:check`, `npm run lint`, and `npm run build`.

## Customize

- **Identity and copy:** edit `content/portfolio.ts`. Metadata uses the same name, role, and description.
- **Portrait:** add an image in `public/images/`, then update `images.portrait.src` and its alt text. Adjust the crop in `components/portfolio/about.tsx`.
- **Projects:** edit the `projects` array. Keep IDs unique and stable. Each project row expands to show its details.
- **Contact:** set `email` and social `href` values to enable the links. Null social URLs render as plain text; the email button stays disabled until an address is supplied.
- **Colors:** edit the semantic tokens in `app/globals.css`. Keep text and surface pairs readable. Fonts use system stacks without external downloads.
- **Icon:** replace `app/favicon.ico` with your own favicon.

## File organization

```text
app/
  layout.tsx                  # Document shell and metadata
  page.tsx                    # Landing-page composition
  globals.css                 # Theme tokens, reset, accessibility
components/portfolio/
  nav.tsx                     # Desktop navigation and mobile menu
  hero.tsx
  about.tsx
  selected-work.tsx            # Expandable project rows
  contact.tsx
components/ui/                # Button, Badge, and Separator primitives
content/portfolio.ts          # Typed content and configuration
lib/utils.ts                  # Utility alias used by the shadcn CLI
public/images/               # Portfolio portrait
```

Keep content in the content module and presentation in components. Use Tailwind utilities for styling and global CSS for shared tokens. Base UI link buttons use `render` with `nativeButton={false}`. `components.json` preserves the shadcn CLI configuration for adding components.

Preserve focus outlines, image descriptions, mobile breakpoints, and reduced-motion styles. Keep the Tailwind loader in `next.config.ts` restricted to `globals.css`; applying `as: "*.css"` to CSS Modules drops their scoped class exports.

Read the relevant guides in `node_modules/next/dist/docs/` before changing framework APIs, as required by `AGENTS.md`.
