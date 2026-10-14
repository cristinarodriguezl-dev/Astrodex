import { useEffect, useState } from "react";
import "./WikiPage.css";
import WikiSearch from "./sections/wikiSearch/WikiSearch.jsx";
import WikiGrid from "./sections/wikiGrid/WikiGrid.jsx";
import WikiModal from "./sections/wikiModal/WikiModal.jsx";

const DEFAULT_QUERY = "astronomía";
const SEARCH_DEBOUNCE_MS = 400;
const API_URL = "https://es.wikipedia.org/w/api.php";

// Categorías que identifican artículos de astronomía (coinciden al inicio o como palabra)
const ASTRO_KEYS = [
  "astronom", "astrofisic", "astrofot", "satelit", "luna", "planeta",
  "estrell", "galax", "univers", "cosmo", "orbit", "cometa", "asteroid",
  "meteorit", "nebulos", "telescop", "observatori", "sistema solar",
  "eclips", "supernova", "agujero negro", "via lactea", "constelacion",
  "saturn", "jupiter", "marte", "mercurio", "urano", "neptuno",
  "venus", "sonda espacial", "cosmonaut", "mision espacial", "solar",
  "asterismo", "cumulo abierto", "cuerpo menor", "planetoide", "luminosidad",
  "crater", "nebula", "cometas",
];

// Dominios que descartan homónimos no astronómicos (topónimos, gastronomía, series...)
const NON_ASTRO = [
  "localidad", "municipi", "condado", "conde", "ducado", "embalse",
  "balneari", "comarca", "gastronom", "aeroline", "desambiguacion",
  "serie", "actor", "cine", "escritor", "personaj", "empresa",
  "iglesia", "puente", "calle", "pedania", "parroquia", "dios",
  "mitolog", "palacio", "castillo", "linaje", "noble", "banda",
  "album", "rio", "familia", "casa", "senor", "villa", "pueblo",
  "ciudad", "playa", "titulos", "apellidos",
];

const STOP_WORDS = new Set([
  "el", "la", "los", "las", "de", "del", "y", "e", "en", "un", "una",
  "unos", "unas", "con", "por", "para", "a", "o", "u", "su", "sus",
]);

function normalize(text) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function getTokens(query) {
  return normalize(query)
    .split(/\s+/)
    .filter((word) => word && !STOP_WORDS.has(word));
}

function isBlacklisted(category) {
  return NON_ASTRO.some(
    (word) => new RegExp(`(?:^|[^a-z0-9])${word}`).test(category)
  );
}

function isAstroCategory(category) {
  if (isBlacklisted(category)) return false;
  return ASTRO_KEYS.some(
    (key) => new RegExp(`(?:^|[^a-z0-9])${key}`).test(category)
  );
}

function isAstronomyItem(item, tokens) {
  const titleNorm = normalize(item.title);
  const rawCats = item.categories.filter((cat) => !cat.startsWith("wikipedia:"));
  const hasForeignCat = rawCats.some(isBlacklisted);
  const categories = rawCats.filter(
    (cat) => !(cat === titleNorm && hasForeignCat)
  );

  if (!categories.some(isAstroCategory)) return false;
  if (tokens.length === 0) return true;
  return categories.some((cat) => tokens.some((token) => cat.includes(token)));
}

function mapResults(data) {
  const pages = data.query?.pages ?? [];
  return pages
    .slice()
    .sort((a, b) => a.index - b.index)
    .map((page) => ({
      id: page.pageid,
      title: page.title,
      extract: page.extract ?? "",
      image: page.thumbnail?.source ?? null,
      url: page.fullurl,
      categories: (page.categories ?? []).map((cat) =>
        normalize(cat.title).replace(/^categoria:/, "")
      ),
    }))
    .filter((item) => item.extract);
}

export default function WikiPage() {
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");
  const [selectedItem, setSelectedItem] = useState(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const timer = setTimeout(() => {
      const search = query.trim();
      if (!search) {
        setItems([]);
        setStatus("ready");
        return;
      }

      setStatus("loading");
      const params = new URLSearchParams({
        action: "query",
        format: "json",
        formatversion: "2",
        origin: "*",
        generator: "search",
        gsrsearch: search,
        gsrlimit: "20",
        gsrnamespace: "0",
        prop: "extracts|pageimages|info|categories",
        inprop: "url",
        piprop: "thumbnail",
        pithumbsize: "640",
        exintro: "1",
        explaintext: "1",
        exlimit: "max",
        cllimit: "max",
        clshow: "!hidden",
      });

      fetch(`${API_URL}?${params}`, { signal: controller.signal })
        .then((res) => {
          if (!res.ok) throw new Error("Request failed");
          return res.json();
        })
        .then((data) => {
          const tokens = getTokens(search);
          const results = mapResults(data).filter((item) =>
            isAstronomyItem(item, tokens)
          );
          setItems(results);
          setStatus("ready");
        })
        .catch((err) => {
          if (err.name === "AbortError") return;
          setStatus("error");
        });
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, retryKey]);

  return (
    <div className="wiki-page">
      <main className="wiki-page-main">
        <header className="wiki-page-header">
          <h1 className="wiki-page-title">Astrowiki</h1>
          <p className="wiki-page-subtitle">
            Busca y descubre estrellas, planetas y todo lo que habita en el
            cosmos.
          </p>
        </header>

        <WikiSearch value={query} onChange={setQuery} />

        <WikiGrid
          items={items}
          status={status}
          query={query}
          onSelect={setSelectedItem}
          onRetry={() => setRetryKey((k) => k + 1)}
        />
      </main>

      {selectedItem && (
        <WikiModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
