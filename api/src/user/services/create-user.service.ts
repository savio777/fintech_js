import { sha256 } from "js-sha256";

import { IUSerCreateDto } from "../validators/create-user.dto";
import { prismaClient } from "../../database/prismaClient";
import { CreateAccountService } from "../../account/services/create-account.service";

export async function CreateUserService(dto: IUSerCreateDto) {
  const { cpf, email, name, password } = dto;

  const userExist = await prismaClient.user.findFirst({
    where: { cpf: cpf.replace(/\D/g, "") },
  });

  if (userExist) {
    throw new Error("Usuário já existe");
  }

  const hash = sha256(password);

  const user = await prismaClient.user.create({
    data: {
      cpf: cpf.replace(/\D/g, ""),
      email,
      name,
      password: hash,
    },
  });

  const account = await CreateAccountService(user.id);

  const { password: _, ...userCreated } = user;

  return { user: userCreated, account };
}
