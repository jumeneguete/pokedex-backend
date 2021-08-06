import { getRepository } from "typeorm";
import Pokemon from "../../src/entities/Pokemon";
import Session from "../../src/entities/Session";

import User from "../../src/entities/User";
import userPokemon from "../../src/entities/userPokemon";

export async function clearDatabase () {
  await getRepository(Session).delete({});
  await getRepository(userPokemon).delete({});
  await getRepository(User).delete({});
  await getRepository(Pokemon).delete({});
}
