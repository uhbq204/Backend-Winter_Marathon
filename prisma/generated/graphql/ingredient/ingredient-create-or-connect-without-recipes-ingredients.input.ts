import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipesIngredientsInput } from './ingredient-create-without-recipes-ingredients.input';

@InputType()
export class IngredientCreateOrConnectWithoutRecipesIngredientsInput {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientCreateWithoutRecipesIngredientsInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipesIngredientsInput)
    create!: IngredientCreateWithoutRecipesIngredientsInput;
}
