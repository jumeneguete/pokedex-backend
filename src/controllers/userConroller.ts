import { Request, Response } from "express";
import Joi from "joi";
import * as userService from "../services/userService";
import { signUpBodySchema } from "../schemas/signUpBodySchema";
import { signInBobySchema } from "../schemas/signInBodySchema";

interface signUpBoby {
  email: string,
  password: string,
  confirmPassword: string
}

export async function signUp (req: Request, res: Response) {
    const { email, password, confirmPassword } = req.body as signUpBoby;

    const validate = signUpBodySchema.validate(req.body)
    if(validate.error || password !== confirmPassword){
      return res.sendStatus(400);
    }

    const successSignUp = await userService.signUp(email, password);
    if(successSignUp === false) return res.sendStatus(409);
    res.sendStatus(201);
}

export async function signIn (req: Request, res: Response) {
    const { email, password } = req.body as {email: string, password: string};

    const validate = signInBobySchema.validate(req.body)
    if(validate.error) return res.sendStatus(400);

    const validUser = await userService.validateUser(email, password);
    if(!validUser) return res.sendStatus(401);

    const token = await userService.signIn(validUser);

    res.status(200).send({ token });
}