import { getRepository } from "typeorm";
import Pokemon from "../entities/Pokemon";
import userPokemon from "../entities/userPokemon";

interface newPokemons {
    id: number,
    name: string,
    number: string,
    image: string,
    weight: string,
    height: string,
    baseExp: string,
    description: string,
    inMyPokemons: boolean
}

export async function getPokemons(userId: number) {
    const pokemons = await getRepository(Pokemon).find();

    const newPokemons: newPokemons[] = pokemons.map(p => {
        return { ...p, inMyPokemons: false }
    });

    return newPokemonsWithMyPokemons(userId, newPokemons);

}

export async function addPokemon(userId: number, pokemonId: number) {
    const findPokemon = await getRepository(Pokemon).findOne({ where: { id: pokemonId } });
    if (!findPokemon) return false;

    // const myPokemons = await getPokemons(userId);
    // const alreadyAdded = myPokemons.filter(p => p.inMyPokemons === true && p.id === pokemonId);
    // if(alreadyAdded.length > 0) return null; //ja esta adicionado aos favoritos

    await getRepository(userPokemon).insert({ userId, pokemonId });

    return true;
}

export async function removePokemon(userId: number, pokemonId: number) {
    const findPokemon = await getRepository(Pokemon).findOne({ where: { id: pokemonId } });
    if (!findPokemon) return false;

    // const myPokemons = await getPokemons(userId);
    // const alreadyAdded = myPokemons.filter(p => p.inMyPokemons === true && p.id === pokemonId);
    // if(alreadyAdded.length === 0) return false; //nao esta adicionado aos favoritos

    await getRepository(userPokemon)
            .createQueryBuilder()
            .delete()
            .where({ userId, pokemonId })
            .execute();

    return true;
}

async function newPokemonsWithMyPokemons(userId: number, newPokemons: newPokemons[]) {
    const inMyPokemons = await getRepository(userPokemon).find({ where: { userId } });
    const pokeIds = inMyPokemons.map(poke => poke.pokemonId);

    for (let i = 0; i < newPokemons.length; i++) {
        const myPokemonId = newPokemons[i].id;
        for (let j = 0; j < pokeIds.length; j++) {
            if (myPokemonId === Number(pokeIds[j])) {
                newPokemons[i].inMyPokemons = true;
            }
        }
    }

    return newPokemons;
}