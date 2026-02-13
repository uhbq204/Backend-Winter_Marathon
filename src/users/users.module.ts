import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import './user.enum'

@Module({
  imports: [],
  providers: [UsersResolver, UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
