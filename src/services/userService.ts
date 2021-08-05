import bcrypt from "bcrypt";
import { getRepository } from "typeorm";

import User from "../entities/User";

export async function signUp (email: string, password: string) {
  const existingUser = await getRepository(User).find({ where: {email} });
  if (existingUser.length > 0) return false; 

  const hashedPassword = bcrypt.hashSync(password, 10);

  await getRepository(User).insert({ email, password: hashedPassword });
  return true;

}
