import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTablsUsersPokemonsSessionsAndUserPokemon1628199458266 implements MigrationInterface {
    name = 'CreateTablsUsersPokemonsSessionsAndUserPokemon1628199458266'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userPokemon" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "pokemonId" integer NOT NULL, CONSTRAINT "PK_b899066a30a20b171a07ca732c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokemons" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "number" character varying NOT NULL, "image" character varying NOT NULL, "weight" character varying NOT NULL, "height" character varying NOT NULL, "baseExp" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_a3172290413af616d9cfa1fdc9a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sessions" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "userPokemon" ADD CONSTRAINT "FK_ae60ec16d4f6c75d47bd69dd1b9" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "userPokemon" ADD CONSTRAINT "FK_3f76b5c14a699d17640a0478456" FOREIGN KEY ("pokemonId") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6"`);
        await queryRunner.query(`ALTER TABLE "userPokemon" DROP CONSTRAINT "FK_3f76b5c14a699d17640a0478456"`);
        await queryRunner.query(`ALTER TABLE "userPokemon" DROP CONSTRAINT "FK_ae60ec16d4f6c75d47bd69dd1b9"`);
        await queryRunner.query(`DROP TABLE "sessions"`);
        await queryRunner.query(`DROP TABLE "pokemons"`);
        await queryRunner.query(`DROP TABLE "userPokemon"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
