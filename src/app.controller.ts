import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor (private readonly appService:AppService){};
  @Get()
  root(@Res() res) {
    res.redirect("auth/login");
  }
}
