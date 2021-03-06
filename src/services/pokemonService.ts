import axios from "axios";
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

    await getRepository(userPokemon).insert({ userId, pokemonId });

    return true;
}

export async function removePokemon(userId: number, pokemonId: number) {
    const findPokemon = await getRepository(Pokemon).findOne({ where: { id: pokemonId } });
    if (!findPokemon) return false;

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

export async function insertAllPokemons() {
    for(let i = 1; i < 100; i ++){
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const newPokemon = {
            name: result.data.name,
            number: result.data.id,
            image: result.data.sprites.front_default,
            weight: result.data.weight,
            height: result.data.height,
            baseExp: result.data.base_experience,
            description: ""
        }
        const characteristic = await axios.get(`https://pokeapi.co/api/v2/characteristic/${i}`);
        for (let j = 1; j < 100; j++) {
                newPokemon.description = characteristic.data.descriptions[2].description;
        }

        console.log(newPokemon)
        await getRepository(Pokemon).insert(newPokemon);
    }
    return true;
}


