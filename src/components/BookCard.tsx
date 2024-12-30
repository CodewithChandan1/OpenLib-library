import { Link } from "react-router-dom";
import { Book } from "../types";
import { api } from "../lib/api";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const coverUrl = api.getCover(book.cover_i, "M");
  return (
    <Link to={`/books${book.key}`} className="group">
      <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
        <div className="relative aspect-[2/3] bg-gray-200">
          {book.cover_i && (
            <img
              src={coverUrl}
              alt={book.title}
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="flex-1 p-4 space-y-2 bg-white">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-indigo-600">
            {book.title}
          </h3>
          {book.authors &&
            Array.isArray(book.authors) &&
            book.authors.length > 0 && (
              <p className="text-sm text-gray-600">by {book.authors[0].name}</p>
            )}

          {book.first_publish_year && (
            <p className="text-sm text-gray-500">{book.first_publish_year}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
