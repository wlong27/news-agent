// ContentItem.tsx
import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

interface ContentItemProps {
  content: {
    id: number;
    sourceUrl: string;
    content: string;
    timestamp: string;
    format: string;
  };
}

const ContentItem: React.FC<ContentItemProps> = ({ content }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Source: <Link href={content.sourceUrl} target="_blank" rel="noopener noreferrer">
            {content.sourceUrl}
          </Link>
        </Typography>
        <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-wrap' }}>
          {content.content}
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
          Scraped at: {new Date(content.timestamp).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContentItem;
