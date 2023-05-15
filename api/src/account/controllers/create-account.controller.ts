import { NextFunction, Request, Response } from "express";
import { CreateAccountService } from "../services/create-account.service";

export async function CreateAccountController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.json(await CreateAccountService(req.user.id));
  } catch (error) {
    console.log({error})
    const err = new BadRequestException(error);
    next(err);
  }
}
