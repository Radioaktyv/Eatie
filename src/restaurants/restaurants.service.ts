import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from 'schemas/restaurants.schema';

@Injectable()
export class RestaurantsService {
    constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<RestaurantDocument>) { };
    async findAll(): Promise<Restaurant[]>{
        return this.restaurantModel.find().exec();
    }
}
