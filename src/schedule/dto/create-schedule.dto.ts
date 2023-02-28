import { Prisma } from "@prisma/client";

export class CreateScheduleDto implements Prisma.ScheduleCreateInput{
    observation: string;
    dateService: string | Date;
    time: string;
    userId: number;
    clientId: number;
}
