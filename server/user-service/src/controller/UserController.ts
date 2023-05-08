import { NextFunction, Request, Response } from "express";
import { CreateUser, FetchUserByEmail, FetchUserById, FetchUsers } from "../services/UserService";
import FilterType, { FilterTypeQuery } from "../types/filter";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { page, limit, field, sortOrder }: FilterTypeQuery = req.query;

    const filters: FilterType = {
      pageNumber: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 10,
      field: field || "createdAt",
      sortOrder: sortOrder === "desc" ? "desc" : "asc",
    };

    const results = await FetchUsers(filters);
    res.status(StatusCodes.ACCEPTED).json({
      status: true,
      message: ReasonPhrases.ACCEPTED,
      results: {
        ...filters,
        ...results,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function postUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const payload = req.body;
    const result = await CreateUser(payload);
    res.status(StatusCodes.CREATED).json({
      status: true,
      message: ReasonPhrases.CREATED,
      result,
    });
  } catch (error) {
    next(error);
  }
}

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: string = req.params.id;
    const result = await FetchUserById(id);
    res.status(StatusCodes.ACCEPTED).json({
      status: true,
      message: ReasonPhrases.ACCEPTED,
      result,
    });
  } catch (error) {
    next(error);
  }
}

export async function getUserByEmail(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const email: string = req.params.id;
    const result = await FetchUserByEmail(email);
    res.status(StatusCodes.ACCEPTED).json({
      status: true,
      message: ReasonPhrases.ACCEPTED,
      result,
    });
  } catch (error) {
    next(error);
  }
}
