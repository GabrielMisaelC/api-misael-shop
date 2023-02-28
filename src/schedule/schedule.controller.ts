import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { CreateScheduleServiceDto } from './dto/create-scheduleService.dto';
import { CreateCompletedServiceDto } from './dto/create-completedService.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.create(createScheduleDto);
  }

  @Post('/scheduleService')
  createScheduleService(@Body() createScheduleServiceDto: CreateScheduleServiceDto) {
    return this.scheduleService.createScheduleService(createScheduleServiceDto);
  }

  @Post('/completedService')
  createCompletedService(@Body() createCompletedService: CreateCompletedServiceDto) {
    return this.scheduleService.createCompletedService(createCompletedService);
  }

  @Get('/countServices/:id')
  countServicesCompleted(@Param('id') id: string){
    return this.scheduleService.countServicesCompleted(+id);
  }

  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleService.update(+id, updateScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(+id);
  }
}
