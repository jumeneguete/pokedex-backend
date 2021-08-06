import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid";
import { getRepository } from "typeorm";

import User from "../entities/User";
import Session from "../entities/Session";
import userPokemon from "../entities/userPokemon";

export async function signUp (email: string, password: string) {
  const existingUser = await getRepository(User).find({ where: {email} });
  if (existingUser.length > 0) return false; 

  const hashedPassword = bcrypt.hashSync(password, 10);

  await getRepository(User).insert({ email, password: hashedPassword });
  return true;

}

export async function signIn (email: string, password: string) {
  const user = await getRepository(User).findOne({ where: {email} });
  if (!user) return false; 

  if(bcrypt.compareSync(password, user.password)){
    const token = uuid();
    await getRepository(Session).insert({ userId: user.id, token });
    return token;

  }else{
    return false;
  }

}
