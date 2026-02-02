import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutAutorInput } from './recipe-create-without-autor.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutAutorInput } from './recipe-create-or-connect-without-autor.input';
import { RecipeCreateManyAutorInputEnvelope } from './recipe-create-many-autor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeUncheckedCreateNestedManyWithoutAutorInput {

    @Field(() => [RecipeCreateWithoutAutorInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAutorInput)
    create?: Array<RecipeCreateWithoutAutorInput>;

    @Field(() => [RecipeCreateOrConnectWithoutAutorInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAutorInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAutorInput>;

    @Field(() => RecipeCreateManyAutorInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyAutorInputEnvelope)
    createMany?: RecipeCreateManyAutorInputEnvelope;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}
