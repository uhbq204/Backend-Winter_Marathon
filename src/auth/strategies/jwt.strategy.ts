import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { User } from "@prisma/client";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { Request } from "express";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private prisma: PrismaService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => 
                    (request?.cookies?.accessToken as string | null) ?? null
            ]),
            secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
            // ignoreExpiration: true,
        })
    }

    validate({ id }: { id: string }): Promise<User | null> {
        return this.prisma.user.findUnique({ 
            where: { id },
            include: {
                profile: true,
                measurements: true
            }
        })
    }
}
