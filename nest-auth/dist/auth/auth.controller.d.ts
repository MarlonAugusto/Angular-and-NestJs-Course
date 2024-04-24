/// <reference types="cookie-parser" />
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
export declare class AuthController {
    private authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    register(body: RegisterDTO): Promise<import("src/auth/models/user.interface").User>;
    login(email: string, password: string, response: Response): Promise<import("src/auth/models/user.interface").User>;
    user(request: Request): Promise<import("src/auth/models/user.interface").User>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
