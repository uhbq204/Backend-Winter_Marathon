import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateManyAutorInput } from './recipe-create-many-autor.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeCreateManyAutorInputEnvelope {

    @Field(() => [RecipeCreateManyAutorInput], {nullable:false})
    @Type(() => RecipeCreateManyAutorInput)
    data!: Array<RecipeCreateManyAutorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
