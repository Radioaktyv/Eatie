import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantSchema } from 'schemas/restaurants.schema';

@Module({
  providers: [RestaurantsService],
  controllers: [RestaurantsController],
  imports: [MongooseModule.forFeature([{name:Restaurant.name,schema:RestaurantSchema}])]
})
export class RestaurantsModule {}
