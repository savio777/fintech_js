import { sha256 } from "js-sha256";
import jwt from "jsonwebtoken";

import { prismaClient } from "../../database/prismaClient";
import { ILoginUSerDto } from "../validators/login-user.dto";

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

  console.log(`${user.password} === ${hash}`);

  if (user.password !== hash) {
    throw new Error("Usuário ou senha estão incorretos");
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
    expiresIn: "8h",
  });

  const { password: _, ...userLogin } = user;

  return {
    user: userLogin,
    token: token,
  };
}
