import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello mazood!';
  }
  getGoodbye(): string {
    return 'good bye';
  }
  getWelcome(): string {
    return 'welcome maison';
  }
}
