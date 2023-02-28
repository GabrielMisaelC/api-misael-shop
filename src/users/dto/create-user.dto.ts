import { Prisma, User } from '@prisma/client';
import { PartialType } from '@nestjs/mapped-types';


export class CreateUserDto implements Prisma.UserCreateInput {
    email: string;
    name: string;
    cpf: string;
    cellphone: string;
    birthday: string;
    password: string;
    professionId: number;
}

