import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { createZodDto } from 'nestjs-zod';
import { UserCreateInputSchema } from 'prisma/generated/zod';

class CreateUserDto extends createZodDto(UserCreateInputSchema) {}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    // return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.usersService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.usersService.remove(+id);
  }
}
