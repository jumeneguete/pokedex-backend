import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Pokemon from "./Pokemon";
import User from "./User";

@Entity("userPokemon")
export default class userPokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  pokemonId: string;

  @ManyToOne(() => User, user => user.userPokemons)
  user: User;

  @ManyToOne(() => Pokemon, pokemon => pokemon.userPokemons)
  pokemon: Pokemon;

}