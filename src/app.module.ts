import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { ServicesModule } from './services/services.module';
import { ProfessionModule } from './profession/profession.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [UsersModule, ClientsModule, ServicesModule, ProfessionModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
