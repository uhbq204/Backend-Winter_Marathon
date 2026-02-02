import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { BodyMeasurementUpdateOneWithoutUserNestedInput } from '../body-measurement/body-measurement-update-one-without-user-nested.input';
import { RecipeUpdateManyWithoutAutorNestedInput } from '../recipe/recipe-update-many-without-autor-nested.input';
import { CommentUpdateManyWithoutAutorNestedInput } from '../comment/comment-update-many-without-autor-nested.input';
import { LikeUpdateManyWithoutUserNestedInput } from '../like/like-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutOrdersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Role, {nullable:true})
    role?: `${Role}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutUserNestedInput;

    @Field(() => BodyMeasurementUpdateOneWithoutUserNestedInput, {nullable:true})
    measurements?: BodyMeasurementUpdateOneWithoutUserNestedInput;

    @Field(() => RecipeUpdateManyWithoutAutorNestedInput, {nullable:true})
    recipes?: RecipeUpdateManyWithoutAutorNestedInput;

    @Field(() => CommentUpdateManyWithoutAutorNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutAutorNestedInput;

    @Field(() => LikeUpdateManyWithoutUserNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutUserNestedInput;
}
