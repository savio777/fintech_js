import { prismaClient } from "../../database/prismaClient";
import { ICreateBankDto } from "../validators/create-bank.dto";

export async function CreateBankService(dto: ICreateBankDto) {
  const { name, extern } = dto;

  const bank = await prismaClient.bank.create({
    data: {
      name,
      extern: extern ?? true,
    },
  });

  return bank;
}
