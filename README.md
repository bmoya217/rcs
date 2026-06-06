# Royal Carpet Specialists

Next.js site for Royal Carpet Specialists, an owner-operated carpet, tile, upholstery, odor, repair, and stone cleaning business based in Upland, CA.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Cloudinary / next-cloudinary for images
- Embla Carousel for auto-scrolling image strips
- react-compare-slider for before-and-after comparisons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## Environment Variables

Create `.env.local` with these values:

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is used by client-rendered Cloudinary images. `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET` are server-only and used to fetch gallery resources from Cloudinary.

## Project Structure

- `app/` - App Router pages, metadata routes, and global layout.
- `components/` - Shared UI components such as header, footer, service cards, image carousel, testimonial carousel, and before/after sliders.
- `lib/site.ts` - Business details, service definitions, service areas, FAQs, and review links.
- `lib/gallery.ts` - Featured before/after gallery items used on the home and gallery pages.
- `lib/images.ts` - Cloudinary public IDs for static page imagery.
- `lib/cloudinary.ts` - Server-only Cloudinary search helper for carousel images.
- `public/` - Static fallback assets.

## Content Notes

Most business copy lives in `lib/site.ts`. Update phone numbers, service areas, FAQs, review links, service descriptions, and service image public IDs there.

The gallery page uses two kinds of content:

- Featured before/after comparisons from `lib/gallery.ts`.
- Recent work images fetched from the Cloudinary `carousel` folder.

Before/after slider images should use paired Cloudinary public IDs, such as `gallery/carpet_before` and `gallery/carpet_after`. Recent standalone work photos can be uploaded to the `carousel` folder and will appear in the moving gallery strip.

## Image Guidance

Use real job photos whenever possible. The most useful gallery images show:

- Same-angle before and after shots.
- Traffic lanes, stairs, spots, tile grout, upholstery, and pet-related problem areas.
- A few wider room shots for context.

Cloudinary remote images are allowed through `next.config.ts` via `res.cloudinary.com`.

## Next.js Notes

This project uses Next.js 16, which has breaking changes from earlier versions. Before changing routing, metadata, data fetching, images, or server/client component behavior, check the bundled docs in:

```txt
node_modules/next/dist/docs/
```
