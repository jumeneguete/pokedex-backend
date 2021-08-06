import { Request, Response } from "express";
import * as pokemonService from "../services/pokemonService";

export async function getPokemons (req: Request, res: Response) {
    const pokemons = await pokemonService.getPokemons(res.locals.user.id);

    res.status(200).send(pokemons);
}

export async function addPokemon (req: Request, res: Response) {const pokemonId = Number(req.params.id);
      if(!pokemonId) return res.sendStatus(400);
  
      const result = await pokemonService.addPokemon(res.locals.user.id, pokemonId);
      if(result === false) return res.sendStatus(404);
  
      res.sendStatus(200);
}

  export async function removePokemon (req: Request, res: Response) {
      const pokemonId = Number(req.params.id);
      if(!pokemonId) return res.sendStatus(404);
  
      const result = await pokemonService.removePokemon(res.locals.user.id, pokemonId);
      if(result === false) return res.sendStatus(400);

  
      res.sendStatus(200);
  }