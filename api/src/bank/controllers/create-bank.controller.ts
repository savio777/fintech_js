import { NextFunction, Request, Response } from "express";

import { CreateBankDto } from "../validators/create-bank.dto";
import { CreateBankService } from "../services/create-bank.service";

export async function CreateBankController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const dto = CreateBankDto.validateSync(req.body);

    return res.json(await CreateBankService(dto));
  } catch (error) {
    const err = new BadRequestException(error);
    next(err);
  }
}
