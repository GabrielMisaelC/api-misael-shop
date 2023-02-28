import { Prisma } from "@prisma/client";

export class CreateProfessionDto implements Prisma.ProfessionCreateInput {
    name: string;
    status: boolean;
    user?: Prisma.UserCreateNestedManyWithoutProfessionInput;
}
