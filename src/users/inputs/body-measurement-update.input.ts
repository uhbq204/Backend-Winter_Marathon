import { Field, InputType, Int } from '@nestjs/graphql';
import { ActivityLevel } from 'prisma/generated/graphql/prisma/activity-level.enum';
import { NutritionGoal } from 'prisma/generated/graphql/prisma/nutrition-goal.enum';

@InputType()
export class BodyMeasurementPatchInput {
  @Field(() => Int, { nullable: true })
  heightCm?: number;

  @Field(() => Int, { nullable: true })
  weightKg?: number;

  @Field(() => Int, { nullable: true })
  goalWeightKg?: number;

  @Field(() => Int, { nullable: true })
  chestCm?: number;

  @Field(() => Int, { nullable: true })
  waistCm?: number;

  @Field(() => Int, { nullable: true })
  thighCm?: number;

  @Field(() => Int, { nullable: true })
  armCm?: number;

  @Field(() => ActivityLevel, { nullable: true })
  activityLevel?: `${ActivityLevel}`;

  @Field(() => NutritionGoal, { nullable: true })
  nutritionGoal?: `${NutritionGoal}`;
}