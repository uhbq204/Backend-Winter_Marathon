import { Field, InputType, Int } from '@nestjs/graphql';
import { ActivityLevel, NutritionGoal } from '@prisma/client';

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