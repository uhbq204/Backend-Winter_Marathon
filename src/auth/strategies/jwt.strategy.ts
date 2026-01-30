import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config/dist/config.service";
import { PassportStrategy } from "@nestjs/passport/dist/passport/passport.strategy";
import { User } from "@prisma/client";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private prisma: PrismaService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
            ignoreExpiration: true,
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
