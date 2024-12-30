import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book } from '../../types';
import { api } from '../../lib/api';
import { BookDetails } from './BookDetails';
import { BookCover } from './BookCover';

export function BookPage() {
  const { workId } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        if (workId) {
          const data = await api.getBook(workId);
          setBook(data);
        }
      } catch (error) {
        console.error('Error fetching book:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [workId]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!book) {
    return <div className="p-8 text-center">Book not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {book.cover_i && (
          <div className="md:col-span-1">
            <BookCover coverId={book.cover_i} title={book.title} />
          </div>
        )}
        <div className="md:col-span-2">
          <BookDetails book={book} />
        </div>
      </div>
    </div>
  );
}