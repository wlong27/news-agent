// UrlForm.tsx
import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const UrlForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newUrl: string) => {
      const response = await axios.post('/api/urls', { url: newUrl });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['urls'] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button type="submit">Add URL</button>
    </form>
  );
};

export default UrlForm;
