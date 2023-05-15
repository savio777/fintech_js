import { NextFunction, Request, Response } from "express";

import { CreateTransferDto } from "../validators/create-transfer.dto";
import { CreateTransferService } from "../services/create-transfer.service";

export async function CreateTransferController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const dto = CreateTransferDto.validateSync(req.body);

    return res.json(await CreateTransferService(dto));
  } catch (error) {
    const err = new BadRequestException(error);
    next(err);
  }
}
