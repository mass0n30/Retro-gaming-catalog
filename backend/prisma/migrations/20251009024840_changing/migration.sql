-- DropForeignKey
ALTER TABLE "public"."Cover" DROP CONSTRAINT "Cover_gameId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Screenshot" DROP CONSTRAINT "Screenshot_gameId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Cover" ADD CONSTRAINT "Cover_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("igdbId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Screenshot" ADD CONSTRAINT "Screenshot_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("igdbId") ON DELETE RESTRICT ON UPDATE CASCADE;
