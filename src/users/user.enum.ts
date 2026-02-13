import { registerEnumType } from "@nestjs/graphql";
import { ActivityLevel, Gender, NutritionGoal } from "@prisma/client";

registerEnumType(Gender, {
    name: 'Gender'
})

registerEnumType(ActivityLevel, {
    name: 'ActivityLevel'
})

registerEnumType(NutritionGoal, {
    name: 'NutritionGoal'
})