import api from "..";

export interface ITransfers {
  sender: ITransfer[];
  recipient: ITransfer[];
}

export interface ITransfer {
  id: string;
  through_transfer: string;
  id_account_sender: string;
  id_account_recipient: string;
  value: number;
  accountSender?: IAccount;
  accountRecipient?: IAccount;
}

export interface IAccount {
  id: string;
  account_branch: number;
  account_number: number;
  balance: number;
  id_bank: string;
  id_user: string;
  user: IUser;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
}

export default async function TransfersListRequest(): Promise<ITransfers> {
  const response = await api.get("/transfers");
  return response.data;
}
