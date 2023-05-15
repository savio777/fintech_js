import { NextFunction, Request, Response } from "express";
import { GetAccountService } from "../services/get-account.service";

export async function GetAccountController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.json(await GetAccountService(req.user.id));
  } catch (error) {
    console.log({error})
    const err = new BadRequestException(error);
    next(err);
  }
}
