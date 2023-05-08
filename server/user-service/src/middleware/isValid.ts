import { NextFunction, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import Joi from "joi";

export function isValid(validSchema: Joi.Schema) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const isValid = await validSchema.validateAsync(req.body);
      next();
    } catch (error: any) {
      error.statusCode = StatusCodes.BAD_REQUEST;
      error.data = error?.details;
      next(error);
    }
  };
}
