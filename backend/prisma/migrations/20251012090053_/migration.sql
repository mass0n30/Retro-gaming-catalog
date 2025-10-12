/*
  Warnings:

  - You are about to drop the `_GameDevelopers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_GameDevelopers" DROP CONSTRAINT "_GameDevelopers_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_GameDevelopers" DROP CONSTRAINT "_GameDevelopers_B_fkey";

-- AlterTable
ALTER TABLE "public"."Game" ADD COLUMN     "developerId" INTEGER;

-- DropTable
DROP TABLE "public"."_GameDevelopers";

-- AddForeignKey
ALTER TABLE "public"."Game" ADD CONSTRAINT "Game_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "public"."Developers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
