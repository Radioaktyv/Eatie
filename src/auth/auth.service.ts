import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import { Model } from 'mongoose';
import { User, UserDocument } from 'schemas/users.schema';
import { UserLogin } from 'src/model/user-login';
import { UserRegister } from 'src/model/user-register';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { };
    async getHello(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    async login(userLogin: UserLogin) {
        let user = await this.userModel.findOne({ email: userLogin.email }).exec();
        console.log(user)
        if (!user) {
            throw new UnauthorizedException("Wrong Credentials");
        }
    }

    async register(userRegister: UserRegister) {
        let user = await this.userModel.findOne({ email: userRegister.email }).exec();
        console.log(user)
        if (user) {
            throw new UnauthorizedException("This Email is already in use!");
        }
    }
}
