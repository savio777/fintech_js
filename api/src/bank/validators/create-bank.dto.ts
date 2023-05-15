import { InferType, boolean, object, string } from "yup";

export type ICreateBankDto = InferType<typeof CreateBankDto>;

export const CreateBankDto = object({
  name: string().required("Nome do banco é obrigatório"),
  extern: boolean(),
});
