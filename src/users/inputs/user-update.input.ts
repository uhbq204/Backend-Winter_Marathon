import { Field, InputType } from '@nestjs/graphql';
import { ProfilePatchInput } from './profile-update.input';
import { BodyMeasurementPatchInput } from './body-measurement-update.input';

@InputType()
export class UserUpdateCustomInput {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => ProfilePatchInput, { nullable: true })
  profile?: ProfilePatchInput;

  @Field(() => BodyMeasurementPatchInput, { nullable: true })
  measurements?: BodyMeasurementPatchInput;
}