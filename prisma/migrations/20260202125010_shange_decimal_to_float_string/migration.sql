/*
  Warnings:

  - The values [SECONDARYLY] on the enum `ActivityLevel` will be removed. If these variants are still used in the database, this will fail.
  - The values [MUSLE_GAIN] on the enum `NutritionGoal` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `quantity` on the `recipe_ingredients` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ActivityLevel_new" AS ENUM ('SECONDARILY', 'LIGHT', 'MODERATE', 'ACTIVE', 'VERY_ACTIVE');
ALTER TABLE "body_measurements" ALTER COLUMN "activity_level" TYPE "ActivityLevel_new" USING ("activity_level"::text::"ActivityLevel_new");
ALTER TYPE "ActivityLevel" RENAME TO "ActivityLevel_old";
ALTER TYPE "ActivityLevel_new" RENAME TO "ActivityLevel";
DROP TYPE "public"."ActivityLevel_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "NutritionGoal_new" AS ENUM ('WEIGHT_LOSS', 'MAINTENANCE', 'MUSCLE_GAIN');
ALTER TABLE "body_measurements" ALTER COLUMN "nutrition_goal" TYPE "NutritionGoal_new" USING ("nutrition_goal"::text::"NutritionGoal_new");
ALTER TYPE "NutritionGoal" RENAME TO "NutritionGoal_old";
ALTER TYPE "NutritionGoal_new" RENAME TO "NutritionGoal";
DROP TYPE "public"."NutritionGoal_old";
COMMIT;

-- AlterTable
ALTER TABLE "recipe_ingredients" ALTER COLUMN "quantity" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "price" SET DATA TYPE TEXT;
