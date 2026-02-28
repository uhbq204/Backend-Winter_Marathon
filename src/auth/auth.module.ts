import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJwtConfig } from 'src/config/jwt.config';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import './auth.enum';
import { getTurnstileConfig } from 'src/config/turnstile.config';
import { TurnstileModule } from 'nestjs-cloudflare-turnstile';
import { GqlTurnstileGuard } from './guards/gql-turnstile.guard';
import { ResendModule } from 'nestjs-resend';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig
    }),
    ConfigModule,
    TurnstileModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTurnstileConfig,
      inject: [ConfigService],
    }),
    ResendModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        apiKey: configService.getOrThrow<string>('RESEND_API_KEY'),
      }),
      inject: [ConfigService],
    }),
    UsersModule
  ],
  providers: [JwtStrategy, AuthService, AuthResolver, GqlTurnstileGuard],
  exports: [GqlTurnstileGuard],
})
export class AuthModule {}
