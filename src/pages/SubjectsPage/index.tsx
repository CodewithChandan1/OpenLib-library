import React, { useState, useEffect } from 'react';
import { Subject } from '../../types';
import { api } from '../../lib/api';
import { SubjectCard } from './SubjectCard';
import { LoadingSpinner } from '../../components/LoadingSpinner';

const FEATURED_SUBJECTS = [
  'Fiction', 'Science', 'History', 'Biography', 
  'Fantasy', 'Art', 'Philosophy', 'Psychology'
];

export function SubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const subjectPromises = FEATURED_SUBJECTS.map(name => 
          api.getSubject(name.toLowerCase())
        );
        const results = await Promise.all(subjectPromises);
        setSubjects(results);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Browse by Subject</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map(subject => (
          <SubjectCard key={subject.key} subject={subject} />
        ))}
      </div>
    </div>
  );
}