-- CreateTable
CREATE TABLE "public"."Developers" (
    "id" INTEGER NOT NULL,
    "name" TEXT,

    CONSTRAINT "Developers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_GameDevelopers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_GameDevelopers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_GameDevelopers_B_index" ON "public"."_GameDevelopers"("B");

-- AddForeignKey
ALTER TABLE "public"."_GameDevelopers" ADD CONSTRAINT "_GameDevelopers_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_GameDevelopers" ADD CONSTRAINT "_GameDevelopers_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
