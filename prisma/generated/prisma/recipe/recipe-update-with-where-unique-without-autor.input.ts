import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutAutorInput } from './recipe-update-without-autor.input';

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutAutorInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeUpdateWithoutAutorInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutAutorInput)
    data!: RecipeUpdateWithoutAutorInput;
}
