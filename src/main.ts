import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000 || 5000;
  await app.listen(PORT, () =>
    console.log(`app is running on http://localhost:${PORT} `),
  );
}
bootstrap();
