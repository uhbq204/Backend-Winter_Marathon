import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Reflector } from '@nestjs/core'
import { Role } from '@prisma/client'
import { TRequestWithUser } from '../auth.interface'

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context)
    const user = ctx.getContext<{ req: TRequestWithUser }>().req.user

    
    if (!user || user.role !== Role.ADMIN) {
      throw new ForbiddenException("You don't have permission to access this resource.")
    }
    return true
  }
}