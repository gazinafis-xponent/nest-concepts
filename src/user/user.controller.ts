import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserbyId(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id)
    }

    @Get(':id/welcome')
    getWelcome(@Param('id', ParseIntPipe) id: number){
        return this.userService.getWelcome(id)
    }
}
