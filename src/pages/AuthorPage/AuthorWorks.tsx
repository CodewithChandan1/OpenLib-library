import { Link } from "react-router-dom";
import { Book } from "../../types";
import { BookCard } from "../../components/BookCard";

interface AuthorWorksProps {
  works: Book[];
}

export function AuthorWorks({ works }: AuthorWorksProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}
