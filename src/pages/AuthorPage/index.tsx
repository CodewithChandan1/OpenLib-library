import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, Book } from '../../types';
import { api } from '../../lib/api';
import { AuthorBio } from './AuthorBio';
import { AuthorWorks } from './AuthorWorks';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export function AuthorPage() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState<Author | null>(null);
  const [works, setWorks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        if (authorId) {
          const authorData = await api.getAuthor(authorId);
          setAuthor(authorData);
          
          // Fetch author's works if available
          if (authorData.works) {
            const worksData = await Promise.all(
              authorData.works.slice(0, 9).map(workId => 
                api.getBook(workId)
              )
            );
            setWorks(worksData);
          }
        }
      } catch (error) {
        console.error('Error fetching author data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorData();
  }, [authorId]);

  if (loading) return <LoadingSpinner />;
  if (!author) return <div className="p-8 text-center">Author not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AuthorBio author={author} />
      {works.length > 0 && <AuthorWorks works={works} />}
    </div>
  );
}