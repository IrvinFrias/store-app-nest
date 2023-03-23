import {Body, Controller, Delete, Get, Param, Post, Put, HttpCode} from '@nestjs/common';
import {UserDto} from "../dtos/user.dto";
import {UsersService} from "../Services/users.service";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService ) {}

    //Return all Services:
    @Get()
    findAll(): UserDto[]{
        return this.userService.findAll();
    }
    //Create a user:
    @Post()
    @HttpCode(201)
    createUser(@Body() newUser: UserDto): any{
        this.userService.createUser(newUser);
        return {message: "The user was create successfully", user: newUser}
    }

    //Find a user:
    @Get(':id')
    @HttpCode(201)
    findOne(@Param('id') id: string): UserDto{
        return this.userService.findOne(id);

    }

    //Update a user:
    @Put(':id')
    @HttpCode(201)
    updateOne(@Param('id') id: string, @Body() user: UserDto): any{
        this.userService.updateOneById(id, user);
        return {message: "The user was updated successfully"} ;
    }

    //Delete a user:
    @Delete(':id')
    @HttpCode(201)
    deleteOne(@Param('id') id: string): any{
        this.userService.deleteOneById(id);
        return {message: "The user was deleted successfully"}
    }

}
