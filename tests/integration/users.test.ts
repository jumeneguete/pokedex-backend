import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createUser } from "../factories/userFactory";
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

  function generateBody (){
    return {
      email: "a@a.com",
      password: "123456",
      confirmPassword: "123456"
    }

  }

  it("should return status 201 when receive valid body", async () => {
    const body = generateBody();

    const response = await agent.post("/sign-up").send(body);

    expect(response.status).toBe(201);
  });

  it("should return status 400 when receive invalid body", async () => {
    const body = generateBody();
    body.password = "";

    const response = await agent.post("/sign-up").send(body);

    expect(response.status).toBe(400);
  });

  it("should return status 400 when receive 'password' and 'confirPassrd' are not identicals", async () => {
    const body = generateBody();
    body.password = "wrong_password"

    const response = await agent.post("/sign-up").send(body);

    expect(response.status).toBe(400);
  });

  it("should return status 409 when email already exists in the database", async () => {
    const body = generateBody();

    await createUser(body.email, body.password);

    const response = await agent.post("/sign-up").send(body);

    expect(response.status).toBe(409);
  });
});




describe("POST /sign-in", () => {

  function generateBody (){
    return {
      email: "a@a.com",
      password: "123456"
    }

  }

  // it("should return status 200 for a valid body of an existing user", async () => {
  //   const body = generateBody();
  //   const user = await createUser(body.email, body.password);

  //   const response = await agent.post("/sign-in").send({ email: user.email, password: user.password});
   
  //   expect(response.status).toBe(200);
  // });

  it("should return status 400 when receive an invalid body", async () => {
    const body = generateBody();
    await createUser(body.email, body.password);
    body.email = "not_email";

    const response = await agent.post("/sign-in").send(body);

    expect(response.status).toBe(400);
  });

  it("should return status 401 when user does not exist", async () => {
    const body = generateBody();

    const response = await agent.post("/sign-in").send(body);

    expect(response.status).toBe(401);
  });

});