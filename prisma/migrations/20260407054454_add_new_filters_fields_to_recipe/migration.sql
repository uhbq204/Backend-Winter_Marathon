/*
  Warnings:

  - You are about to drop the column `fibers` on the `nutrition_facts` table. All the data in the column will be lost.
  - Added the required column `fiber` to the `nutrition_facts` table without a default value. This is not possible if the table is not empty.
  - Made the column `quantity` on table `recipe_ingredients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `recipes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `calories` on table `recipes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cooking_time` on table `recipes` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('BREAKFAST', 'LUNCH', 'DINNER', 'SNACK', 'DESSERT', 'DRINKS');

-- CreateEnum
CREATE TYPE "DietaryPreference" AS ENUM ('VEGETARIAN', 'LOW_CARB', 'GLUTEN_FREE', 'KETO', 'DAIRY_FREE');

-- CreateEnum
CREATE TYPE "HealthGoal" AS ENUM ('WEIGHT_LOSS', 'MUSCLE_GAIN', 'HEART_HEALTH');

-- CreateEnum
CREATE TYPE "Cuisine" AS ENUM ('RUSSIAN', 'AMERICAN', 'ITALIAN', 'CHINESE', 'MEXICAN', 'INDIAN');

-- CreateEnum
CREATE TYPE "SpecialOccasion" AS ENUM ('HOLIDAY', 'BIRTHDAY', 'ANNIVERSARY', 'PARTY');

-- AlterTable
ALTER TABLE "nutrition_facts" DROP COLUMN "fibers",
ADD COLUMN     "fiber" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "recipe_ingredients" ALTER COLUMN "quantity" SET NOT NULL;

-- AlterTable
ALTER TABLE "recipes" ADD COLUMN     "cuisine" "Cuisine" NOT NULL DEFAULT 'RUSSIAN',
ADD COLUMN     "dietaryPreference" "DietaryPreference" NOT NULL DEFAULT 'VEGETARIAN',
ADD COLUMN     "healthGoal" "HealthGoal" NOT NULL DEFAULT 'WEIGHT_LOSS',
ADD COLUMN     "image" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "mealType" "MealType" NOT NULL DEFAULT 'BREAKFAST',
ADD COLUMN     "specialOccasion" "SpecialOccasion" NOT NULL DEFAULT 'HOLIDAY',
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "calories" SET NOT NULL,
ALTER COLUMN "cooking_time" SET NOT NULL;
