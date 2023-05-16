import { InferType, number, object } from "yup";

export type IGetAccountByNumberDto = InferType<typeof GetAccountByNumberDto>;

export const GetAccountByNumberDto = object({
  account_branch: number().required("Agência da conta é obrigatória"),
  account_number: number().required("Número da conta é obrigatória"),
});
