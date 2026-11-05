# next.js-template

A Next.js 16 App Router starter for a new project: TypeScript, Bun, Tailwind CSS, shadcn, and Zod are already wired, with Motion, react-icons, and three.js installed for animation, icons, and 3D. Oxlint and Oxfmt handle lint and format, so the first commit can be application code.

## Use this template

You need [Bun](https://bun.sh) 1.4.4. `package.json` pins it through `packageManager`.

Click **Use this template** on [GitHub](https://github.com/sarcasterXO/next.js-template), or scaffold a copy with `create-next-app`:

```
bunx create-next-app@latest my-app --example https://github.com/sarcasterXO/next.js-template --use-bun
cd my-app
bun run dev
```

Then open [localhost:3000](http://localhost:3000). Before you build on it, make the copy yours:

- Set `name`, `description`, `license`, and `repository` in `package.json`. Keep `"private": true` unless you publish to npm.
- In `app/layout.tsx`, set the `name` and `description` constants and `authors` and `creator`. Add `metadataBase` with your site URL once you have one, and an `app/opengraph-image.png` if you want a social preview. Add your sitemap URL to `app/robots.ts` if you add an `app/sitemap.ts`.
- Replace the starter page in `app/page.tsx`, including its link back to this repository.
- Delete `app/api/echo` once you have a real route, or keep it as a reference.
- Update `README.md`, `AGENTS.md`, and the copyright holder for your project.

## Stack

- Next.js 16 and React 19, App Router at the repo root (no `src/`)
- Cache Components and Partial Prefetching enabled in `next.config.ts`
- TypeScript 6
- Tailwind CSS 4 and PostCSS
- shadcn (`base-rhea`) with one Button
- Zod 4, with `parseJson` and `parseInput` in `lib/validation.ts`
- `motion`, `react-icons`, and `three` are installed for later use
- Oxlint and Oxfmt, via `@imranbarbhuiya/oxc-config`
- Bun

## Project structure

```
app/layout.tsx          Root layout, Inter font, metadata, viewport
app/page.tsx            Starter home page
app/not-found.tsx       404 page
app/robots.ts           Generates /robots.txt
app/globals.css         Tailwind and shadcn theme tokens (light theme)
app/api/echo/route.ts   Example POST route with Zod validation
components/ui/          shadcn components
lib/utils.ts            `cn` class name helper
lib/validation.ts       `parseJson` and `parseInput` for API routes
```

`@/*` resolves from the repo root, so `@/components/ui/button` and `@/lib/utils` work anywhere.

## Metadata

`app/layout.tsx` sets the title template (`%s | next.js-template`), description, author, Open Graph and Twitter tags, and the theme color. `app/robots.ts` serves `/robots.txt`, which allows every crawler on `/` and keeps them out of `/api/`. A page only needs `export const metadata = { title: 'About' }` to get `About | next.js-template`.

## Next.js config

`next.config.ts` turns on [`cacheComponents`](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents) and [`partialPrefetching`](https://nextjs.org/docs/app/api-reference/config/next-config-js/partialPrefetching). With Cache Components, a component that reads uncached or request-time data (`fetch`, `cookies()`, `headers()`, `searchParams`) has to be wrapped in `<Suspense>` or cached with `'use cache'`, or the build fails and names the route. Remove both flags if you want the classic rendering model.

## Scripts

```
bun install
bun run dev
bun run preflight
bun run build
bun run start
```

`preflight` formats, generates route types with `next typegen`, typechecks with `tsc` on TypeScript 6.0.3, lints with `oxlint --fix`, then builds. `lint:check` reports lint without writing files. `format:check` does the same for formatting. `start` serves the production build.

GitHub Actions runs `lint:check`, `format:check`, and `typecheck` on pushes to `main` and on pull requests, using GitHub-hosted runners.

## API routes

`POST /api/echo` with `{ "message": "hi" }` returns HTTP 200 and `{ "message": "hi" }`. `message` has to be a non-empty string. A body that fails the schema, or that is not JSON, returns HTTP 400 and `{ "ok": false, "formErrors", "fieldErrors" }`. Invalid JSON sets `formErrors` to `["Expected a JSON body"]`. `z.flattenError` keeps a single level of field errors. `parseJson` reads the body only; pass a query object to `parseInput` when a route needs one.

Put the request schema and the response schema in the route file. Check the body with `parseJson`, build the payload, then check that payload with `parseInput`. Return HTTP 500 and the same failure object when the payload does not match the response schema.

## shadcn

Add a component with:

```
bunx shadcn add dialog
```

`components.json` sets `iconLibrary` to `lucide` so the CLI stays valid. `lucide-react` is not installed. Use `react-icons` for icons. If a generated file imports `lucide-react`, replace those imports with `react-icons` and remove the package.

## Contributing

Open an [issue](https://github.com/sarcasterXO/next.js-template/issues) or a [pull request](https://github.com/sarcasterXO/next.js-template/pulls).

1. Fork the repository and create a branch.
2. Run `bun install`, then `bun run dev`.
3. Run `bun run preflight` before opening a pull request.

The `pre-commit` hook formats staged files with Oxfmt and lints staged JavaScript and TypeScript with Oxlint. Commit messages use [Conventional Commits](https://www.conventionalcommits.org/), such as `feat: add home page` or `fix: correct the favicon`. The `commit-msg` hook rejects anything else.

## Deploy

`bun run build` then `bun run start` serves the production build on any Node.js host. The **Deploy Now** button on the home page points at [Vercel](https://vercel.com/new), which detects Bun from `bun.lock`. There is no static export, because API routes need a server.

## Author

[sarcasterXO](https://github.com/sarcasterXO)

## License

[Apache License 2.0](LICENSE).
