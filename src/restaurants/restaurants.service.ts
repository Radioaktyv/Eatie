import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from 'schemas/restaurants.schema';
import { RestaurantRegister } from 'src/model/restaurant';

@Injectable()
export class RestaurantsService {
    constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<RestaurantDocument>) { };
    async findAll(): Promise<Restaurant[]>{
        return this.restaurantModel.find().exec();
    }
    async upload(restaurantRegister: RestaurantRegister, file: Express.Multer.File) {
        //console.log(restaurantRegister);
        return (new this.restaurantModel({
            name: restaurantRegister.name,
            description: restaurantRegister.description,
            lng: restaurantRegister.lng,
            lat: restaurantRegister.lat,
            /*img: {
                data: file.buffer,
                contentType: file.mimetype},
                */
        })).save();

    }
}
