import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as hbs from 'hbs';
import { ValidationPipe } from '@nestjs/common';
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
  await app.listen(3000);
}
bootstrap();