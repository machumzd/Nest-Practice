import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsPostController } from './aws-post/aws-post.controller';
import { ForAwsService } from './for-aws/for-aws.service';

@Module({
  imports: [],
  controllers: [AppController, AwsPostController],
  providers: [AppService, ForAwsService],
})
export class AppModule {}
