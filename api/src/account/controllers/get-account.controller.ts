import { NextFunction, Request, Response } from "express";
import { GetAccountServiceByIdUser } from "../services/get-account-by-id-user.service";

export async function GetAccountController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.json(await GetAccountServiceByIdUser(req.user.id));
  } catch (error) {
    console.log({ error });
    const err = new BadRequestException(error);
    next(err);
  }
}
