import { Controller, Get, Post, Body } from '@nestjs/common';
import { ByteLengthQueuingStrategy } from 'stream/web';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): string {
      return 'hello';
  }
}
   