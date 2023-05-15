import { InferType, object, string } from "yup";

export type ISignUpDto = InferType<typeof SignUpDto>;

export const SignUpDto = object({
  name: string().required("Nome é obrigatório"),
  email: string().email("E-mail invalido").required("E-mail é obrigatório"),
  cpf: string().required("CPF é obrigatório"),
  password: string().required("Senha é obrigatória"),
});
