import api from "..";
import { ISession } from "../../store/modules/Session/types";

export interface IBodyParamSignInRequest {
  cpf: string;
  password: string;
}

export default async function SignInRequest(
  data: IBodyParamSignInRequest
): Promise<ISession> {
  const response = await api.post("/login", data);
  return response.data;
}
