import { Module } from '@nestjs/common';
import { ReactionService } from './reaction.service';
import { ReactionResolver } from './reaction.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ReactionService, ReactionResolver],
})
export class ReactionModule {}
