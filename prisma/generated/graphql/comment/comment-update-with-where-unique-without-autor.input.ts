import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutAutorInput } from './comment-update-without-autor.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutAutorInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutAutorInput, {nullable:false})
    @Type(() => CommentUpdateWithoutAutorInput)
    data!: CommentUpdateWithoutAutorInput;
}
