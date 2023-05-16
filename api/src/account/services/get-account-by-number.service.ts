import { prismaClient } from "../../database/prismaClient";
import { IGetAccountByNumberDto } from "../validators/get-account-by-number.dto";

export async function GetAccountServiceByNumber(dto: IGetAccountByNumberDto) {
  const { account_branch, account_number } = dto;

  const account = await prismaClient.account.findFirst({
    where: { account_branch, account_number },
    include: {
      user: { select: { id: true, cpf: true, email: true, name: true } },
    },
  });

  if (!account) {
    throw new Error("Conta não encontrada");
  }

  return account;
}
