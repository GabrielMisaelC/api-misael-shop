import { LoginUserDto } from './dto/login-user.dto';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id: id,
      }
    });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      data,
      where: {
        id: id,
      }
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id,
      }
    });
  }

  async signup(loginUserDto: LoginUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
          email: loginUserDto.email,
      }
    })

    if(!user){
      return false;
    }
    if(user.password === loginUserDto.password){
      return true;
    }
    return false;
  }
}
