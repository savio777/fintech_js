import { NextFunction, Request, Response } from "express";

import { UserCreateDto } from "../validators/create-user.dto";
import { CreateUserService } from "../services/create-user.service";

export async function CreateUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //throw new BadRequestException("teste err");

  try {
    const dto = UserCreateDto.validateSync(req.body);

    return res.json(await CreateUserService(dto));
  } catch (error) {
    const err = new BadRequestException(error);
    next(err);
  }
}
