import { mixed, object, string, InferType, number } from "yup";

export type ICreateTransferDto = InferType<typeof CreateTransferDto>;

export const CreateTransferDto = object({
  through_transfer: mixed()
    .oneOf(["PIX", "TED", "DOCS"])
    .required("Obrigatório declarar o método de transferência"),
  id_account_sender: string().required(
    "Id conta do usuário que irá realizar a transferência"
  ),
  id_account_recipient: string().required(
    "Id conta do usuário que irá receber a transferência"
  ),
  value: number().required("Valor é obrigatório"),
});
