import { UserEntity } from './models/user.entity';
import { Repository } from 'typeorm';
import { User } from './models/user.interface';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findOneBy(condition: any): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, data: any): Promise<any>;
}
