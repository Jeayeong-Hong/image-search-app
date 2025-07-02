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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">
        image search
      </h1>

      <div className="w-full flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      {query && (
        <p className="text-sm text-gray-500 mt-2 text-center">
          현재 검색어: {query}
        </p>
      )}

      {loading && (
        <p className="text-center text-gray-500 mt-4">불러오는 중...</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 w-full max-w-4xl mx-auto">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description || "이미지"}
            className="w-full h-64 object-cover rounded shadow"
          />
        ))}
      </div>

    </div>
  );
}

export default App;
