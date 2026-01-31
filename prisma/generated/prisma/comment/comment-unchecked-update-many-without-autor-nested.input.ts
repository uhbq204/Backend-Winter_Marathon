import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutAutorInput } from './comment-create-without-autor.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutAutorInput } from './comment-create-or-connect-without-autor.input';
import { CommentUpsertWithWhereUniqueWithoutAutorInput } from './comment-upsert-with-where-unique-without-autor.input';
import { CommentCreateManyAutorInputEnvelope } from './comment-create-many-autor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutAutorInput } from './comment-update-with-where-unique-without-autor.input';
import { CommentUpdateManyWithWhereWithoutAutorInput } from './comment-update-many-with-where-without-autor.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUncheckedUpdateManyWithoutAutorNestedInput {

    @Field(() => [CommentCreateWithoutAutorInput], {nullable:true})
    @Type(() => CommentCreateWithoutAutorInput)
    create?: Array<CommentCreateWithoutAutorInput>;

    @Field(() => [CommentCreateOrConnectWithoutAutorInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutAutorInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAutorInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutAutorInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutAutorInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutAutorInput>;

    @Field(() => CommentCreateManyAutorInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyAutorInputEnvelope)
    createMany?: CommentCreateManyAutorInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutAutorInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutAutorInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutAutorInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutAutorInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutAutorInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutAutorInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
