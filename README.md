# Bang Your Browser

https://bangit.click

A Progressive Web Application (PWA) that provides DuckDuckGo-style bang search functionality. This service allows you to quickly search various websites using shorthand "bang" commands, running entirely in your browser.

## What are Bangs?

Bangs are shortcuts that start with an exclamation mark (!) followed by a keyword. They allow you to search directly on specific websites. For example:

- `!g cats` searches for "cats" on Google
- `!w artificial intelligence` searches for "artificial intelligence" on Wikipedia
- `!maps Tennessee` searches for Tennessee on Google Maps

## Usage

You can use this service by visiting:

```
https://bangit.click/?q=your search query
```

### Examples:

- Search Google: `https://bangit.click/?q=weather forecast`
- Search YouTube: `https://bangit.click/?q=!yt how to make pasta`
- Search Amazon: `https://bangit.click/?q=!a wireless headphones`

## Set as Search Engine

You can set this service as your browser's search engine by using the following URL:

```
https://bangit.click/?q=%s
```

Where `%s` is the placeholder for your search query.

## Features

- Fast and lightweight search redirection
- Supports hundreds of bang commands for different websites
- Falls back to Google search if no bang is specified or recognized
- Preserves forward slashes in search queries (useful for GitHub repositories)

## Technical Details

This project is built as a Progressive Web Application using TypeScript and Vite. It maintains a local database of bang commands and their corresponding search URLs, redirecting users to the appropriate search results page based on their query. The application runs entirely in the browser, making it fast and privacy-friendly.

### Key Features

- Runs completely client-side as a PWA
- No server required - all redirects happen in your browser
- Can work offline once installed
- Saves your default bang preference locally
- Lightweight and fast

### Setup Local

1. Clone the repository
2. Install dependencies: `pnpm i`
3. Run locally: `pnpm run dev`
4. Build for production: `pnpm run build`

## Deploying (Cloudflare Pages)

This site is deployed as a **static Vite build** to **Cloudflare Pages**.

### Prereqs (one-time per machine)

- Node + pnpm installed
- Wrangler installed globally:

```bash
npm i -g wrangler
```

### Authenticate Wrangler (one-time per machine)

If you’ve never deployed from this computer (or your auth expired):

```bash
wrangler login
```

Sanity check:

```bash
wrangler whoami
```

### Deploy

From the repo root:

```bash
pnpm i
pnpm run deploy
```

That runs:

- `tsc && vite build` (produces `dist/`)
- `wrangler pages deploy dist --branch production`

Wrangler will print a **Pages preview URL** like `https://<hash>.search-engine-with-bangs-pwa.pages.dev`.

### Custom domain (when changing domains)

The custom domain is configured in the **Cloudflare dashboard**, not in this repo.

To point the app at a new domain (e.g. moving from `bangyourbrowser.site` to `bangit.click`):

- Cloudflare Dashboard → **Workers & Pages** → **Pages** → `search-engine-with-bangs-pwa`
- **Custom domains**
  - Add `bangit.click` (and optionally `www.bangit.click`)
  - Follow the DNS instructions Cloudflare shows
  - (Optional) remove the old domain and/or set a redirect between apex and `www`

### Useful commands

List Pages projects (helps confirm the project name on a new machine/account):

```bash
wrangler pages project list
```
