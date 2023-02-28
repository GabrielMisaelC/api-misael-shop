import { Prisma } from "@prisma/client";

export class CreateScheduleServiceDto{
    scheduleId:  number;
    serviceId: number;
}
