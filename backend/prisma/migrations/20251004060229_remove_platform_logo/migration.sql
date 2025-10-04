/*
  Warnings:

  - You are about to drop the `PlatformLogo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Platform" DROP CONSTRAINT "Platform_platformLogo_fkey";

-- DropTable
DROP TABLE "public"."PlatformLogo";
