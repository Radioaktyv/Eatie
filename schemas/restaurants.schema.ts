import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
    @Prop({unique: true})
    name: string;
    @Prop()
    img:
    {
        data: Buffer,
        contentType: String
    };
    @Prop()
    description:string;
    @Prop()
    lat:DoubleRange;
    @Prop()
    lng:DoubleRange;


}
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);