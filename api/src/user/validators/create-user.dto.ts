import { InferType, object, string } from "yup";

export type IUSerCreateDto = InferType<typeof UserCreateDto>;

export const UserCreateDto = object({
  name: string().required("Nome é obrigatório"),
  email: string().email("E-mail invalido").required("E-mail é obrigatório"),
  cpf: string().required("CPF é obrigatório"),
  password: string().required("Senha é obrigatória"),
});
