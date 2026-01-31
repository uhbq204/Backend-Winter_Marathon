import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionGoal } from './nutrition-goal.enum';

@InputType()
export class EnumNutritionGoalFieldUpdateOperationsInput {

    @Field(() => NutritionGoal, {nullable:true})
    set?: `${NutritionGoal}`;
}
