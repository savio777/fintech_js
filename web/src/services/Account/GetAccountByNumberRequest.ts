import api from "..";

export interface IAccountResponse {
  id: string;
  account_branch: number;
  account_number: number;
  balance: number;
  id_bank: string;
  id_user: string;
  user: User;
}

interface User {
  id: string;
  cpf: string;
  email: string;
  name: string;
}

export default async function GetAccountByNumberRequest(
  account_branch: string,
  account_number: string
): Promise<IAccountResponse> {
  const response = await api.get(
    `/accounts/${account_branch}/${account_number}`
  );
  return response.data;
}
