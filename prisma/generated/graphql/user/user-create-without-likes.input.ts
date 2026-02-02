import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { BodyMeasurementCreateNestedOneWithoutUserInput } from '../body-measurement/body-measurement-create-nested-one-without-user.input';
import { RecipeCreateNestedManyWithoutAutorInput } from '../recipe/recipe-create-nested-many-without-autor.input';
import { CommentCreateNestedManyWithoutAutorInput } from '../comment/comment-create-nested-many-without-autor.input';
import { OrderCreateNestedManyWithoutUserInput } from '../order/order-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutLikesInput {

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

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUserInput;

    @Field(() => BodyMeasurementCreateNestedOneWithoutUserInput, {nullable:true})
    measurements?: BodyMeasurementCreateNestedOneWithoutUserInput;

    @Field(() => RecipeCreateNestedManyWithoutAutorInput, {nullable:true})
    recipes?: RecipeCreateNestedManyWithoutAutorInput;

    @Field(() => CommentCreateNestedManyWithoutAutorInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutAutorInput;

    @Field(() => OrderCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: OrderCreateNestedManyWithoutUserInput;
}
