-- CreateTable
CREATE TABLE "public"."Platform" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT,
    "generation" INTEGER,
    "slug" TEXT NOT NULL,
    "platformLogo" INTEGER,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PlatformLogo" (
    "id" INTEGER NOT NULL,
    "image_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "PlatformLogo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Platform" ADD CONSTRAINT "Platform_platformLogo_fkey" FOREIGN KEY ("platformLogo") REFERENCES "public"."PlatformLogo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
