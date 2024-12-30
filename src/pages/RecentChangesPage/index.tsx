import React, { useState, useEffect } from 'react';
import { api } from '../../lib/api';
import { ChangeItem } from './ChangeItem';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export function RecentChangesPage() {
  const [changes, setChanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChanges = async () => {
      try {
        const data = await api.getRecentChanges();
        setChanges(data);
      } catch (error) {
        console.error('Error fetching recent changes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChanges();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Recent Changes</h1>
      <div className="space-y-4">
        {changes.map(change => (
          <ChangeItem key={change.key} change={change} />
        ))}
      </div>
    </div>
  );
}