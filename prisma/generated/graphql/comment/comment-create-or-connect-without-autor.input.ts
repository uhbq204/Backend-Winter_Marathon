import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutAutorInput } from './comment-create-without-autor.input';

@InputType()
export class CommentCreateOrConnectWithoutAutorInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutAutorInput, {nullable:false})
    @Type(() => CommentCreateWithoutAutorInput)
    create!: CommentCreateWithoutAutorInput;
}
