import { prismaClient } from "../../database/prismaClient";

export async function GetMyBankService() {
  const bank = await prismaClient.bank.findFirst({
    where: { name: "fin_bank" },
  });

  return bank;
}
