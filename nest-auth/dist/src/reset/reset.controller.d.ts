import { ResetService } from './reset.service';
import { MailerService } from '@nestjs-modules/mailer';
import { AuthService } from 'src/auth/auth.service';
export declare class ResetController {
    private resetService;
    private mailService;
    private authService;
    constructor(resetService: ResetService, mailService: MailerService, authService: AuthService);
    forgot(email: string): Promise<{
        message: string;
    }>;
    reset(token: string, password: string, password_confirm: string): Promise<{
        message: string;
    }>;
}
