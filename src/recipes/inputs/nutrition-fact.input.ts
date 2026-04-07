import { Field, Float, InputType } from "@nestjs/graphql";
import { DecimalJsLike } from "@prisma/client/runtime/client";

@InputType()
export class NutritionFactUpdateInput {
    [x: string]: string | number | DecimalJsLike | DecimalJsLike;
    @Field(() => Float, { nullable: false })
    proteins!: number;

    @Field(() => Float, { nullable: false })
    fats!: number;

    @Field(() => Float, { nullable: false })
    carbohydrates!: number;
    
    @Field(() => Float, { nullable: false })
    fiber!: number;
}