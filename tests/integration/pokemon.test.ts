import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createUser, createSession } from "../factories/userFactory";
import { clearDatabase } from "../utils/database";

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

describe("POST /sign-up", () => {

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