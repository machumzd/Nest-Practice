import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
@Module({
  imports: [],
  controllers: [AppController, AppController, CatsController],
  providers: [AppService, AppService],
})
export class AppModule {}
