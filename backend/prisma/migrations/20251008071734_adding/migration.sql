/*
  Warnings:

  - A unique constraint covering the columns `[igdbId]` on the table `Cover` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[igdbId]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[igdbId]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[igdbId]` on the table `Screenshot` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `igdbId` to the `Cover` table without a default value. This is not possible if the table is not empty.
  - Added the required column `igdbId` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `igdbId` to the `Genre` table without a default value. This is not possible if the table is not empty.
  - Added the required column `igdbId` to the `Screenshot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Cover" ADD COLUMN     "igdbId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Game" ADD COLUMN     "igdbId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Genre" ADD COLUMN     "igdbId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Platform" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "platform_id_seq";

-- AlterTable
ALTER TABLE "public"."Screenshot" ADD COLUMN     "igdbId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cover_igdbId_key" ON "public"."Cover"("igdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_igdbId_key" ON "public"."Game"("igdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_igdbId_key" ON "public"."Genre"("igdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Screenshot_igdbId_key" ON "public"."Screenshot"("igdbId");
