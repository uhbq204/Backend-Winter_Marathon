import { Module } from '@nestjs/common';
import { IngredientsResolver } from './ingredients.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { IngredientsService } from './ingredients.service';

@Module({
  imports: [PrismaModule],
  providers: [IngredientsResolver, IngredientsService],
})
export class IngredientsModule {}
