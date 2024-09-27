-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "shortId" TEXT NOT NULL,
    "redirectUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitHistory" (
    "id" SERIAL NOT NULL,
    "urlId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VisitHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortId_key" ON "Url"("shortId");

-- AddForeignKey
ALTER TABLE "VisitHistory" ADD CONSTRAINT "VisitHistory_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
