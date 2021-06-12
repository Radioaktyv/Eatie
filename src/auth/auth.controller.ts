import { Body, Controller, Get, Post, Render, Req, Res, Session } from '@nestjs/common';
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
    async login(@Res() res, @Session() session) {
        if (session.email) {
            return res.redirect("/restaurants")
        }
        return;
    }

    @Post('login')
    async loginPost(@Body() userLogin: UserLogin, @Res() res, @Session() session) {
        try {
            await validateOrReject(userLogin).catch(errors => { throw errors });
            let user = await this.authService.login(userLogin);
            session.email = user.email;
            return res.redirect("/restaurants")
        } catch (ex) {
            return res.render("login", { errorMessage: ex.message });
        }
    }

    @Get('register')
    @Render('register')
    async register() {
        return;
    }

    @Post('register')
    async registerPost(@Body() userRegister: UserRegister, @Res() res, @Session() session) {
        try {
            let user = await this.authService.register(userRegister);
            session.email = user.email;
            return res.redirect("/restaurants")
        } catch (ex) {
            console.log(ex);
            return res.render("register", { errorMessage: ex.message });
        }
    }

    @Get('logout')
    async logout(@Res() res){
        res.clearCookie("connect.sid");
        res.redirect("/auth/login")
    }
}
