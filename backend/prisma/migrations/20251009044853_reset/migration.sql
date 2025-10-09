/*
  Warnings:

  - Added the required column `gameId` to the `Cover` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Cover" ADD COLUMN     "gameId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Cover" ADD CONSTRAINT "Cover_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("igdbId") ON DELETE RESTRICT ON UPDATE CASCADE;
