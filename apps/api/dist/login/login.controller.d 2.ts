import { LoginService } from './login.service';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    getLogin(): string;
    login(body: any): Promise<{
        message: string;
    } | {
        error: string;
    }>;
}
