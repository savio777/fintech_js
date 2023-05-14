import { NextFunction, Request, Response } from "express";

export default (
  error?: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error && error.statusCode) {
    res.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message?.replace(/Error: /,''),
      errors: error?.errors,
    });
  } else {
    console.log(error);
  }
  next();
};
