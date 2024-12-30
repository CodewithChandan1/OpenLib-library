import  { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { BookCard } from "../components/BookCard";
import { Book } from "../types";
import { api } from "../lib/api";
import { Library } from "lucide-react";

export function HomePage() {
  const [trendingBooks, setTrendingBooks] = useState<Book[]>([]);
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingTrending, setIsLoadingTrending] = useState(true); // Track loading for trending books

  console.log("searchResults", searchResults);
  console.log("trendingBooks", trendingBooks);

  useEffect(() => {
    const fetchTrendingBooks = async () => {
      try {
        setIsLoadingTrending(true); // Start loading
        const data = await api.getSubject("fiction");
        console.log(data);
        if (data && Array.isArray(data.works)) {
          setTrendingBooks(data.works.slice(0, 8));
        } else {
          console.error("Trending books data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching trending books:", error);
      } finally {
        setIsLoadingTrending(false); // End loading
      }
    };

    fetchTrendingBooks();
  }, []);

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    try {
      const data = await api.searchBooks(query);
      setSearchResults(data.docs);
    } catch (error) {
      console.error("Error searching books:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Library className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">
              Discover Millions of Books
            </h1>
            <p className="text-xl text-indigo-200 mb-8">
              Search, explore, and create reading lists from the world's largest
              open library
            </p>
            <div className="flex justify-center">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-6">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResults.map((book) => (
              <BookCard key={book.key} book={book} />
            ))}
          </div>
        </div>
      )}

      {/* Trending Books */}
      {!isSearching && !isLoadingTrending && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-6">Trending Books</h2>
          {trendingBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {trendingBooks.map((book) => (
                <BookCard key={book.key} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No trending books available at the moment.
            </p>
          )}
        </div>
      )}

      {/* Loader for Trending Books */}
      {(isLoadingTrending || isSearching) && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
        </div>
      )}
    </div>
  );
}
