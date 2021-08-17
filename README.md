<h1 align="center"><img width="70px" src="/assets/charmander.gif" /> PokéDex</h1>

Pokedex is a web application designed to catalogue and provide information regarding the various species of Pokémon!<br>
Also, you can make them your favorites!

<p align="center"><img width="400px" src="/assets/pokedex.gif" /></p>

You can find this front-end application at https://github.com/jumeneguete/pokedex (forked) <br>
Also, try it out now at https://pokedex-blue-three.vercel.app


### 🔹🔹About

This is the API that works with an Pokedex web application. Below are the implemented features:

- SignUp ***(/sign-up)***;
- SignIn ***(/sign-in)***;

  Authenticated Routes:
- Get all pokemons ***(/pokemons)***;
- Populate database with pokemons using <a href="https://pokeapi.co/" target="_blank">PokeAPI</a> ***(/insert-pokemons)***; 
- Add a pokemon to favorites ***(/my-pokemons/:id/add)***;
- Remove a pokemon from favorites ***(/my-pokemons/:id/remove)***


### 🔹🔹Technologies
- NodeJS
- Express
- Cors
- Typescript
- TypeORM
- Migrations
- Middleware
- Axios
- PostgreSQL
- Jest
- Supertest
- <a href="https://www.npmjs.com/package/bcrypt" target="_blank">Bcrypt</a>
- <a href="https://www.npmjs.com/package/uuid" target="_blank">uuid</a>
- <a href="https://www.npmjs.com/package/joi" target="_blank">Joi</a>
- Front-end using ReactJS at https://github.com/jumeneguete/pokedex 

### 🔹🔹Disclaimer

On this project I was training TypeORM, usage of migrations, and usage of middlewares on authericated routes. <br>
It was challenging, but result is very cool. <br>


### 🔹🔹How to run

1. Clone this repository
2. Ypu can clone the front-end repository an follow its instruction for installation at https://github.com/jumeneguete/pokedex 
3. Install dependencies
```bash
npm i
```
4. Ceate an .env file based on env.example
5. The database required to run the application can be found at assets/dump.sql, but you can use migration's file;
6. Run server
```bash
npm run dev
```
7. Congrats! App is runnig and you can test it using some API Client or together with the <a href="https://github.com/jumeneguete/mywallet-front-end" target="_blank">front-end application</a>.

<br>

➔  You can also run integration tests following the additional steps:

1. Ceate an .env.test file based on env.example and set a cloned database to run tests;
2. Run server
```bash
npm run test
```
3. That's it! :D
