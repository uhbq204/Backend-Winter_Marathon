import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutAutorInput } from './comment-create-without-autor.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutAutorInput } from './comment-create-or-connect-without-autor.input';
import { CommentCreateManyAutorInputEnvelope } from './comment-create-many-autor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutAutorInput {

    @Field(() => [CommentCreateWithoutAutorInput], {nullable:true})
    @Type(() => CommentCreateWithoutAutorInput)
    create?: Array<CommentCreateWithoutAutorInput>;

    @Field(() => [CommentCreateOrConnectWithoutAutorInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutAutorInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAutorInput>;

    @Field(() => CommentCreateManyAutorInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyAutorInputEnvelope)
    createMany?: CommentCreateManyAutorInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
