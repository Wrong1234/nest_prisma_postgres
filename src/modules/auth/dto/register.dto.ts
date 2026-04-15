import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
  IsArray
} from 'class-validator';
import { Type } from 'class-transformer';

class AddressDto {
  @IsString()
  street!: string;

  @IsString()
  city!: string;

  @IsString()
  state!: string;

  @IsString()
  zipCode!: string;

  @IsString()
  country!: string;
}

export class RegisterDto {
  @IsEmail()
  email!: string; // required

  @IsString()
  @MinLength(6)
  password!: string; // required

  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  profession?: string;

  @IsOptional()
  @IsString()
  nid?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  addresses?: AddressDto[];
}