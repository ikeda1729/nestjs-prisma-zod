import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';
import { UserCreateInputSchema } from 'prisma/generated/zod';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(user: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: user });
  }
}
