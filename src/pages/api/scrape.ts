// scrape.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import * as cheerio from "cheerio";

const prisma = new PrismaClient();

async function scrapeContent(url: string): Promise<string> {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Remove unwanted elements
    $("script").remove();
    $("style").remove();
    $("nav").remove();
    $("header").remove();
    $("footer").remove();

    // Get the main content
    let content = "";
    const mainContent = $("main, article, .content, #content, .main-content");

    if (mainContent.length > 0) {
      content = mainContent.text();
    } else {
      content = $("body").text();
    }

    // Clean up the content
    return content.replace(/\s+/g, " ").replace(/\n+/g, "\n").trim();
  } catch (error) {
    console.error("Scraping error:", error);
    throw new Error(`Failed to scrape content from ${url}`);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "POST") {
    try {
      const { url } = req.body;

      if (!url) {
        return res.status(400).json({ error: "URL is required" });
      }

      // Scrape the content directly
      const content = await scrapeContent(url);

      const scrapedContent = response.data as FirecrawlResponse;

      // Store the scraped content in the database
      const content = await prisma.scrapedContent.create({
        data: {
          sourceUrl: url,
          content: scrapedContent.content || scrapedContent.markdown || "",
          format: "markdown",
        },
      });

      // Update the lastScraped timestamp for the URL
      await prisma.targetUrl.updateMany({
        where: { url },
        data: { lastScraped: new Date() },
      });

      res.status(200).json(content);
    } catch (error) {
      console.error("Scraping error:", error);
      res.status(500).json({ error: "Failed to scrape content" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
