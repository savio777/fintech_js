import { GetAccountServiceByIdUser } from "../../account/services/get-account-by-id-user.service";
import { prismaClient } from "../../database/prismaClient";

export async function GetTransferByIdUserService(idUser: string) {
  const account = await GetAccountServiceByIdUser(idUser);

  if (!account) {
    return {
      sender: [],
      recipient: [],
    };
  }

  const transfersSender = await prismaClient.transfer.findMany({
    where: { id_account_sender: account.id },
  });

  const transfersRecipient = await prismaClient.transfer.findMany({
    where: { id_account_recipient: account.id },
  });

  return {
    sender: transfersSender,
    recipient: transfersRecipient,
  };
}
