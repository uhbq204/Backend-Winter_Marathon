/*
  Warnings:

  - The values [AMERICAN] on the enum `Cuisine` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Cuisine_new" AS ENUM ('RUSSIAN', 'ITALIAN', 'CHINESE', 'MEXICAN', 'INDIAN', 'FRENCH');
ALTER TABLE "public"."recipes" ALTER COLUMN "cuisine" DROP DEFAULT;
ALTER TABLE "recipes" ALTER COLUMN "cuisine" TYPE "Cuisine_new" USING ("cuisine"::text::"Cuisine_new");
ALTER TYPE "Cuisine" RENAME TO "Cuisine_old";
ALTER TYPE "Cuisine_new" RENAME TO "Cuisine";
DROP TYPE "public"."Cuisine_old";
ALTER TABLE "recipes" ALTER COLUMN "cuisine" SET DEFAULT 'RUSSIAN';
COMMIT;
