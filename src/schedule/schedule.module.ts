import { PrismaService } from 'src/prisma.service';
import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, PrismaService]
})
export class ScheduleModule {}
