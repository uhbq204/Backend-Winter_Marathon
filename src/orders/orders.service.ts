import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderStatus } from './enums';
import { CreateOrderInput, OrderCreateInput } from './inputs/order.input';

@Injectable()
export class OrdersService {
    create(userId: string, input: CreateOrderInput) {
      throw new Error('Method not implemented.');
    }
    constructor(private readonly prisma: PrismaService) {}

    getAllByUserId(userId: string) {
        return this.prisma.order.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            include: {
                items: {
                    include: {
                        recipeIngredient: {
                            include: {
                                ingredient: true,
                                recipe: true
                            }
                        }
                    }
                }
            }
        })
    }

    async makeOrder(userId: string, input: OrderCreateInput) {
        if (!input.items.length) {
            throw new BadRequestException('Order must contain at least one item')
        }

        const generatedOrderId = Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase()

        const recipeIngredientIds = input.items.map(item => item.recipeIngredientId)

        const recipeIngredients = await this.prisma.recipeIngredient.findMany({
            where: { id: { in: recipeIngredientIds } },
            include: {
                ingredient: true
            }
        })

        const ingredientMap = new Map(recipeIngredients.map(ri => [ri.id, ri]))

        let total = 0

        const itensWithPrice = input.items.map(item => {
            const recipeIngredient = ingredientMap.get(item.recipeIngredientId)

            if (!recipeIngredient) {
                throw new NotFoundException(
                    `Recipe ingredient ${item.recipeIngredientId} not found`
                )
            }

            const price = Number(recipeIngredient.ingredient.price || 0)
            const itemPrice = price * item.quantity

            total += itemPrice

            return {
                recipeIngredientId: item.recipeIngredientId,
                quantity: item.quantity,
                price: itemPrice
            }
        })

        return this.prisma.order.create({
            data: {
                orderId: generatedOrderId,
                userId,
                status: OrderStatus.PENDING,
                total,
                items: {
                    create: itensWithPrice
                }
            },
            include: {
                items: {
                    include: {
                        recipeIngredient: {
                            include: {
                                ingredient: true
                            }
                        }
                    }
                }
            }
        })
    }
}
