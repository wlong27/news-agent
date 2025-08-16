// ContentList.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Typography, CircularProgress, Paper } from '@mui/material';
import ContentItem from './ContentItem';

interface ScrapedContent {
  id: number;
  sourceUrl: string;
  content: string;
  timestamp: string;
  format: string;
}

const fetchContent = async (): Promise<ScrapedContent[]> => {
  const response = await axios.get('/api/content');
  return response.data;
};

const ContentList: React.FC = () => {
  const { data: content = [], isLoading, error } = useQuery<ScrapedContent[]>({
    queryKey: ['content'],
    queryFn: fetchContent,
  });

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Error loading content</Typography>;
  if (content.length === 0) return <Typography>No content scraped yet</Typography>;

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Scraped Content</Typography>
      {content.map((item) => (
        <ContentItem key={item.id} content={item} />
      ))}
    </Paper>
  );
};

export default ContentList;
