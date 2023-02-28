import { Prisma } from "@prisma/client";

export class CreateServiceDto implements Prisma.ServiceCreateInput {
    name: string;
    status: boolean;
    valor: number;
}


