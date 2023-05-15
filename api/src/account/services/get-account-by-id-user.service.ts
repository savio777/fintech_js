import { prismaClient } from "../../database/prismaClient";
import { GetUserByIdService } from "../../user/services/get-user-by-id.service";

export async function GetAccountServiceByIdUser(idUser: string, getError = true) {
  const user = await GetUserByIdService(idUser, false);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const account = await prismaClient.account.findFirst({
    where: { id_user: idUser },
  });

  if (!account && getError) {
    throw new Error("Conta não encontrada");
  }

  return account;
}
