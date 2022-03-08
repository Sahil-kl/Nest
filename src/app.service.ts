import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello i am sahil singh and i learning Nest js!';
  }
}
