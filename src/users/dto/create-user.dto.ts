import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ type: String, description: 'First Name' })
  firstName: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Last Name' })
  lastName: string;

  @IsNumber()
  @ApiProperty({ type: Number, description: 'Age' })
  age: number;

  @IsString()
  @ApiProperty({ type: String, description: 'Password' })
  password: string;
}
