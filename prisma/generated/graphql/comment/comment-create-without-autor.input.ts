import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutCommentsInput } from '../recipe/recipe-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutAutorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => RecipeCreateNestedOneWithoutCommentsInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutCommentsInput;
}
