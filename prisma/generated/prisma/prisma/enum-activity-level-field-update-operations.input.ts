import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLevel } from './activity-level.enum';

@InputType()
export class EnumActivityLevelFieldUpdateOperationsInput {

    @Field(() => ActivityLevel, {nullable:true})
    set?: `${ActivityLevel}`;
}
