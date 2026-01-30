import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Role } from "@prisma/client";
import { register } from "module";

export interface IAuthTokenData {
    id: string
    role: Role
}

export type TCurrentUser = Omit<UserModel, 'password'>

export type TRequestWithUser = {
    user?: TCurrentUser
}

registerEnumType(Role, {
    name: 'Role'
})

@ObjectType()
export class UserModel {
    @Field()
    id: string

    @Field()
    email: string
    
    @Field()
    role: Role
}


@ObjectType()
export class AuthResponse {
    @Field(() => UserModel)
    user: UserModel

    @Field()
    accessToken: string
}
