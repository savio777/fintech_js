import { sha256 } from "js-sha256";
import jwt from "jsonwebtoken";

import { prismaClient } from "../../database/prismaClient";
import { ILoginUSerDto } from "../validators/login-user.dto";
import { GetAccountServiceByIdUser } from "../../account/services/get-account-by-id-user.service";

export async function LoginUserService(dto: ILoginUSerDto) {
  const { cpf, password } = dto;

  const cpfOnlyNumbers = cpf.replace(/\D/g, "");

  const user = await prismaClient.user.findFirst({
    where: { cpf: cpfOnlyNumbers },
  });

  if (!user) {
    throw new Error("Usuário não existe");
  }

  const hash = sha256(password);

  if (user.password !== hash) {
    throw new Error("Usuário ou senha estão incorretos");
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
    expiresIn: "8h",
  });

  const { password: _, ...userLogin } = user;

  const account = await GetAccountServiceByIdUser(userLogin.id, false);

  return {
    user: userLogin,
    token: token,
    account,
  };
}
