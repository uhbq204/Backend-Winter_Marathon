import { Field, InputType } from "@nestjs/graphql"
import { BodyMeasurementUpdateWithoutUserInput } from "prisma/generated/graphql/body-measurement"
import { ProfileUpdateWithoutUserInput } from "prisma/generated/graphql/profile"
import type { UserUpdateInput } from "prisma/generated/graphql/user"

@InputType()
export class UserUpdateCustomInput implements Partial<UserUpdateInput> {
    @Field(() => String, { nullable: true })
    email?: string

    @Field(() => String, { nullable: true })
    password?: string

    @Field(() => ProfileUpdateWithoutUserInput, { nullable: true })
    profileUpdate?: ProfileUpdateWithoutUserInput

    @Field(() => BodyMeasurementUpdateWithoutUserInput, { nullable: true })
    bodyMeasurement?: BodyMeasurementUpdateWithoutUserInput
}