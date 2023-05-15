import api from "..";
import { ISignUpDto } from "../../pages/SignUp/signUp.dto";

interface Response {
  user: UserCreated;
  account: Account;
}

interface Account {
  id: string;
  account_branch: number;
  account_number: number;
  balance: number;
  id_bank: string;
  id_user: string;
}

interface UserCreated {
  id: string;
  name: string;
  email: string;
  cpf: string;
}

export default async function SignOutRequest(
  data: ISignUpDto
): Promise<Response> {
  const response = await api.post("/users", data);
  return response?.data;
}
