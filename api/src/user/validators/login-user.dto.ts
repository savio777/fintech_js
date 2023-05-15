import { InferType, object, string } from "yup";

export type ILoginUSerDto = InferType<typeof LoginUserDto>;

export const LoginUserDto = object({
  cpf: string().required("CPF é obrigatório"),
  password: string().required("Senha é obrigatória"),
});
