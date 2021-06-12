import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { Exception } from 'handlebars';
import { AppService } from 'src/app.service';
import { UserLogin } from 'src/model/user-login';
import { UserRegister } from 'src/model/user-register';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { };
    @Get('login')
    @Render('login')
    async login() {
        const object = {
            users: this.authService.getHello()
        }
        return object
    }

    @Post('login')
    async loginPost(@Body() userLogin: UserLogin, @Res() res) {
        try {
            await validateOrReject(userLogin).catch(errors => {throw errors});
            return await this.authService.login(userLogin)
        } catch (ex) {
            console.log(ex);
            return res.render("login", { errorMessage: ex.message });
        }
    }

    @Get('register')
    @Render('register')
    async register() {
        const object = {
            users: this.authService.getHello()
        }
        return object
    }

    @Post('register')
    async registerPost(@Body() userRegister: UserRegister, @Res() res) {
        try {
            return await this.authService.register(userRegister)
        } catch (ex) {
            console.log(ex);
            return res.render("register", { errorMessage: ex.message });
        }
    }

}
