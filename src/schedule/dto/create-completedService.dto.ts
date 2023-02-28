import { Prisma } from "@prisma/client";

export class CreateCompletedServiceDto implements Prisma.CompletedServiceCreateInput{
    scheduleId?: number;
    userId?: number;
    date?: string | Date;
    priceTotal: number;
    formOfPayment: string;
    observation: string;
}
