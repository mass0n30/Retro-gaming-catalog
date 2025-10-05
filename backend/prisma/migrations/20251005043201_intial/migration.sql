-- CreateTable
CREATE TABLE "public"."Game" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summary" TEXT,
    "storyline" TEXT,
    "firstReleaseDate" TIMESTAMP(3),
    "coverUrl" TEXT,
    "rating" DOUBLE PRECISION,
    "aggregatedRating" DOUBLE PRECISION,
    "totalRating" DOUBLE PRECISION,
    "totalRatingCount" INTEGER,
    "url" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Genre" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_GameGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_GameGenres_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_GamePlatforms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_GamePlatforms_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_key" ON "public"."Game"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Game_slug_key" ON "public"."Game"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_id_key" ON "public"."Genre"("id");

-- CreateIndex
CREATE INDEX "_GameGenres_B_index" ON "public"."_GameGenres"("B");

-- CreateIndex
CREATE INDEX "_GamePlatforms_B_index" ON "public"."_GamePlatforms"("B");

-- AddForeignKey
ALTER TABLE "public"."_GameGenres" ADD CONSTRAINT "_GameGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_GameGenres" ADD CONSTRAINT "_GameGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_GamePlatforms" ADD CONSTRAINT "_GamePlatforms_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_GamePlatforms" ADD CONSTRAINT "_GamePlatforms_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;
