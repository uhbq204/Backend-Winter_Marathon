import { Injectable, NotFoundException } from '@nestjs/common';
import { RecipeCreateInput } from './inputs/recipe.input';
import { PrismaService } from 'src/prisma/prisma.service';

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
    
        create(authorId:string, {recipeSteps, nutritionFact, ingredientIds, tags, ...data}: RecipeCreateInput) {

            return this.prisma.recipe.create({
                data: {
                    ...data,
                    author: {
                        connect: { id: authorId }
                    },
                    ...(!!nutritionFact && { 
                        nutritionFact: {
                            create: nutritionFact       
                        }
                    }),
                    recipeSteps: {
                        create: recipeSteps
                    },
                    ...(!!ingredientIds?.length && {
                        recipeIngredients: {
                            create: ingredientIds.map((ingredientId, index) => ({
                                ingredientId,
                                quantity: 1,
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
            ingredientIds,
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
                                create: nutritionFact,
                                update: nutritionFact
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
                    ...(ingredientIds?.length && {
                        recipeIngredients: {
                            deleteMany: {},
                            create: ingredientIds.map((ingredientId, index) => ({
                                ingredientId,
                                quantity: 1,
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