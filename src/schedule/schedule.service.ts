import { CreateScheduleServiceDto } from './dto/create-scheduleService.dto';
import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    return this.prisma.schedule.create({
      data: createScheduleDto,
    });
  }

  async createScheduleService(createScheduleServiceDto: CreateScheduleServiceDto) {
    return this.prisma.scheduleService.create({
      data: createScheduleServiceDto,
    })
  }

  findAll() {
    return this.prisma.schedule.findMany();
  }

  findOne(id: number) {
    return this.prisma.schedule.findFirst({
      where: {
        id: id,
      }
    });
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return this.prisma.schedule.update({
      where: {
        id: id,
      }, 
      data: updateScheduleDto,
    });
  }

  remove(id: number) {
    return this.prisma.schedule.delete({
      where: {
        id: id,
      }
    });
  }
}
