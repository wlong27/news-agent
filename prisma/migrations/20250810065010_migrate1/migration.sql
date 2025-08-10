-- CreateTable
CREATE TABLE "TargetUrl" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastScraped" DATETIME
);

-- CreateTable
CREATE TABLE "ScrapedContent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sourceUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "format" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TargetUrl_url_key" ON "TargetUrl"("url");
