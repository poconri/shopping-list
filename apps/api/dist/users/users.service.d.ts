import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dtos';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<{
        message: string;
        data: User;
    }>;
    getUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
}
