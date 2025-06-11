import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchImages } from "./api/unsplash";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (q: string) => {
    setQuery(q);
    setLoading(true);
    try {
      const result = await searchImages(q);
      setImages(result);
    } catch (err) {
      console.error("이미지 검색 실패:", err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-500">
        image search
      </h1>

      <SearchBar onSearch={handleSearch} />

      {/* query 상태를 실제로 사용하여 TS 오류 방지 + 사용자에게 현재 검색어 표시 */}
      {query && (
        <p className="text-sm text-center text-gray-400 mt-2">
          현재 검색어: <span className="font-medium text-black">{query}</span>
        </p>
      )}

      {loading && <p className="text-center text-gray-500 mt-4">불러오는 중...</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description || "이미지"}
            className="rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
