import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello mzee!';
  }
  getGoodbye(): string {
    return 'good bye';
  }
}
