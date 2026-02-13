import { Injectable, NotFoundException } from '@nestjs/common';
import { RecipeCreateInput } from './inputs/recipe.input';
import { PrismaService } from 'src/prisma/prisma.service';
import type { Prisma } from '@prisma/client';
import { NutritionFactUpdateInput } from './inputs/nutrition-fact.input';

function toNutritionFactCreate(
  input: NutritionFactUpdateInput
): Prisma.NutritionFactCreateWithoutRecipeInput {
  return {
    proteins: input.protein,
    fats: input.fats,
    carbohydrates: input.carbohydrates,
    fibers: input.fiber,
  };
}

function toNutritionFactUpdate(
  input: NutritionFactUpdateInput
): Prisma.NutritionFactUpdateWithoutRecipeInput {
  return {
    proteins: input.protein,
    fats: input.fats,
    carbohydrates: input.carbohydrates,
    fibers: input.fiber,
  };
}

@Injectable()
export class AdminRecipesService {
    constructor(private readonly prisma: PrismaService) {}
    
    getAll() {
        return this.prisma.recipe.findMany()
    }
    
    async getById(id: string) {
        const recipe = await this.prisma.recipe.findUnique({
            where: { id }
        })
    
        if (!recipe) {
            throw new NotFoundException(`Recipe with ID ${id} not found`)
        }
    
        return recipe
    }
    
    create(authorId:string, {recipeSteps, nutritionFact, ingredients, tags, ...data}: RecipeCreateInput) {

        return this.prisma.recipe.create({
            data: {
                ...data,
                author: {
                    connect: { id: authorId }
                },
                ...(!!nutritionFact && { 
                    nutritionFact: {
                        create: toNutritionFactCreate(nutritionFact)      
                    }
                }),
                recipeSteps: {
                    create: recipeSteps
                },
                ...(!!ingredients?.length && {
                    recipeIngredients: {
                        create: ingredients.map((item, index) => ({
                            ingredient: { connect: { id: item.ingredientId } },
                            quantity: item.quantity,
                            unit: item.unit,
                            order: index
                        }))
                    }
                }),
                ...(!!tags?.length && {
                    tags: {
                        connectOrCreate: tags.map((tag) => ({
                            where: { name: tag },
                            create: { name: tag }
                        }))
                    }
                })
            }
        })
    }
    
    update(id: string, {
        recipeSteps,
        nutritionFact,
        ingredients,
        tags,
        ...data
    }: RecipeCreateInput) {

        return this.prisma.recipe.update({
            where: { id },
            data: {
                ...data,
                ...(nutritionFact && {
                    nutritionFact: {
                        upsert: {
                            create: toNutritionFactCreate(nutritionFact),
                            update: toNutritionFactUpdate(nutritionFact)
                        }
                    }
                }),
                ...(recipeSteps && {
                    recipeSteps: {
                        deleteMany: {},
                        create: recipeSteps.map(step => ({
                            order: step.order,
                            title: step.title,
                            description: step.description
                        }))
                    }
                }),
                ...(ingredients?.length && {
                    recipeIngredients: {
                        deleteMany: {},
                        create: ingredients.map((item, index) => ({
                            ingredient: { connect: { id: item.ingredientId } },
                            quantity: item.quantity,
                            unit: item.unit,
                            order: index
                        }))
                    }
                }),
                ...(tags && {
                    tags: {
                        set: [],
                        connectOrCreate: tags.map(tagName => ({
                            where: { name: tagName },
                            create: { name: tagName }
                        }))
                    }
                })
            }
        })
    }
    
    deleteById(id: string) {
        return this.prisma.recipe.delete({
            where: { id }
        })
    }
}