import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { OrderModel } from './models/order.model';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { CreateOrderInput } from './inputs/order.input';


@Resolver()
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => [OrderModel], { name: 'myOrders' })
  @Auth()
  getAllByUserId(@CurrentUser('id') userId: string) {
    return this.ordersService.getAllByUserId(userId)
  }

  @Mutation(() => OrderModel)
  @Auth()
  createOrder(
    @CurrentUser('id') userId: string,
    @Args('input') input: CreateOrderInput
  ) {
    return this.ordersService.create(userId, input)
  }
}
