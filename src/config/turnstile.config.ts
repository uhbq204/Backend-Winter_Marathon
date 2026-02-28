import { ConfigService } from "@nestjs/config";
import type { Request } from "express";
import { TurnstileOptions } from "nestjs-cloudflare-turnstile";

export const getTurnstileConfig = (ConfigService: ConfigService): TurnstileOptions => {
    const secretKey = ConfigService.getOrThrow<string>(
        'CLOUDFLARE_TURNSTILE_SECRET_KEY'
    )

    return {
        secretKey,
        token: (req: Request) => req.headers['cf-turnstile-token'] as string
    }
}