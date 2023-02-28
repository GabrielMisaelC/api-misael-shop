import { Prisma } from "@prisma/client";

export class CreateClientDto implements Prisma.ClientCreateInput{
    name: string;
    email: string;
    cpf: string;
    cellphone: string;
    redeSocial: string;
    birthday: string;
}
