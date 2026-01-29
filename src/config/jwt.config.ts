import { ConfigService } from "@nestjs/config/dist/config.service";
import { JwtModuleOptions } from "@nestjs/jwt";

export const getJwtConfig = (
    configService: ConfigService
): JwtModuleOptions => ({
    secret: configService.get<string>('JWT_SECRET')
});
