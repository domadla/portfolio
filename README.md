# Personal portfolio

A responsive, dark portfolio landing page built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui (the project's Base UI `base-sera` style). The identity, projects, and illustrations are placeholders.

## UI components

The page primarily composes official shadcn components installed in `components/ui/`:

- **Sidebar:** navigation groups, menu links, availability footer, collapse trigger, and the main content inset. On screens below 768px, it uses shadcn's **Sheet** for an accessible mobile drawer. Navigation closes the drawer after selecting a link.
- **Accordion:** expandable project case studies. Sidebar project links also open the matching panel; multiple projects can remain open.
- **Button:** hero actions, email contact, navigation controls, and back-to-top links. Link buttons use the Base UI `render` prop with `nativeButton={false}` to preserve anchor behavior.
- **Card:** project previews, interests, and contact content.
- **Badge:** project categories, interests, availability, and unfinished social links.
- **Separator:** section and sidebar dividers.
- **TooltipProvider:** shared tooltip context required by the sidebar components.

The sidebar's generated Input and Skeleton primitives remain available as dependencies of the reusable Sidebar component. They are not displayed as extra form fields or loading states on the landing page. CSS Modules handle only the custom hero composition and page container.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run format` to format page code consistently. Before committing, run `npm run format:check`, `npm run lint`, and `npm run build`.

## Replace the placeholders

1. **Identity and copy:** edit `content/portfolio.ts`. Update `initials`, the `name` array (one entry per heading line), `role`, `location`, `availability`, `introduction`, `description`, `heroNote`, `about`, and `interests`. Metadata uses the same name, role, and description automatically. Use plain text, not HTML.
2. **Images:** place your images in `public/images/` using descriptive, lowercase, hyphen-separated filenames such as `manila-street.webp`. Change the relevant `images` entry to `src: "/images/manila-street.webp"` and provide accurate `alt` text describing what is visible. Paths start at `/`, never `/public/`. The collage uses `next/image` with responsive sizes and `object-fit: cover`. Use a portrait image for `architecture` and landscape images for the other two. Adjust `object-position` in `hero.module.css` if your subject needs a different crop. The supplied SVG illustrations need no external requests. Collage captions live in `hero.tsx`.
3. **Projects:** edit the `projects` array. Keep each `id` unique and stable, using lowercase letters and hyphens; sidebar anchors and Accordion values depend on it. Replace descriptions and details with your role, problem, process, technology, and outcome. Project rows use the shadcn Accordion, with keyboard navigation and expanded-state announcements provided by Base UI. Replace the “Project preview / placeholder” label in `selected-work.tsx` when real case studies are ready.
4. **Contact:** change `email` from `null` to your real address, e.g. `"hello@yourdomain.com"`, to enable the email button. Set social `href` values to full `https://` profile URLs. Keep unfinished entries `null`; they appear as text marked “soon” instead of broken links. The email button stays disabled until an address is supplied. Contact fallback text lives in `contact.tsx`.
5. **Résumé:** add `public/resume.pdf`, then set `resumeUrl: "/resume.pdf"`. Until then, the sidebar points to the background section. Never link to a file that does not exist.
6. **Brand:** edit the semantic shadcn color tokens in `app/globals.css`: `--primary` controls the orange brand color, `--background` the canvas, `--card` the panels, and `--muted-foreground` the secondary text. Keep foreground/background pairs readable. The sidebar has corresponding `--sidebar-*` tokens. Typography uses a system sans-serif stack and Georgia, so builds do not require downloading fonts. Replace `app/favicon.ico` with your own icon, and update `copyrightYear` as appropriate.

## File organization and conventions

```text
app/
  layout.tsx                  # Document shell and metadata
  page.tsx                    # Landing-page composition only
  page.module.css             # Main page layout
  globals.css                 # Shared tokens, reset, accessibility
components/portfolio/
  sidebar.tsx                 # shadcn Sidebar composition and mobile behavior
  hero.tsx / hero.module.css
  about.tsx
  selected-work.tsx            # Controlled Accordion with project deep links
  contact.tsx
components/ui/                # Reusable official shadcn primitives
hooks/use-mobile.ts           # Sidebar breakpoint detection
content/portfolio.ts          # Typed content and configuration
public/images/               # Local placeholders / your images
```

Keep content in the content module and presentation in components. Use PascalCase component names, descriptive kebab-case filenames, typed data, semantic headings, and meaningful link text. Compose reusable primitives from `components/ui/` in the domain components under `components/portfolio/`. Add compatible components with `npx shadcn add <component>`; the CLI reads the existing Base UI configuration from `components.json`. Use Base UI's `render` composition API rather than Radix's `asChild`.

Use Tailwind classes and shadcn variants for component styling, CSS Modules for the bespoke collage/layout, and global CSS for shared theme tokens. Keep components as Server Components unless they need state, events, or browser APIs. `sidebar.tsx` and `selected-work.tsx` are client components for their interactive behavior, while the page content and metadata remain server rendered. Preserve focus outlines, image descriptions, mobile breakpoints, and reduced-motion support when changing styles.

Keep the Tailwind loader in `next.config.ts` restricted to `globals.css`. Applying the `as: "*.css"` loader to `.module.css` files removes their scoped class exports and breaks the layout.

Read the relevant guides in `node_modules/next/dist/docs/` before changing framework APIs, as required by `AGENTS.md`.
