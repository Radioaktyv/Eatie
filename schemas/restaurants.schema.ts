import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Image } from 'src/model/image';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
    @Prop({unique: true})
    name: string;
    @Prop()
    img:Image;
    @Prop()
    description:string;
    @Prop()
    lat:number;
    @Prop()
    lng:number;


}
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);