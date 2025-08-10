// index.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '../components/layout/Layout';
import UrlList from '../components/url/UrlList';
import UrlForm from '../components/url/UrlForm';
import ContentList from '../components/content/ContentList';

const queryClient = new QueryClient();

const Home: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <h1>Welcome to News Agent</h1>
        <UrlForm />
        <UrlList />
        <ContentList />
      </Layout>
    </QueryClientProvider>
  );
};

export default Home;
