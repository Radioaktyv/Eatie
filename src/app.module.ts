import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { userInfo } from 'os';
import { join } from 'path';
import { User, UserSchema } from 'schemas/users.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory:async () => ({
        uri:process.env.CONNECTION_STRING
      }) 
    }),
    
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
