/*
  Warnings:

  - You are about to drop the column `releaseYear` on the `Platform` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Platform" DROP COLUMN "releaseYear",
ADD COLUMN     "releaseOrder" INTEGER;
