import { NextFunction, Request, Response } from "express";
import { LoginUserDto } from "../validators/login-user.dto";
import { LoginUserService } from "../services/login-ser.service";

export async function LoginUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const dto = LoginUserDto.validateSync(req.body);

    return res.json(await LoginUserService(dto));
  } catch (error) {
    const err = new BadRequestException(error);
    next(err);
  }
}
