// UrlList.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUrls = async () => {
  const response = await axios.get('/api/urls');
  return response.data;
};

const UrlList: React.FC = () => {
  const { data: urls, isLoading, error } = useQuery({ queryKey: ['urls'], queryFn: fetchUrls });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading URLs</div>;

  return (
    <div>
      <h2>URL List</h2>
      <ul>
        {urls.map((url: any) => (
          <li key={url.id}>{url.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
