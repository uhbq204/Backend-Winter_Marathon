import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { BodyMeasurementCreateNestedOneWithoutUserInput } from '../body-measurement/body-measurement-create-nested-one-without-user.input';
import { RecipeCreateNestedManyWithoutAutorInput } from '../recipe/recipe-create-nested-many-without-autor.input';
import { CommentCreateNestedManyWithoutAutorInput } from '../comment/comment-create-nested-many-without-autor.input';
import { LikeCreateNestedManyWithoutUserInput } from '../like/like-create-nested-many-without-user.input';
import { OrderCreateNestedManyWithoutUserInput } from '../order/order-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Role, {nullable:true})
    role?: `${Role}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BodyMeasurementCreateNestedOneWithoutUserInput, {nullable:true})
    measurements?: BodyMeasurementCreateNestedOneWithoutUserInput;

    @Field(() => RecipeCreateNestedManyWithoutAutorInput, {nullable:true})
    recipes?: RecipeCreateNestedManyWithoutAutorInput;

    @Field(() => CommentCreateNestedManyWithoutAutorInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutAutorInput;

    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutUserInput;

    @Field(() => OrderCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: OrderCreateNestedManyWithoutUserInput;
}
