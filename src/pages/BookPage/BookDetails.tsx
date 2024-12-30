import { Book } from "../../types";

interface BookDetailsProps {
  book: Book;
}

export function BookDetails({ book }: BookDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      {book.author_name && (
        <p className="text-lg text-gray-600 mb-4">
          by {book.author_name.join(", ")}
        </p>
      )}
      {book.first_publish_year && (
        <p className="text-gray-500">
          First published in {book.first_publish_year}
        </p>
      )}
    </div>
  );
}
