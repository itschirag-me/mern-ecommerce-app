import { NextFunction, Request, Response } from "express";

export async function isAuth(req: Request, res: Response, next: NextFunction) {
    try {
        
    } catch (error) {
        next(error)
    }
}