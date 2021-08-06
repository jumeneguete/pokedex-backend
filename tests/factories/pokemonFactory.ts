import { getRepository } from "typeorm";
import Pokemon from "../../src/entities/Pokemon";
import userPokemon from "../../src/entities/userPokemon";

interface pokemonSendingBody {
    name: string,
    number: string,
    image: string,
    weight: string,
    height: string,
    baseExp: string,
    description: string
}

export async function createPokemon (){
  const pokemonBody : pokemonSendingBody = getRepository(Pokemon).create({
    name: "teste1",
    number: "1",
    image: "https://...",
    weight: "4kg",
    height: "50cm",
    baseExp: "teste",
    description: "teste"
  });

  const pokemon = await getRepository(Pokemon).save(pokemonBody);
  return pokemon;
}

export async function createRelationUserPokemon (userId: number, pokemonId: number) {
    await getRepository(userPokemon).insert({ userId, pokemonId });
    return true;
}

export async function destroyRelationUserPokemon (userId: number, pokemonId: number) {
    await getRepository(userPokemon)
            .createQueryBuilder()
            .delete()
            .where({ userId, pokemonId })
            .execute();
    return true;
}

export async function getUserPokemon () {
    const result = await getRepository(userPokemon).find();
    return result;
}