import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interface';

@Controller('users')
export class UserController {

    constructor(private userService: UserService){}

    @Get(':id')
    public findUser(@Param('id')id: string){
        return this.userService.finUser(id);
    }

    @Post()
    public async createUser(@Body() user: User): Promise<User>{
        return await this.userService.createUser(user);
    }

}
