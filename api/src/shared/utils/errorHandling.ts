import { NextFunction, Request, Response } from "express";

export default (
  error?: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error && error.statusCode) {
    res.status(error.statusCode).json({
      statusCode: error.statusCode || 500,
      message: error.message
        ? error.message?.replace(/Error: /, "")
        : "Internal Server Error",
      errors: error?.errors?.length > 0 ? error?.errors : undefined,
    });
  } else {
    console.log(error);
  }
  next();
};
