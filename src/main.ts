import { bangs } from "./bang-map";
import "./global.css";

// Constants
const LS_DEFAULT_BANG_KEY = "default-bang";

// Function to create HTML content for the default page
function createDefaultPageContent(): string {
	return `
    <div class="container">
      <div class="content">
        <h1 class="title">!BANG</h1>
        <p class="description">
          A faster alternative to DuckDuckGo's bang redirects. Add this URL as a custom search engine in your browser.
          <a href="https://duckduckgo.com/bang.html" target="_blank" class="link">Supports all DuckDuckGo bangs</a>.
        </p>
        <div class="search-url-card">
          <h3 class="url-title">Add this URL to your browser:</h3>
          <div class="url-container">
            <code class="search-url">https://www.bangyourbrowser.site/?q=%s</code>
            <button class="copy-button" onclick="navigator.clipboard.writeText('https://www.bangyourbrowser.site/?q=%s').then(() => { this.textContent = 'Copied!'; setTimeout(() => { this.textContent = 'Copy'; }, 2000); })">Copy</button>
          </div>
          <p class="url-hint">Use this as your custom search engine URL in Chrome, Firefox, Edge, or any modern browser</p>
        </div>
        
        <div class="card">
          <h2 class="subtitle">How It Works</h2>
          <div class="feature-list">
            <div class="feature">
              <span class="feature-icon">⚡</span>
              <span class="feature-text">Instant redirects to your favorite search engines</span>
            </div>
            <div class="feature">
              <span class="feature-icon">🔍</span>
              <span class="feature-text">Direct processing of bang commands (e.g., !g, !w, !yt)</span>
            </div>
            <div class="feature">
              <span class="feature-icon">🚀</span>
              <span class="feature-text">No extra redirect steps, just pure speed</span>
            </div>
          </div>
          
          <div class="examples">
            <h3 class="examples-title">Try These Examples:</h3>
            <div class="example-chips">
              <span class="chip">!g search term</span>
              <span class="chip">!w topic</span>
              <span class="chip">!yt video</span>
              <span class="chip">!a product</span>
              <span class="chip">!gh repo</span>
            </div>
          </div>
          
          <div class="default-bang">
            <p>Your default bang: <span class="highlight">${LS_DEFAULT_BANG}</span></p>
            <p class="hint">(Used when no bang is specified in your search)</p>
          </div>
        </div>
      </div>
      <footer class="footer">
        <a href="https://github.com/Lukem121" target="_blank" class="github-link">GitHub</a>
      </footer>
    </div>
    
    <style>
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: #333;
        background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
      }
      
      .content {
        max-width: 700px;
        width: 100%;
      }
      
      .title {
        font-size: 3.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
        background: linear-gradient(90deg, #4776E6 0%, #8E54E9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
      }
      
      .description {
        font-size: 1.1rem;
        line-height: 1.6;
        text-align: center;
        margin-bottom: 2rem;
      }
      
      .search-url-card {
        background: #4776E6;
        color: white;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        box-shadow: 0 10px 30px rgba(71, 118, 230, 0.3);
      }
      
      .url-title {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }
      
      .url-container {
        display: flex;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 0.75rem;
        margin-bottom: 1rem;
        align-items: center;
        overflow: hidden;
      }
      
      .search-url {
        flex: 1;
        font-family: monospace;
        font-size: 1rem;
        overflow-x: auto;
        white-space: nowrap;
        color: white;
      }
      
      .copy-button {
        background: white;
        color: #4776E6;
        border: none;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        margin-left: 0.75rem;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.2s;
      }
      
      .copy-button:hover {
        background: #f0f0f0;
      }
      
      .url-hint {
        margin: 0;
        font-size: 0.9rem;
        opacity: 0.9;
      }
      
      .link {
        color: #4776E6;
        text-decoration: none;
        border-bottom: 1px solid #4776E6;
        transition: opacity 0.2s;
      }
      
      .link:hover {
        opacity: 0.8;
      }
      
      .card {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      }
      
      .subtitle {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: #333;
      }
      
      .feature-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
      }
      
      .feature {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .feature-icon {
        font-size: 1.5rem;
      }
      
      .feature-text {
        font-size: 1.1rem;
      }
      
      .examples-title {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #555;
      }
      
      .example-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;
      }
      
      .chip {
        background: #f0f4f8;
        padding: 0.5rem 1rem;
        border-radius: 100px;
        font-family: monospace;
        font-size: 0.9rem;
        color: #4776E6;
      }
      
      .default-bang {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 8px;
        border-left: 4px solid #4776E6;
      }
      
      .highlight {
        font-weight: bold;
        color: #4776E6;
      }
      
      .hint {
        font-size: 0.9rem;
        color: #777;
        margin-top: 0.5rem;
      }
      
      .footer {
        margin-top: 2rem;
        text-align: center;
      }
      
      .github-link {
        color: #555;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.2s;
      }
      
      .github-link:hover {
        color: #4776E6;
      }
      
      @media (max-width: 768px) {
        .title {
          font-size: 2.5rem;
        }
        
        .card, .search-url-card {
          padding: 1.5rem;
        }
        
        .search-url {
          font-size: 0.85rem;
        }
      }
    </style>
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
