import { bangs } from "./bang-map";
import "./global.css";

// Constants
const LS_DEFAULT_BANG_KEY = "default-bang";

// Function to create HTML content for the default page
function createDefaultPageContent(): string {
	return `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
      <div class="content-container">
        <h1>!BANG</h1>
        <p>DuckDuckGo's bang redirects are too slow. Add the following URL as a custom search engine to your browser. Enables <a href="https://duckduckgo.com/bang.html" target="_blank">all of DuckDuckGo's bangs.</a></p>
        
        <div class="how-it-works">
          <h2>How It Works</h2>
          <p>This tool provides faster bang redirects by:</p>
          <ul>
            <li>Directly processing bang commands (like !g for Google) in your search query</li>
            <li>Instantly redirecting you to the appropriate search engine</li>
            <li>Supporting all DuckDuckGo bang commands without the extra redirect step</li>
          </ul>
          
          <h3>Usage Examples:</h3>
          <ul>
            <li><code>!g search term</code> - Search Google</li>
            <li><code>!w topic</code> - Search Wikipedia</li>
            <li><code>!yt video</code> - Search YouTube</li>
          </ul>
          
          <p>Your default bang is currently set to: <strong>${LS_DEFAULT_BANG}</strong> (used when no bang is specified)</p>
        </div>
      </div>
      <footer class="footer">
        <a href="https://github.com/Lukem121" target="_blank">github</a>
      </footer>
    </div>
  `;
}

function noSearchDefaultPageRender() {
	const app = document.querySelector<HTMLDivElement>("#app");
	if (!app) return;

	app.innerHTML = createDefaultPageContent();
}

const bangMap = new Map(bangs);
const LS_DEFAULT_BANG = localStorage.getItem(LS_DEFAULT_BANG_KEY) ?? "g";
const defaultBang = bangMap.get(LS_DEFAULT_BANG);

function getBangredirectUrl(): string | null {
	const url = new URL(window.location.href);
	const query = url.searchParams.get("q")?.trim() ?? "";

	if (!query) {
		console.log("No query");
		noSearchDefaultPageRender();
		return null;
	}

	const match = query.match(/!(\S+)/i);
	const bangCandidate = match?.[1]?.toLowerCase();
	const selectedBang = bangCandidate
		? (bangMap.get(bangCandidate) ?? defaultBang)
		: null;

	// Remove the first bang from the query
	const cleanQuery = query.replace(/!\S+\s*/i, "").trim();

	// Format of the url is:
	// https://www.google.com/search?q={{{s}}}
	const searchUrl = selectedBang?.u.replace(
		"{{{s}}}",
		// Replace %2F with / to fix formats like "!ghr+t3dotgg/unduck"
		encodeURIComponent(cleanQuery).replace(/%2F/g, "/"),
	);

	if (!searchUrl) return null;

	return searchUrl;
}

function doRedirect() {
	const searchUrl = getBangredirectUrl();
	if (!searchUrl) return;
	window.location.replace(searchUrl);
}

doRedirect();
