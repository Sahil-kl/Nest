import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { first } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log(user);
    const isMatch = await bcrypt.compare(password, user && user.password);
    if (isMatch) {
      //   const { name, password, ...rest } = user;
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.firstName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
