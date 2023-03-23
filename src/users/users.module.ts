import { Module } from '@nestjs/common';
import { UsersController } from './Controllers/users.controller';
import { UsersService } from './Services/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
