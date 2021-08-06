import { Request, Response } from "express";
import * as userService from "../services/userService";
import * as pokemonService from "../services/pokemonService";

export async function getPokemons (req: Request, res: Response) {
  try {
    const header = req.header('Authorization');
    if (!header) return res.sendStatus(401);
    const token = header.split("Bearer ")[1];

    const user = await userService.authenticate(token);
    if (user === null) return res.sendStatus(401);

    const pokemons = await pokemonService.getPokemons(user.id);

    res.status(200).send(pokemons);

  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}