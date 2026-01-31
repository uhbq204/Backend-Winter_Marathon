import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumActivityLevelFilter } from '../prisma/enum-activity-level-filter.input';
import { EnumNutritionGoalFilter } from '../prisma/enum-nutrition-goal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class BodyMeasurementWhereInput {

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    AND?: Array<BodyMeasurementWhereInput>;

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    OR?: Array<BodyMeasurementWhereInput>;

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    NOT?: Array<BodyMeasurementWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    heightCm?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    weightKg?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    goalWeightKg?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    chestCm?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    waistCm?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    thighCm?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    armCm?: IntNullableFilter;

    @Field(() => EnumActivityLevelFilter, {nullable:true})
    activityLevel?: EnumActivityLevelFilter;

    @Field(() => EnumNutritionGoalFilter, {nullable:true})
    nutritionGoal?: EnumNutritionGoalFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
