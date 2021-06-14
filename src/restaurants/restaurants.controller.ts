import { Body, Controller, Get, Post, Render, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RestaurantRegister } from 'src/model/restaurant';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService) { };

    @Get('add')
    @Render('add_restaurant')
    add_restaurant() {
        const object = {
            //users:this.appService.getHello()
        }
        return object
    }
    @Get('map')
    @Render('map')
    map() {
        const object = {
            // users:this.appService.getHello()
        }
        return object
    }
    @Get('notification')
    @Render('notification')
    notification() {
        const object = {
            //users:this.appService.getHello()
        }
        return object
    }
    @Get('order_history')
    @Render('order_history')
    order_history() {
        const object = {
            //users:this.appService.getHello()
        }
        return object
    }
    @Get()
    @Render('restaurants')
    async restaurants() {
        return {
            restaurants: await this.restaurantsService.findAll()
        }
    }
    @Post('add')
    @UseInterceptors(FileInterceptor('img'))
    async add(@Body() restaurantRegister: RestaurantRegister, @Res() res, @UploadedFile() file: Express.Multer.File) {
        console.log(file);
        await this.restaurantsService.upload(restaurantRegister, file);
        return res.redirect("/");
    }

}
