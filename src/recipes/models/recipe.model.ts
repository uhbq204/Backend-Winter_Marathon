import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Difficulty } from "../recipe.enum";
import { NutritionFact } from "./nutrition-fact.model";
import { RecipeTagModel } from "./recipe-tag.model";
import { RecipeStepModel } from "./recipe-step.model";
import { RecipeIngredientModel } from "./recipe-ingredient.model";
import { UserModel } from "src/users/models/user.model";

@ObjectType()
export class RecipeModel {
    @Field(() => ID, { nullable: false })
    id!: string

    @Field(() => String, { nullable: false })
    slug!: string

    @Field(() => String, { nullable: false })
    title!: string

    @Field(() => String, { nullable: false })
    description!: string

    @Field(() => Int, { nullable: false })
    calories!: number
    
    @Field(() => Int, { nullable: false })
    cookingTime!: number

    @Field(() => Difficulty, { nullable: false })
    difficulty!: Difficulty

    @Field(() => String, { nullable: true })
    authorId!: string

    @Field(() => Date, { nullable: false })
    createdAt!: Date

    @Field(() => Date, { nullable: false })
    updatedAt!: Date

    @Field(() => UserModel, { nullable: false })
    author?: UserModel

    @Field(() => NutritionFact, { nullable: true })
    nutritionFact?: NutritionFact | null

    @Field(() => [RecipeTagModel], { nullable: true })
    tags?: Array<RecipeTagModel>

    @Field(() => [RecipeStepModel], { nullable: true })
    recipeSteps?: Array<RecipeStepModel>

    @Field(() => [RecipeIngredientModel], { nullable: true })
    ingredients?: Array<RecipeIngredientModel>

    @Field(() => Int, { nullable: true })
    likes?: number
}