/*
  Warnings:

  - Added the required column `image` to the `recipe_steps` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recipe_steps" ADD COLUMN     "image" TEXT NOT NULL;
