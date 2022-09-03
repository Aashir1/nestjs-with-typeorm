import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    @InjectRepository(User)
    private readonly repository: Repository<User>;

    public getUser(id: number): Promise<User>{
        return this.repository.findOne({where:{id}});
    }

    public createUser(body: CreateUserDto): Promise<User>{
        const user = new User();

        user.name = body.name;
        user.email = body.email;

        return this.repository.save(user);
    }
}
