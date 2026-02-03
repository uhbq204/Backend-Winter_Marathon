import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IngredientCreateInput as ingredientCreateInput } from './inputs/create-ingredient.input';

@Injectable()
export class IngredientsService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.ingredient.findMany()
    }

    async getById(id: string) {
        const ingredient = await this.prisma.ingredient.findUnique({
            where: { id }
        })

        if (!ingredient) {
            throw new NotFoundException(`Ingredient with ID ${id} not found`)
        }

        return ingredient
    }

    create(data: ingredientCreateInput) {
        return this.prisma.ingredient.create({
            data
        })
    }

    update(id: string, data: ingredientCreateInput) {
        return this.prisma.ingredient.update({
            where: { id },
            data
        })
    }

    deleteById(id: string) {
        return this.prisma.ingredient.delete({
            where: { id }
        })
    }
}
