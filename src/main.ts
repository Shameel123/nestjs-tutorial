import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import RequestInfoMiddleware from './middleware/request-info.middleware';
import { UserGuard } from './user/user.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalGuards(new UserGuard());
  app.use(RequestInfoMiddleware);
  await app.listen(3000);
}
bootstrap();
