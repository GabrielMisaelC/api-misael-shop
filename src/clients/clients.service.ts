import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma.service';
import { Client } from '@prisma/client';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    return this.prisma.client.create({
      data: createClientDto,
    });
  }

  async findAll() {
    return this.prisma.client.findMany();
  }

  findOne(id: number) {
    return this.prisma.client.findFirst({
      where: {
        id: id,
      }
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({
      where: {
        id: id,
      },
      data: updateClientDto,
    });
  }

  remove(id: number) {
    return this.prisma.client.delete({
      where: {
        id: id,
      }
    });
  }
}
