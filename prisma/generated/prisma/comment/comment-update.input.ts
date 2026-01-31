import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutCommentsNestedInput } from '../recipe/recipe-update-one-required-without-comments-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input';

@InputType()
export class CommentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    @Type(() => RecipeUpdateOneRequiredWithoutCommentsNestedInput)
    recipe?: RecipeUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    autor?: UserUpdateOneRequiredWithoutCommentsNestedInput;
}
