import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionGoal } from './nutrition-goal.enum';
import { NestedEnumNutritionGoalFilter } from './nested-enum-nutrition-goal-filter.input';

@InputType()
export class EnumNutritionGoalFilter {

    @Field(() => NutritionGoal, {nullable:true})
    equals?: `${NutritionGoal}`;

    @Field(() => [NutritionGoal], {nullable:true})
    in?: Array<`${NutritionGoal}`>;

    @Field(() => [NutritionGoal], {nullable:true})
    notIn?: Array<`${NutritionGoal}`>;

    @Field(() => NestedEnumNutritionGoalFilter, {nullable:true})
    not?: NestedEnumNutritionGoalFilter;
}
