import { IsOptional, IsEmail, IsString, MinLength } from 'class-validator';

export class UpdateAuthDto {
    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
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
}