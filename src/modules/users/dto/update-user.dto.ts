// import {
//   IsOptional,
//   IsString,
//   IsEmail,
//   MinLength,
//   IsPhoneNumber,
//   ValidateNested,
// } from 'class-validator';
// import { Type } from 'class-transformer';

// export class UpdateProfileDto {
//   @IsOptional()
//   @IsString()
//   name?: string;

//   @IsOptional()
//   @IsEmail()
//   email?: string;

//   @IsOptional()
//   @IsString()
//   @MinLength(6)
//   password?: string;

//   @IsOptional()
//   @IsString()
//   phone?: string;

//   @IsOptional()
//   @IsString()
//   profileImage?: string;

//   @IsOptional()
//   @ValidateNested()
//   @Type(() => UpdateAddressDto)
//   address?: UpdateAddressDto;
// }