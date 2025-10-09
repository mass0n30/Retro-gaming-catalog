/*
  Warnings:

  - You are about to drop the column `gameId` on the `Cover` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Cover" DROP CONSTRAINT "Cover_gameId_fkey";

-- AlterTable
ALTER TABLE "public"."Cover" DROP COLUMN "gameId";
