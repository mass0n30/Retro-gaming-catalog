/*
  Warnings:

  - You are about to drop the column `originalPlatformId` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Game" DROP COLUMN "originalPlatformId",
ADD COLUMN     "originalPlatform" TEXT;
