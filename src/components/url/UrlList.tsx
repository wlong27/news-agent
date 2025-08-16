// UrlList.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Typography, List, Paper, CircularProgress } from '@mui/material';
import UrlItem from './UrlItem';

interface TargetUrl {
  id: number;
  url: string;
  description?: string;
  isActive: boolean;
  lastScraped?: Date;
}

const fetchUrls = async () => {
  const response = await axios.get<TargetUrl[]>('/api/urls');
  return response.data;
};

const UrlList: React.FC = () => {
  const { data: urls, isLoading, error } = useQuery<TargetUrl[]>({
    queryKey: ['urls'],
    queryFn: fetchUrls,
  });

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Error loading URLs</Typography>;
  if (!urls || urls.length === 0) return <Typography>No URLs added yet</Typography>;

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>URL List</Typography>
      <List>
        {urls.map((url) => (
          <UrlItem key={url.id} url={url} />
        ))}
      </List>
    </Paper>
  );
};

export default UrlList;
