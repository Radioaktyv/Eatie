import { IsEmail, IsString, MinLength } from "class-validator";

export class RestaurantRegister{
    img: {
        data: Buffer;
        contentType: string;
    };
    @IsString()
    name: string;
    @IsString()
    description: string;
    lat: number;
    lng: number;

}