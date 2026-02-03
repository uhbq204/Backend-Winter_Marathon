import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutRecipesIngredientsInput } from './ingredient-update-without-recipes-ingredients.input';

@InputType()
export class IngredientUpdateToOneWithWhereWithoutRecipesIngredientsInput {

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;

    @Field(() => IngredientUpdateWithoutRecipesIngredientsInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipesIngredientsInput)
    data!: IngredientUpdateWithoutRecipesIngredientsInput;
}
