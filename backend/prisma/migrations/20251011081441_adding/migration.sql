-- AlterTable
ALTER TABLE "public"."Game" ADD COLUMN     "ageRatingId" INTEGER;

-- CreateTable
CREATE TABLE "public"."GameRating" (
    "id" INTEGER NOT NULL,
    "rating" TEXT NOT NULL,

    CONSTRAINT "GameRating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Game" ADD CONSTRAINT "Game_ageRatingId_fkey" FOREIGN KEY ("ageRatingId") REFERENCES "public"."GameRating"("id") ON DELETE SET NULL ON UPDATE CASCADE;
