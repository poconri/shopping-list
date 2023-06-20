import { UsersService } from './users.service';
import { CreateUserDto } from './users.dtos';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): Promise<import("../typeorm").User[]>;
    findUsersById(id: number): Promise<import("../typeorm").User>;
    createUsers(createUserDto: CreateUserDto): Promise<{
        message: string;
        data: import("../typeorm").User;
    }>;
}
