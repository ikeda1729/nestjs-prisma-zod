import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { zodToOpenAPI } from 'nestjs-zod';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { CreateUserDto, CreateUserSchema } from './dto/create-user.dto';
import { PostSchema, UserSchema } from 'src/generated/zod';
import { z } from 'zod';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({
    schema: zodToOpenAPI(CreateUserSchema),
  })
  @ApiOkResponse({
    schema: zodToOpenAPI(UserSchema),
  })
  async create(@Body() createUserDto: CreateUserDto) {
    console.log("🚀 ~ file: users.controller.ts:28 ~ UsersController ~ create ~ createUserDto:", createUserDto)
    try {
      return await this.usersService.create(createUserDto);
    } catch (e: any) {
      if (e.code === 'P2002')
        throw new HttpException('User already exists', 409);
    }
  }

  @Get(':id/posts')
  @ApiOkResponse({
    schema: zodToOpenAPI(z.array(PostSchema)),
  })
  async getPosts(@Param('id') id: number) {
    return await this.usersService.getPosts(id);
  }
}
