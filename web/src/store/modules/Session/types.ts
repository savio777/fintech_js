export interface ISession {
  user: IUser;
  token: string;
  account: IAccount | null;
}

export interface IAccount {
  id: string;
  account_branch: number;
  account_number: number;
  balance: number;
  id_bank: string;
  id_user: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
}
