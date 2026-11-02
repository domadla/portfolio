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
- **Skills:** edit the five categories in `content/skills.ts`. Logos are stored locally in `public/icons/skills/`, from [Devicon](https://github.com/devicons/devicon) and [Simple Icons](https://github.com/simple-icons/simple-icons), with their license files included. RESTful API Development uses a generic network icon. Monochrome logos are displayed in white for contrast against the dark background.
- **Projects:** edit the `projects` array. Keep IDs unique and stable. Each project has a media carousel, description, and `siteUrl` for its website. An empty media array shows a preview placeholder; a null site URL shows “Link coming soon”.
- **Contact:** set `contact.personalEmail`, `contact.academicEmail`, `contact.address`, and the LinkedIn, Facebook, and GitHub `socials` URLs in `content/portfolio.ts`. Missing values show “Coming soon”.
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
  selected-work.tsx            # Project showcases and site links
  project-carousel.tsx         # Mixed image and video carousel
  contact.tsx
components/ui/                # Button, Badge, and Separator primitives
content/portfolio.ts          # Typed content and configuration
lib/utils.ts                  # Utility alias used by the shadcn CLI
public/images/               # Portfolio portrait
```

Keep content in the content module and presentation in components. Use Tailwind utilities for styling and global CSS for shared tokens. Base UI link buttons use `render` with `nativeButton={false}`. `components.json` preserves the shadcn CLI configuration for adding components.

Preserve focus outlines, image descriptions, mobile breakpoints, and reduced-motion styles. Keep the Tailwind loader in `next.config.ts` restricted to `globals.css`; applying `as: "*.css"` to CSS Modules drops their scoped class exports.

Read the relevant guides in `node_modules/next/dist/docs/` before changing framework APIs, as required by `AGENTS.md`.

## Project media

Every project initially reuses two local SVG placeholder images and one local sample video through `placeholderMedia` in `content/portfolio.ts`. Replace a project's `media` array when its real assets are ready. The video is the public-domain [MDN flower sample](https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4), saved as `public/videos/placeholder-demo.mp4`.

Put project screenshots in `public/images/` and video files in `public/videos/`, then add media entries in display order:

```ts
media: [
  { type: "image", src: "/images/project-screen.png", alt: "Project dashboard" },
  {
    type: "video",
    src: "/videos/project-demo.mp4",
    alt: "Walkthrough of the project",
    poster: "/images/project-screen.png", // Optional preview image
    captions: "/videos/project-demo.vtt", // Optional English WebVTT captions
  },
],
siteUrl: "https://your-project-site.com",
```
