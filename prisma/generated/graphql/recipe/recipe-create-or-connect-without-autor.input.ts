import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutAutorInput } from './recipe-create-without-autor.input';

@InputType()
export class RecipeCreateOrConnectWithoutAutorInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeCreateWithoutAutorInput, {nullable:false})
    @Type(() => RecipeCreateWithoutAutorInput)
    create!: RecipeCreateWithoutAutorInput;
}
