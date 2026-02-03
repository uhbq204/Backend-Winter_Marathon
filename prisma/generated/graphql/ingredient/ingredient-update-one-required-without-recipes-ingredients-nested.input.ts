import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipesIngredientsInput } from './ingredient-create-without-recipes-ingredients.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipesIngredientsInput } from './ingredient-create-or-connect-without-recipes-ingredients.input';
import { IngredientUpsertWithoutRecipesIngredientsInput } from './ingredient-upsert-without-recipes-ingredients.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateToOneWithWhereWithoutRecipesIngredientsInput } from './ingredient-update-to-one-with-where-without-recipes-ingredients.input';

@InputType()
export class IngredientUpdateOneRequiredWithoutRecipesIngredientsNestedInput {

    @Field(() => IngredientCreateWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipesIngredientsInput)
    create?: IngredientCreateWithoutRecipesIngredientsInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipesIngredientsInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipesIngredientsInput;

    @Field(() => IngredientUpsertWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => IngredientUpsertWithoutRecipesIngredientsInput)
    upsert?: IngredientUpsertWithoutRecipesIngredientsInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientUpdateToOneWithWhereWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => IngredientUpdateToOneWithWhereWithoutRecipesIngredientsInput)
    update?: IngredientUpdateToOneWithWhereWithoutRecipesIngredientsInput;
}
