import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { environment } from './environment/environment';

// app
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3010);
}

bootstrap();
