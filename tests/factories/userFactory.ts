import { getRepository } from "typeorm";
import Session from "../../src/entities/Session";

import User from "../../src/entities/User";

export async function createUser (email: string, password: string) {
  const user = getRepository(User).create({
    email,
    password
  });

  await getRepository(User).save(user);
  return user;
}

export async function createSession(userId: number) {
  const session = {
      userId,
      token: "fakeToken123456#%&&"
  };

 const newSession = getRepository(Session).create({
      userId,
      token: session.token
  });
  await getRepository(Session).save(newSession);

  return session;
}