import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLevel } from './activity-level.enum';

@InputType()
export class NestedEnumActivityLevelFilter {

    @Field(() => ActivityLevel, {nullable:true})
    equals?: `${ActivityLevel}`;

    @Field(() => [ActivityLevel], {nullable:true})
    in?: Array<`${ActivityLevel}`>;

    @Field(() => [ActivityLevel], {nullable:true})
    notIn?: Array<`${ActivityLevel}`>;

    @Field(() => NestedEnumActivityLevelFilter, {nullable:true})
    not?: NestedEnumActivityLevelFilter;
}
