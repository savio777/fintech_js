import { GetMyBankService } from "../../bank/services/get-my-bank.service";
import { prismaClient } from "../../database/prismaClient";
import { GetUserByIdService } from "../../user/services/get-user-by-id.service";

export async function CreateAccountService(idUser: string) {
  const user = await GetUserByIdService(idUser, false);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const bank = await GetMyBankService();

  if (!bank) {
    throw new Error("Banco não encontrado");
  }

  const account = await prismaClient.account.create({
    data: {
      id_user: idUser,
      account_branch: Math.floor(Math.random() * 100) + 1,
      account_number: Math.floor(Math.random() * 1_000) + 1,
      balance: 1_000,
      id_bank: bank.id,
    },
  });

  return account;
}
