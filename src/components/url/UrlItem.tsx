// UrlItem.tsx
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Button, ListItem, Typography, Box } from '@mui/material';

interface UrlItemProps {
  url: {
    id: number;
    url: string;
    description?: string;
    isActive: boolean;
    lastScraped?: Date;
  };
}

const UrlItem: React.FC<UrlItemProps> = ({ url }) => {
  const queryClient = useQueryClient();

  const scrapeMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post('/api/scrape', { url: url.url });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['content'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.delete('/api/urls', { data: { deleteId: url.id } });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['urls'] });
    },
  });

  return (
    <ListItem sx={{ display: 'flex', gap: 2, mb: 1 }}>
      <Typography sx={{ flex: 1 }}>{url.url}</Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => scrapeMutation.mutate()}
          disabled={scrapeMutation.isPending}
          sx={{ mr: 1 }}
        >
          {scrapeMutation.isPending ? 'Scraping...' : 'Scrape'}
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => deleteMutation.mutate()}
          disabled={deleteMutation.isPending}
        >
          Delete
        </Button>
      </Box>
    </ListItem>
  );
};

export default UrlItem;
