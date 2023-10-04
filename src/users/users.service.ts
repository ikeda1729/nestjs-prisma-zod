import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    return await this.prisma.user.create({ data: dto });
  }

  async getPosts(id: number) {
    const posts = await this.prisma.user.findUnique({ where: { id } }).posts();
    if (!posts) throw new HttpException('User not found', 404)
    return posts
  }
}
