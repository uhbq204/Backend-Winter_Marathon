import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { RecipeUncheckedCreateNestedManyWithoutAutorInput } from '../recipe/recipe-unchecked-create-nested-many-without-autor.input';
import { Type } from 'class-transformer';
import { CommentUncheckedCreateNestedManyWithoutAutorInput } from '../comment/comment-unchecked-create-nested-many-without-autor.input';
import { LikeUncheckedCreateNestedManyWithoutUserInput } from '../like/like-unchecked-create-nested-many-without-user.input';
import { OrderUncheckedCreateNestedManyWithoutUserInput } from '../order/order-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutMeasurementsInput {

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

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => RecipeUncheckedCreateNestedManyWithoutAutorInput, {nullable:true})
    @Type(() => RecipeUncheckedCreateNestedManyWithoutAutorInput)
    recipes?: RecipeUncheckedCreateNestedManyWithoutAutorInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutAutorInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutAutorInput;

    @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => OrderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput;
}
