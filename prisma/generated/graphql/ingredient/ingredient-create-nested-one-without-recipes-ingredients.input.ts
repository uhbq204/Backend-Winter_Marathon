import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipesIngredientsInput } from './ingredient-create-without-recipes-ingredients.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipesIngredientsInput } from './ingredient-create-or-connect-without-recipes-ingredients.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@InputType()
export class IngredientCreateNestedOneWithoutRecipesIngredientsInput {

    @Field(() => IngredientCreateWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipesIngredientsInput)
    create?: IngredientCreateWithoutRecipesIngredientsInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipesIngredientsInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipesIngredientsInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
}
