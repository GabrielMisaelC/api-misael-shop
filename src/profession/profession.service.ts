import { Injectable } from '@nestjs/common';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { PrismaService } from 'src/prisma.service';
import { Profession } from '@prisma/client';

@Injectable()
export class ProfessionService {
  constructor(private prisma: PrismaService) {}

  async create(createProfessionDto: CreateProfessionDto): Promise<Profession> {
    return this.prisma.profession.create({
      data: createProfessionDto,
    });
  }

  async findAll() {
    return this.prisma.profession.findMany();
  }

  findOne(id: number) {
    return this.prisma.profession.findUnique({
      where: {
        id: id,
      }
    });
  }

  update(id: number, updateProfessionDto: UpdateProfessionDto) {
    return this.prisma.profession.update({
      where: {
        id: id,
      },
      data: updateProfessionDto
    });
  }

  remove(id: number) {
    return this.prisma.profession.delete({
      where: {
        id: id,
      }
    });
  }
}
