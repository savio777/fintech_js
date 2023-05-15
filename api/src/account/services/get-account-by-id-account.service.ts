import { prismaClient } from "../../database/prismaClient";

export async function GetAccountServiceByIdAccount(
  idAccount: string,
  getError = true
) {
  const account = await prismaClient.account.findFirst({
    where: { id: idAccount },
  });

  if (!account && getError) {
    throw new Error("Conta não encontrada");
  }

  return account;
}
