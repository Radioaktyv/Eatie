import { IsEmail, IsString, MinLength } from "class-validator";

export class UserLogin{
    
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(8)
    password: string;

}