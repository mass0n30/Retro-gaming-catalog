/*
  Warnings:

  - You are about to drop the column `originalPlatform` on the `Game` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[releaseOrder]` on the table `Platform` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Game" DROP COLUMN "originalPlatform",
ADD COLUMN     "originalPlatformId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Platform_releaseOrder_key" ON "public"."Platform"("releaseOrder");
