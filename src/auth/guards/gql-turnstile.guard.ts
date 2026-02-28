import { BadRequestException, Injectable, type CanActivate, type ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { TurnstileService } from "nestjs-cloudflare-turnstile";
import { IGqlContext } from "src/app.interface";

interface ITurnstileResponse {
    success: boolean
    errorCodes?: string[]
}

@Injectable()
export class GqlTurnstileGuard implements CanActivate {
    constructor(
        private readonly turnstileService: TurnstileService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const gqlContext = GqlExecutionContext.create(context)
        const request = gqlContext.getContext<IGqlContext>().req

        const token = request?.headers?.['cf-turnstile-token']

        if (!token) {
            throw new BadRequestException('Captcha token is required')
        }

        const { success } = (await this.turnstileService.validateToken(String(token))) as ITurnstileResponse

        if (!success) {
            throw new BadRequestException('Invalid captcha token')
        }

        return true
    }
}