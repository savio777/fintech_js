import { GetAccountServiceByIdAccount } from "../../account/services/get-account-by-id-account.service";
import { prismaClient } from "../../database/prismaClient";
import { ICreateTransferDto } from "../validators/create-transfer.dto";

export async function CreateTransferService(dto: ICreateTransferDto) {
  const { id_account_recipient, id_account_sender, through_transfer, value } =
    dto;

  const accountRecipient = await GetAccountServiceByIdAccount(
    id_account_recipient,
    false
  );

  const accountSender = await GetAccountServiceByIdAccount(
    id_account_sender,
    false
  );

  if (!accountRecipient || !accountSender) {
    throw new Error("Usuário não existe");
  }

  const transfer = prismaClient.transfer.create({
    data: {
      id_account_recipient,
      id_account_sender,
      through_transfer: String(through_transfer),
      value,
    },
  });

  const accountRecipientChangeValue = prismaClient.account.update({
    where: { id: accountRecipient.id },
    data: { balance: accountRecipient.balance + value },
  });

  const accountSenderChangeValue = prismaClient.account.update({
    where: { id: accountSender.id },
    data: { balance: accountSender.balance - value },
  });

  const transaction = await prismaClient.$transaction([
    transfer,
    accountRecipientChangeValue,
    accountSenderChangeValue,
  ]);

  return transaction;
}
