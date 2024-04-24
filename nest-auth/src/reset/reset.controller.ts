import { BadRequestException, Body, Controller, Inject, NotFoundException, Post, forwardRef } from '@nestjs/common';
import { ResetService } from './reset.service';
import { MailerService } from '@nestjs-modules/mailer';
import { AuthService } from 'src/auth/auth.service';
import * as bcrypt from 'bcrypt';

@Controller()
export class ResetController {
    constructor(
        private resetService: ResetService,
        private mailService: MailerService,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
    ) { }

    @Post('forgot')
    async forgot(@Body('email') email: string) {
        
        const token = Math.random().toString(26).substring(2, 15);

        await this.resetService.create({
            email,
            token
        });

        const url = `http://localhost:4200/reset/${token}`;

        await this.mailService.sendMail({
            to: email,
            subject: 'Reset your password',
            html: `<a href="${url}">Click here</a> to reset your password!`
        })

        return {
            message: 'Check your email'
        }
    }

    @Post('reset')
    async reset(
        @Body('token') token: string,
        @Body('password') password: string,
        @Body('password_confirm') password_confirm: string,
    ) {
        if (password !== password_confirm) {
            throw new BadRequestException('Passwords does not match')
        }

        const reset = await this.resetService.findOne({ token })

        const email = reset.email;

        const user = await this.authService.findOneBy({ email });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        const hashedPassword = password = await bcrypt.hash(password, 12);

        await this.authService.update(user.id, { password: hashedPassword });

        return {
            message: 'Success'
        }
    }

}
