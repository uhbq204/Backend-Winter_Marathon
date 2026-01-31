import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionGoal } from './nutrition-goal.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumNutritionGoalFilter } from './nested-enum-nutrition-goal-filter.input';

@InputType()
export class NestedEnumNutritionGoalWithAggregatesFilter {

    @Field(() => NutritionGoal, {nullable:true})
    equals?: `${NutritionGoal}`;

    @Field(() => [NutritionGoal], {nullable:true})
    in?: Array<`${NutritionGoal}`>;

    @Field(() => [NutritionGoal], {nullable:true})
    notIn?: Array<`${NutritionGoal}`>;

    @Field(() => NestedEnumNutritionGoalWithAggregatesFilter, {nullable:true})
    not?: NestedEnumNutritionGoalWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumNutritionGoalFilter, {nullable:true})
    _min?: NestedEnumNutritionGoalFilter;

    @Field(() => NestedEnumNutritionGoalFilter, {nullable:true})
    _max?: NestedEnumNutritionGoalFilter;
}
