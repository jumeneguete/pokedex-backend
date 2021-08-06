import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createUser, createSession } from "../factories/userFactory";
import { clearDatabase } from "../utils/database";
import { createPokemon, createRelationUserPokemon, destroyRelationUserPokemon, getUserPokemon } from "../factories/pokemonFactory";

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await clearDatabase();
});

afterAll(async () => {
    await getConnection().close();
});

const agent = supertest(app);

describe("GET /pokemons", () => {
    beforeEach(async () => {
        await createPokemon();
        await createPokemon();
        await createPokemon();
        await createPokemon();
    });

    it("should return status 200 and token when find pokemons", async () => {
        const user = await createUser("a@a.com", "123456");
        const session = await createSession(user.id);

        const response = await supertest(app).get("/pokemons").set("Authorization", `Bearer ${session.token}`);
               

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    image: expect.any(String),
                    weight: expect.any(String),
                    height: expect.any(String),
                    baseExp: expect.any(String),
                    description: expect.any(String),
                    inMyPokemons: expect.any(Boolean),
                })
            ])
        );
    });


    it("should return status 401 when missing header Authorization", async () => {
        const response = await supertest(app).get("/pokemons");

        expect(response.status).toBe(401);

    });

    it("should return status 401 when missing Bearer", async () => {
        const user = await createUser("a@a.com", "123456");
        const session = await createSession(user.id);

        const response = await supertest(app).get("/pokemons").set("Authorization", `${session.token}`);

        expect(response.status).toBe(401);
    });

    it("should return status 401 when missing token", async () => {
        const user = await createUser("a@a.com", "123456");

        const response = await supertest(app).get("/pokemons").set("Authorization", `Bearer`);

        expect(response.status).toBe(401);
    });

    it("should return status 401 for invalid token", async () => {
        const user = await createUser("a@a.com", "123456");

        const response = await supertest(app).get("/pokemons").set("Authorization", `Bearer invalidToken`);

        expect(response.status).toBe(401);
    });


});




describe("POST /my-pokemons/:id/add", () => {

    async function createUserAndParam ()  {
        const user = await createUser("a@a.com", "123456");
        const session = await createSession(user.id);
        const pokemon = await createPokemon(); 
        const param = pokemon.id;
        await createRelationUserPokemon(user.id, pokemon.id);

        return {param, session};
    };

    it("should return status 200  and add a row on userPokemon when receive a valid header and valid url param/pokemonId", async () => {
        const { param, session } = await createUserAndParam();
        const userPokemonAfterAdd = await getUserPokemon();

        const response = await supertest(app).post(`/my-pokemons/${param}/add`).set("Authorization", `Bearer ${session.token}`);

        expect(response.status).toBe(200);
        expect(userPokemonAfterAdd.length).toEqual(1);

    });


    it("should return status 401 when missing header Authorization", async () => {
        const { param } = await createUserAndParam();
        
        const response = await supertest(app).post(`/my-pokemons/${param}/add`);

        expect(response.status).toBe(401);

    });

    it("should return status 401 when missing Bearer", async () => {
        const { param, session } = await createUserAndParam();

        const response = await supertest(app).post(`/my-pokemons/${param}/add`).set("Authorization", `${session.token}`);

        expect(response.status).toBe(401);
    });

    it("should return status 401 when missing token", async () => {
        const { param } = await createUserAndParam();

        const response = await supertest(app).post(`/my-pokemons/${param}/add`).set("Authorization", `Bearer`);

        expect(response.status).toBe(401);
    });

    it("should return status 401 for invalid token", async () => {
        const { param } = await createUserAndParam();

        const response = await supertest(app).post(`/my-pokemons/${param}/add`).set("Authorization", `Bearer invalidToken`);

        expect(response.status).toBe(401);
    });


});






describe("POST /my-pokemons/:id/remove", () => {

    async function createUserAndParam ()  {
        const user = await createUser("a@a.com", "123456");
        const session = await createSession(user.id);
        const pokemon = await createPokemon(); 
        const param = pokemon.id;
        await createRelationUserPokemon(user.id, pokemon.id);

        return {param, session, user};
    };

    it("should return status 200  and remove a row on userPokemon when receive a valid header and valid url param/pokemonId", async () => {
        const { param, session, user } = await createUserAndParam();
        await createUserAndParam();
        await destroyRelationUserPokemon(user.id, param);
        const userPokemonAfetrRemove = await getUserPokemon();

        const response = await supertest(app).post(`/my-pokemons/${param}/remove`).set("Authorization", `Bearer ${session.token}`);

        expect(response.status).toBe(200);
        expect(userPokemonAfetrRemove.length).toEqual(1);

    });


    it("should return status 401 when missing header Authorization", async () => {
        const { param, user } = await createUserAndParam();
        await destroyRelationUserPokemon(user.id, param);
        
        const response = await supertest(app).post(`/my-pokemons/${param}/remove`);

        expect(response.status).toBe(401);

    });

    it("should return status 401 when missing Bearer", async () => {
        const { param, session, user } = await createUserAndParam();
        await destroyRelationUserPokemon(user.id, param);

        const response = await supertest(app).post(`/my-pokemons/${param}/remove`).set("Authorization", `${session.token}`);

        expect(response.status).toBe(401);
    });

    it("should return status 401 when missing token", async () => {
        const { param, user } = await createUserAndParam();
        await destroyRelationUserPokemon(user.id, param);

        const response = await supertest(app).post(`/my-pokemons/${param}/remove`).set("Authorization", `Bearer`);

        expect(response.status).toBe(401);
    });

    it("should return status 401 for invalid token", async () => {
        const { param, user } = await createUserAndParam();
        await destroyRelationUserPokemon(user.id, param);

        const response = await supertest(app).post(`/my-pokemons/${param}/remove`).set("Authorization", `Bearer invalidToken`);

        expect(response.status).toBe(401);
    });


});