import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to PropelAI!';
  }

  getHealth(): string {
    return 'Healthy!';
  }
}
