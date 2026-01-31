import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLevel } from './activity-level.enum';
import { NestedEnumActivityLevelWithAggregatesFilter } from './nested-enum-activity-level-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumActivityLevelFilter } from './nested-enum-activity-level-filter.input';

@InputType()
export class EnumActivityLevelWithAggregatesFilter {

    @Field(() => ActivityLevel, {nullable:true})
    equals?: `${ActivityLevel}`;

    @Field(() => [ActivityLevel], {nullable:true})
    in?: Array<`${ActivityLevel}`>;

    @Field(() => [ActivityLevel], {nullable:true})
    notIn?: Array<`${ActivityLevel}`>;

    @Field(() => NestedEnumActivityLevelWithAggregatesFilter, {nullable:true})
    not?: NestedEnumActivityLevelWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumActivityLevelFilter, {nullable:true})
    _min?: NestedEnumActivityLevelFilter;

    @Field(() => NestedEnumActivityLevelFilter, {nullable:true})
    _max?: NestedEnumActivityLevelFilter;
}
