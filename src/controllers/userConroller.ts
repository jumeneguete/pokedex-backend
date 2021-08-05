import { Request, Response } from "express";
import Joi from "joi";
import * as userService from "../services/userService";
import { signUpBobySchema } from "../schemas/signUpBobySchema";

interface signUpBoby {
  email: string,
  password: string,
  confirmPassword: string
}

export async function signUp (req: Request, res: Response) {
  try {
    const { email, password, confirmPassword } = req.body as signUpBoby;

    const validate = signUpBobySchema.validate(req.body)
    if(validate.error || password !== confirmPassword){
      return res.sendStatus(400);
    }

    const successSignUp = await userService.signUp(email, password);
    if(successSignUp === false) return res.sendStatus(409);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}