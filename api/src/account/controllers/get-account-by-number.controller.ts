import { NextFunction, Request, Response } from "express";
import { GetAccountServiceByNumber } from "../services/get-account-by-number.service";
import { GetAccountByNumberDto } from "../validators/get-account-by-number.dto";

export async function GetAccountByNumberController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const dto = GetAccountByNumberDto.validateSync(req.params);

    return res.json(await GetAccountServiceByNumber(dto));
  } catch (error) {
    console.log({ error });
    const err = new BadRequestException(error);
    next(err);
  }
}
