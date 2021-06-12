import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor (private readonly appService:AppService){};
  @Get()
  @Render('index')
  root() {
    return { message: 'Test 123' };
  }

  
  @Get('add_restaurant')
    @Render('add_restaurant')
    add_restaurant(){
      const object = {
        //users:this.appService.getHello()
      }
      return object
    }
    @Get('map')
    @Render('map')
    map(){
      const object = {
       // users:this.appService.getHello()
      }
      return object
    }
    @Get('notification')
    @Render('notification')
    notification(){
      const object = {
        //users:this.appService.getHello()
      }
      return object
    }
    @Get('order_history')
    @Render('order_history')
    order_history(){
      const object = {
        //users:this.appService.getHello()
      }
      return object
    }
    @Get('restaurants')
    @Render('restaurants')
    restaurants(){
      const object = {
        //users:this.appService.getHello()
      }
      return object
    }
}
