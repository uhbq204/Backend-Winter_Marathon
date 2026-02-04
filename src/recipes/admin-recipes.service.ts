import { Injectable, NotFoundException } from '@nestjs/common';
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
    
        // create(data: recipeCreateInput) {
        //     return this.prisma.recipe.create({
        //         data
        //     })
        // }
    
        // update(id: string, data: recipeCreateInput) {
        //     return this.prisma.recipe.update({
        //         where: { id },
        //         data
        //     })
        // }
    
        deleteById(id: string) {
            return this.prisma.recipe.delete({
                where: { id }
            })
        }
}