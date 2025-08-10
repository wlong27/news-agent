// ContentList.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchContent = async (): Promise<{ id: number; content: string }[]> => {
  const response = await axios.get('/api/content');
  return response.data as { id: number; content: string }[];
};

const ContentList: React.FC = () => {
  const { data: content = [], isLoading, error } = useQuery({ queryKey: ['content'], queryFn: fetchContent });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  return (
    <div>
      <h2>Scraped Content</h2>
      <ul>
        {content.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
