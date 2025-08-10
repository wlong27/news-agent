// index.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '../components/layout/Layout';
import UrlList from '../components/url/UrlList';
import UrlForm from '../components/url/UrlForm';
import ContentList from '../components/content/ContentList';
import { Container, Typography, Box, Paper } from '@mui/material';

const queryClient = new QueryClient();

const Home: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Container maxWidth="md">
          <Paper elevation={3} style={{ padding: '24px', marginTop: '16px' }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to News Agent
            </Typography>
            <Typography variant="body1" gutterBottom>
              Manage your URLs and scrape content effortlessly.
            </Typography>
          </Paper>
          <Box mt={4}>
            <UrlForm />
          </Box>
          <Box mt={4}>
            <UrlList />
          </Box>
          <Box mt={4}>
            <ContentList />
          </Box>
        </Container>
      </Layout>
    </QueryClientProvider>
  );
};

export default Home;
