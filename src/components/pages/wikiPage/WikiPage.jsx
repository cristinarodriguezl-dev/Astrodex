import { useEffect, useState } from "react";
import "./WikiPage.css";
import WikiSearch from "./sections/wikiSearch/WikiSearch.jsx";
import WikiGrid from "./sections/wikiGrid/WikiGrid.jsx";
import WikiModal from "./sections/wikiModal/WikiModal.jsx";

const DEFAULT_QUERY = "astronomía";
const SEARCH_DEBOUNCE_MS = 400;
const API_URL = "https://es.wikipedia.org/w/api.php";

// Ordena por la posición del buscador y descarta artículos sin texto
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
        gsrlimit: "12",
        gsrnamespace: "0",
        prop: "extracts|pageimages|info",
        inprop: "url",
        piprop: "thumbnail",
        pithumbsize: "640",
        exintro: "1",
        explaintext: "1",
        exlimit: "max",
      });

      fetch(`${API_URL}?${params}`, { signal: controller.signal })
        .then((res) => {
          if (!res.ok) throw new Error("Request failed");
          return res.json();
        })
        .then((data) => {
          setItems(mapResults(data));
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
