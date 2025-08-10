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
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to News Agent</h1>
          <p className="text-lg">Manage your URLs and scrape content effortlessly.</p>
        </div>
        <div className="mt-6">
          <UrlForm />
        </div>
        <div className="mt-6">
          <UrlList />
        </div>
        <div className="mt-6">
          <ContentList />
        </div>
      </Layout>
    </QueryClientProvider>
  );
};

export default Home;
