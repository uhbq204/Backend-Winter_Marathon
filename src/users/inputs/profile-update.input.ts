import { Field, InputType, Int } from '@nestjs/graphql';
import { Gender } from 'prisma/generated/graphql/prisma/gender.enum';

@InputType()
export class ProfilePatchInput {
  @Field(() => String, { nullable: true })
  fullName?: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field(() => Gender, { nullable: true })
  gender?: `${Gender}`;

  @Field(() => String, { nullable: true })
  bio?: string;
}