import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import { Model } from 'mongoose';
import { User, UserDocument } from 'schemas/users.schema';
import { UserLogin } from 'src/model/user-login';
import { UserRegister } from 'src/model/user-register';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { };
    async getHello(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    async login(userLogin: UserLogin) {
        let user = await this.userModel.findOne({ email: userLogin.email }).exec();
        if (!user) {
            throw new UnauthorizedException("Wrong Credentials");
        }
        if (!await bcrypt.compare(userLogin.password, user.password)) {
            throw new UnauthorizedException("Wrong Credentials");
        }
        return user;
        
    }

    async register(userRegister: UserRegister) {
        let user = await this.userModel.findOne({ email: userRegister.email }).exec();
        if (user) {
            throw new UnauthorizedException("This Email is already in use!");
        }
        const salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(userRegister.password, salt);

        return (new this.userModel({
            email: userRegister.email,
            password: hashedPassword
        })).save();
    }

}
