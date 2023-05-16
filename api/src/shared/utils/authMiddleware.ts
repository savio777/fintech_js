import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { GetUserByIdService } from "../../user/services/get-user-by-id.service";

type JwtPayload = {
  id: string;
};

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      const err = new UnauthorizedException("Não autorizado");
      next(err);
      return;
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      const err = new UnauthorizedException("Não autorizado");
      next(err);
      return;
    }

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload;

    const user = await GetUserByIdService(id, false);

    if (!user) {
      const err = new UnauthorizedException("Não autorizado");
      next(err);
      return;
    }

    req.user = user;

    next();
  } catch (error) {
    req.user = undefined;
    const err = new UnauthorizedException("Não autorizado");
    next(err);
  }
};
