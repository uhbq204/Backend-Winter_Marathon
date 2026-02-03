import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientUpdateWithoutRecipesIngredientsInput } from './ingredient-update-without-recipes-ingredients.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipesIngredientsInput } from './ingredient-create-without-recipes-ingredients.input';
import { IngredientWhereInput } from './ingredient-where.input';

@InputType()
export class IngredientUpsertWithoutRecipesIngredientsInput {

    @Field(() => IngredientUpdateWithoutRecipesIngredientsInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipesIngredientsInput)
    update!: IngredientUpdateWithoutRecipesIngredientsInput;

    @Field(() => IngredientCreateWithoutRecipesIngredientsInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipesIngredientsInput)
    create!: IngredientCreateWithoutRecipesIngredientsInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;
}
