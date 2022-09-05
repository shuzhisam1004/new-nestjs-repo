import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  findAll(compare: object): string {
    return 'dd';
  }
}
