import { NextFunction, Request, Response } from "express";
import * as userService from "../services/userService";

export default async function authentication( req: Request, res: Response, next: NextFunction){
const header = req.header('Authorization');
    if (!header) return res.sendStatus(401);
    const token = header.split("Bearer ")[1];

    const user = await userService.authenticate(token);
    if (user === null) return res.sendStatus(401);
    
    res.locals.user = user;
    next();
    
  }