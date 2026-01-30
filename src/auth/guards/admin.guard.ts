import { ForbiddenError } from "@nestjs/apollo"
import { CanActivate } from "@nestjs/common/interfaces/features/can-activate.interface"
import { ExecutionContext } from "@nestjs/common/interfaces/features/execution-context.interface"
import { GqlExecutionContext } from "@nestjs/graphql/dist/services/gql-execution-context"
import { TRequestWithUser } from "../auth.interface"
import { Role } from ".prisma/client/edge"
import { Reflector } from "@nestjs/core/services/reflector.service"

export class AdminGuard implements CanActivate {
    constructor(
        private reflector: Reflector
    ) {}

    canActivate(context: ExecutionContext): boolean {
        const ctx = GqlExecutionContext.create(context)
        const user = ctx.getContext<{ req: TRequestWithUser }>().req.user

        if (user?.role === Role.ADMIN) {
            throw new ForbiddenError('You don\'t have permission to access this resource.')
        }
        
        return true
    }
}