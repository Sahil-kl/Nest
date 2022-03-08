// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':firstName')
  findOne(@Param('firstName') firstName: string) {
    return this.usersService.findOne(firstName);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(name, updateUserDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.usersService.remove(name);
  }
}
