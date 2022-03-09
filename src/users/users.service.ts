import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const password = createUserDto.password;
    const hash = await bcrypt.hash(password, 10);
    if (!hash) {
      console.log('error');
    } else {
      const createdUser = {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        age: createUserDto.age,
        password: hash,
      };

      return this.usersRepository.save(createdUser);
    }
  }
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(firstName: string): Promise<User> {
    return await this.usersRepository.findOne({ firstName: firstName });
  }

  update(name: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ firstName: name }, updateUserDto);
  }

  remove(firstName: string) {
    return this.usersRepository.delete({ firstName: firstName });
  }

  deleteOne(user: any): Promise<any> {
    console.log(user);
    return this.usersRepository.delete({ firstName: user.username });
  }
}

function findAll() {
  throw new Error('Function not implemented.');
}
