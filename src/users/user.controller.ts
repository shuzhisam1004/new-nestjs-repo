import { Controller, Get, Post, Body, Param, Res, HttpStatus, Put, Patch, Delete } from '@nestjs/common';
import { Response } from 'express';
import mongodb = require("mongodb");
import { UserService } from './user.service';
import { 
   CreateUserDto, 
   LoginUserDto, 
   ChangePasswordDto,
   AddParterDto ,
   listRequestDto,
   DelPartner
} from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get("list")
  async UserList(@Res() res: Response) {
      return res.status(HttpStatus.OK).json({
         'list': await this.appService.findAll()
      });
  }

  @Post("login")
  async Login(
      @Body() LoginUserDto: LoginUserDto,
      @Res() res: Response
   ) {
      let compare = {
         "email": LoginUserDto.email,
         "password": LoginUserDto.password
      };
     const user = await this.appService.findAll(compare);
     
     if (user.length > 0) {
         res.status(HttpStatus.OK).json({
            'state': "checked",
            'msg': "Login Success"
         });
     } else {
         res.status(HttpStatus.OK).json({
            "state": "unchecked",
            'msg': "invaild email or password"
         });
     }
  }

  @Put("create")
  async Signup(
      @Body() CreateUserDto: CreateUserDto,
      @Res() res: Response
  ) {
      const toAddData = {
         "name": CreateUserDto.name,
         "email": CreateUserDto.email,
         "password": CreateUserDto.password
      }
      const checkEmail = await this.appService.findAll(toAddData);

      if (checkEmail.length > 0) {
         res.status(HttpStatus.OK).json({
            'msg': "already exist email"
         });
         return;
      }

      const userData = await this.appService.create(toAddData);
      res.status(HttpStatus.OK).json({
         'msg': "Signup success",
         "user": userData,
      });
  }

}
