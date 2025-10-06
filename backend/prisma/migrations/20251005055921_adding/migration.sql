-- DropIndex
DROP INDEX "public"."Game_id_key";

-- DropIndex
DROP INDEX "public"."Genre_id_key";

-- CreateTable
CREATE TABLE "public"."Cover" (
    "id" INTEGER NOT NULL,
    "imageId" TEXT,
    "url" TEXT,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Cover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Screenshot" (
    "id" INTEGER NOT NULL,
    "imageId" TEXT,
    "url" TEXT,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Screenshot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Cover" ADD CONSTRAINT "Cover_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Screenshot" ADD CONSTRAINT "Screenshot_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
