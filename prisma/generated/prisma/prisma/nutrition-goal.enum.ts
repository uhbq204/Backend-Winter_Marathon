import { registerEnumType } from '@nestjs/graphql';

export enum NutritionGoal {
    WEIGHT_LOSS = "WEIGHT_LOSS",
    MAINTENANCE = "MAINTENANCE",
    MUSLE_GAIN = "MUSLE_GAIN"
}


registerEnumType(NutritionGoal, { name: 'NutritionGoal', description: undefined })
