/*
  Warnings:

  - You are about to drop the column `activityLevel` on the `body_measurements` table. All the data in the column will be lost.
  - You are about to drop the column `nutritionGoal` on the `body_measurements` table. All the data in the column will be lost.
  - Added the required column `activity_level` to the `body_measurements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nutrition_goal` to the `body_measurements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "body_measurements" DROP COLUMN "activityLevel",
DROP COLUMN "nutritionGoal",
ADD COLUMN     "activity_level" "ActivityLevel" NOT NULL,
ADD COLUMN     "nutrition_goal" "NutritionGoal" NOT NULL;
