import { Injectable } from '@nestjs/common';
import {UserDto} from "../dtos/user.dto";

@Injectable()
export class UsersService {
    private users: UserDto[] = [];

    createUser(user: UserDto) {
        this.users.push(user);
    }

    findAll(): UserDto[]{
        return this.users;
    }
    findOne(id: string): UserDto{
        return this.users.find((user) => user.id === id);
    }

    deleteOneById(id: string){
        this.users = this.users.filter((user) => user.id !== id);
    }
    updateOneById(id: string, userUpdated: UserDto){
        this.users = this.users.map(user => user.id === id ? {...user,...userUpdated}: user);
    }

}
