import { useState } from "react";

interface Props{
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center mb-6">
            <input
                type="text"
                placeholder="Search for images..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-1/2 px-4 py-2 border rounded-1-md focus:outline-none"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
            >
                Search
            </button>
        </form> 
    );
}