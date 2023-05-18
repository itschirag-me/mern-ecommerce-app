import { NextFunction, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export function handleError(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || ReasonPhrases.INTERNAL_SERVER_ERROR;
  const data = error?.data || null;
  res.status(statusCode).json({
    status: false,
    message: message,
    result: data,
  });
}

export function handleNotFound(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = StatusCodes.NOT_FOUND;
  const message = ReasonPhrases.NOT_FOUND;
  res.status(statusCode).json({
    status: false,
    message: message,
    result: {
      url: req.url,
      errorMessage: "Method not found",
    },
  });
}
