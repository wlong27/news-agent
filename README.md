# News Agent

## Overview

News Agent is a web application designed to manage URLs and scrape content efficiently. It integrates modern web technologies to provide a seamless user experience.

## Features

- **URL Management**: Add, view, and delete URLs.
- **Content Scraping**: Fetch and display scraped content.
- **Modern UI**: Styled with Material-UI for a professional look.

## Technologies Used

- **Next.js**: Framework for server-side rendering and frontend development.
- **React Query**: Data fetching and caching.
- **Prisma ORM**: Database management with SQLite.
- **Axios**: HTTP client for API calls.
- **Material-UI**: Component library for styling.

## Project Structure

```
src/
├── components/
│   ├── content/
│   │   ├── ContentItem.tsx
│   │   └── ContentList.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   └── url/
│       ├── UrlForm.tsx
│       ├── UrlItem.tsx
│       └── UrlList.tsx
├── pages/
│   ├── index.tsx
│   └── api/
│       ├── content.ts
│       ├── scrape.ts
│       └── urls.ts
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/wlong27/news-agent.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the application at [http://localhost:3000](http://localhost:3000).

## Future Enhancements

- Add authentication for secure access.
- Implement advanced scraping options.
- Enhance UI with more themes and animations.

## License

This project is licensed under the MIT License.
