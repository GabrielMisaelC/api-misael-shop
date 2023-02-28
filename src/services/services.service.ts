import { Service } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}


  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    return this.prisma.service.create({
      data: createServiceDto,
    });
  }

  findAll() {
    return this.prisma.service.findMany();
  }

  findOne(id: number) {
    return this.prisma.service.findFirst({
      where: {
        id: id,
      }
    });
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return this.prisma.service.update({
      where: {
        id: id,
      },
      data: updateServiceDto,
    });
  }

  remove(id: number) {
    return this.prisma.service.delete({
      where: {
        id: id,
      }
    });
  }
}
