import "./setup";

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as userController from "./controllers/userConroller";
import * as pokemonController from "./controllers/pokemonController";
import authentication from "./middlewares/authenticationMiddleware";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", userController.signUp);
app.post("/sign-in", userController.signIn);

app.use('/my-pokemons', authentication);
app.use('/pokemons', authentication)

app.get("/pokemons", pokemonController.getPokemons);
app.post("/my-pokemons/:id/add", pokemonController.addPokemon);
app.post("/my-pokemons/:id/remove", pokemonController.removePokemon);

app.use((err: any , req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  res.sendStatus(500);
});


export async function init () {
  await connectDatabase();
}

export default app;
