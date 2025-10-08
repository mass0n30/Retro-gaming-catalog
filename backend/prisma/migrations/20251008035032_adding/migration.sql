-- AlterTable
CREATE SEQUENCE "public".cover_id_seq;
ALTER TABLE "public"."Cover" ALTER COLUMN "id" SET DEFAULT nextval('"public".cover_id_seq');
ALTER SEQUENCE "public".cover_id_seq OWNED BY "public"."Cover"."id";

-- AlterTable
CREATE SEQUENCE "public".game_id_seq;
ALTER TABLE "public"."Game" ALTER COLUMN "id" SET DEFAULT nextval('"public".game_id_seq');
ALTER SEQUENCE "public".game_id_seq OWNED BY "public"."Game"."id";

-- AlterTable
CREATE SEQUENCE "public".genre_id_seq;
ALTER TABLE "public"."Genre" ADD COLUMN     "slug" TEXT,
ALTER COLUMN "id" SET DEFAULT nextval('"public".genre_id_seq'),
ALTER COLUMN "name" DROP NOT NULL;
ALTER SEQUENCE "public".genre_id_seq OWNED BY "public"."Genre"."id";

-- AlterTable
CREATE SEQUENCE "public".platform_id_seq;
ALTER TABLE "public"."Platform" ALTER COLUMN "id" SET DEFAULT nextval('"public".platform_id_seq');
ALTER SEQUENCE "public".platform_id_seq OWNED BY "public"."Platform"."id";

-- AlterTable
CREATE SEQUENCE "public".screenshot_id_seq;
ALTER TABLE "public"."Screenshot" ALTER COLUMN "id" SET DEFAULT nextval('"public".screenshot_id_seq');
ALTER SEQUENCE "public".screenshot_id_seq OWNED BY "public"."Screenshot"."id";
