import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import userPokemon from "./userPokemon";

@Entity("pokemons")
export default class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    number: string;

    @Column()
    image: string;

    @Column()
    weight: string;

    @Column()
    height: string;

    @Column()
    baseExp: string;

    @Column()
    description: string;

    @OneToMany(() => userPokemon, userPokemon => userPokemon.pokemon)
    userPokemons: userPokemon[];
}
