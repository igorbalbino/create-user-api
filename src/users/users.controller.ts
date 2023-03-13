import { UserService } from './shared/user.service';
import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { User } from './shared/user';

@Controller('api')
export class UsersController {

    constructor(private userService: UserService) {}

    @Get()
    async getAll() {
        console.log(typeof this.userService.getAll());
        return this.userService.getAll();
    }

    @Get(':userId')
    async getById(@Param('userId') id: string): Promise<User> {
        return this.userService.getById(id);
    }

    @Get(':userId/avatar')
    async getAvatarById(@Param('userId') id: string): Promise<User> {
        return this.userService.getById(id);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':userId')
    async update(@Param('userId') id: string, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete(':userId')
    async delete(@Param('userId') id: string) {
        this.userService.delete(id);
    }

    @Delete(':userId/avatar')
    async deleteAvatar(@Param('userId') id: string) {
        this.userService.delete(id);
    }
}