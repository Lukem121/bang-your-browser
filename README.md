# Bang Your Browser

https://bangyourbrowser.site

A Cloudflare Worker that provides DuckDuckGo-style bang search functionality. This service allows you to quickly search various websites using shorthand "bang" commands.

## What are Bangs?

Bangs are shortcuts that start with an exclamation mark (!) followed by a keyword. They allow you to search directly on specific websites. For example:

- `!g cats` searches for "cats" on Google
- `!w artificial intelligence` searches for "artificial intelligence" on Wikipedia
- `!maps Tennessee` searches for Tennessee on Google Maps

## Usage

You can use this service by visiting:

```
https://bangyourbrowser.site/?q=your search query
```

### Examples:

- Search Google: `https://bangyourbrowser.site/?q=weather forecast`
- Search YouTube: `https://bangyourbrowser.site/?q=!yt how to make pasta`
- Search Amazon: `https://bangyourbrowser.site/?q=!a wireless headphones`

## Set as Search Engine

You can set this service as your browser's search engine by using the following URL:

```
https://bangyourbrowser.site/?q=%s
```

Where `%s` is the placeholder for your search query.

## Features

- Fast and lightweight search redirection
- Supports hundreds of bang commands for different websites
- Falls back to Google search if no bang is specified or recognized
- Preserves forward slashes in search queries (useful for GitHub repositories)

## Technical Details

This project is built as a Cloudflare Worker using TypeScript. It maintains a database of bang commands and their corresponding search URLs, redirecting users to the appropriate search results page based on their query.

## Development

### Prerequisites

- Node.js
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`
4. Deploy: `npm run deploy`
