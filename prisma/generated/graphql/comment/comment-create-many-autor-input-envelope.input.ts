import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyAutorInput } from './comment-create-many-autor.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyAutorInputEnvelope {

    @Field(() => [CommentCreateManyAutorInput], {nullable:false})
    @Type(() => CommentCreateManyAutorInput)
    data!: Array<CommentCreateManyAutorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
