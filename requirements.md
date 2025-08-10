# News Agent Web Application Requirements

Please help me create a web application with the following requirements:

## Core Features

1. Web Content Management

   - Implement web scraping and search functionality using the Firecrawl API
   - Allow users to manage (add/edit/remove) a list of target URLs for content aggregation
   - Store the URL list persistently (database or file storage)

2. User Interface

   - Create a clean, modern web interface
   - Provide a form for users to manage the URL list
   - Display scraped content in an organized manner
   - Include basic error handling and loading states

3. Technical Specifications

   - Frontend: React with TypeScript for type safety
   - Backend: Node.js Express server
   - Data Storage: SQLite for simplicity (can be upgraded to PostgreSQL later)
   - API Integration: Firecrawl API for web scraping and searching

4. API Requirements
   - Implement endpoints for:
     - CRUD operations for URL management
     - Trigger web scraping/search operations
     - Retrieve scraped content

## Implementation Details

1. URL Management

   ```typescript
   interface TargetUrl {
     id: number;
     url: string;
     description?: string;
     isActive: boolean;
     lastScraped?: Date;
   }
   ```

2. Content Structure
   ```typescript
   interface ScrapedContent {
     id: number;
     sourceUrl: string;
     content: string;
     timestamp: Date;
     format: "markdown" | "html";
   }
   ```

Please generate the code for this web application following modern best practices and ensuring clean code architecture with proper separation of concerns.
