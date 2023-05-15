import { prismaClient } from "../../database/prismaClient";

export async function GetUserByIdService(id: string, getError = true) {
  const user = await prismaClient.user.findFirst({
    where: { id },
  });

  if (!user && getError) {
    throw new Error("Usuário não existe");
  } else if (!user) {
    return null;
  }

  const { password: _, ...userResult } = user;

  return userResult;
}
