export declare class LoginService {
    validateUser(username: string, password: string): Promise<{
        message: string;
    }>;
}
