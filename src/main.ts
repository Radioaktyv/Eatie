import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as hbs from 'hbs';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

//import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
dotenv.config();
//process.env.CONNECTION_STRING
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
    console.log(join(__dirname, '..', 'public/img/logo.svg'))
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', '/views/partials'));
  //app.useGlobalPipes(new ValidationPipe());
  //Ciasteczka
  //app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
  }))

  await app.listen(3000);
}
bootstrap();