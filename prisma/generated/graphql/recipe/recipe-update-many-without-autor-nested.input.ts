import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutAutorInput } from './recipe-create-without-autor.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutAutorInput } from './recipe-create-or-connect-without-autor.input';
import { RecipeUpsertWithWhereUniqueWithoutAutorInput } from './recipe-upsert-with-where-unique-without-autor.input';
import { RecipeCreateManyAutorInputEnvelope } from './recipe-create-many-autor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithWhereUniqueWithoutAutorInput } from './recipe-update-with-where-unique-without-autor.input';
import { RecipeUpdateManyWithWhereWithoutAutorInput } from './recipe-update-many-with-where-without-autor.input';
import { RecipeScalarWhereInput } from './recipe-scalar-where.input';

@InputType()
export class RecipeUpdateManyWithoutAutorNestedInput {

    @Field(() => [RecipeCreateWithoutAutorInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAutorInput)
    create?: Array<RecipeCreateWithoutAutorInput>;

    @Field(() => [RecipeCreateOrConnectWithoutAutorInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAutorInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAutorInput>;

    @Field(() => [RecipeUpsertWithWhereUniqueWithoutAutorInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutAutorInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutAutorInput>;

    @Field(() => RecipeCreateManyAutorInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyAutorInputEnvelope)
    createMany?: RecipeCreateManyAutorInputEnvelope;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeUpdateWithWhereUniqueWithoutAutorInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutAutorInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutAutorInput>;

    @Field(() => [RecipeUpdateManyWithWhereWithoutAutorInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutAutorInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutAutorInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}
