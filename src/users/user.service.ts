import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createCatDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createCatDto);
    return createdUser.save();
  }

  async findAll(compare?: object): Promise<User[]> {
    if (compare === undefined){
      return this.userModel.find().exec();
    } else {
      return this.userModel.find(compare).exec();
    }
  }

  async update(filter: any, updateData : any): Promise<User[]> {
    console.log(updateData);
    const update = await this.userModel.updateMany(filter, updateData).exec();
    return this.findAll(filter);
  }

  async aggregate(pipeline: any): Promise<User[]> {
    return await this.userModel.aggregate(pipeline);
  }
}
