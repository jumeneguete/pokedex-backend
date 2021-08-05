import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import userPokemon from "./userPokemon";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => userPokemon, userPokemon => userPokemon.user)
  userPokemons: userPokemon[];

}
