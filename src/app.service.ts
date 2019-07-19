import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcomeString(): string {
    return 'Welcome to SDM...';
  }
}
