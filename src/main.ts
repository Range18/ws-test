import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { server } from './common/config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(server.port);
}
bootstrap();
