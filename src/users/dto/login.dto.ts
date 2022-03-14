/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: String, description: 'First Name' })
  username: string;

  @ApiProperty({ type: String, description: 'Password' })
  password: string;
}
