import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import port from './utils/env-utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

void bootstrap();
