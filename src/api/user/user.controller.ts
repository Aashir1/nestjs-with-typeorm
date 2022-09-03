import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    @Inject(UserService)
    private readonly serice: UserService;

    @Get(':id')
    public getUser(@Param('id', ParseIntPipe) id: number): Promise<User>{
        return this.serice.getUser(id);
    }

    @Post()
    public createUser(@Body() body:CreateUserDto): Promise<User>{
        return this.serice.createUser(body);
    }
}
