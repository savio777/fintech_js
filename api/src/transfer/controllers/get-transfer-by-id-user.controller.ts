import { NextFunction, Request, Response } from "express";
import { GetTransferByIdUserService } from "../services/get-transfer-by-id-user.service";

export async function GetTransferByIdUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.json(await GetTransferByIdUserService(req.user.id));
  } catch (error) {
    console.log({ error });
    const err = new BadRequestException(error);
    next(err);
  }
}
