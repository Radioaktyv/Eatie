import { IsEmail, IsString, MinLength } from "class-validator";

export class UserRegister{
    
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(8)
    password: string;
    @IsString()
    @MinLength(8)
    confirmedPassword: string;

}