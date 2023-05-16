import { GetAccountServiceByIdUser } from "../../account/services/get-account-by-id-user.service";
import { prismaClient } from "../../database/prismaClient";

export async function GetTransferByIdUserService(idUser: string) {
  const account = await GetAccountServiceByIdUser(idUser);

  if (!account) {
    return {
      sender: [],
      recipient: [],
      balance: null,
    };
  }

  const transfersSender = await prismaClient.transfer.findMany({
    where: { id_account_sender: account.id },
    include: {
      accountRecipient: {
        include: {
          user: { select: { name: true, cpf: true, email: true, id: true } },
        },
      },
    },
  });

  const transfersRecipient = await prismaClient.transfer.findMany({
    where: { id_account_recipient: account.id },
    include: {
      accountSender: {
        include: {
          user: { select: { name: true, cpf: true, email: true, id: true } },
        },
      },
    },
  });

  return {
    sender: transfersSender,
    recipient: transfersRecipient,
    balance: account.balance,
  };
}
