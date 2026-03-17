import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.use(cookieParser())

  app.useStaticAssets(join(process.cwd(), 'uploads'), {
    prefix: '/uploads',
  })

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true
  })

  app.disable('x-powered-by')
  
  await app.listen(process.env.PORT ?? 3200);
}
bootstrap();
