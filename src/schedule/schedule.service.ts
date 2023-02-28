import { CreateScheduleServiceDto } from './dto/create-scheduleService.dto';
import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateCompletedServiceDto } from './dto/create-completedService.dto';

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
  
  async createCompletedService(createCompletedServiceDto: CreateCompletedServiceDto) {
    return this.prisma.completedService.create({
      data: createCompletedServiceDto,
    })
  }

  async countServicesCompleted(id: number){
    return this.prisma.completedService.count({
      where: {
        userId: id,
      }
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
