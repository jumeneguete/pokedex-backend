--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: pokemons; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pokemons (
    id integer NOT NULL,
    name character varying NOT NULL,
    number character varying NOT NULL,
    image character varying NOT NULL,
    weight character varying NOT NULL,
    height character varying NOT NULL,
    "baseExp" character varying NOT NULL,
    description character varying NOT NULL
);


--
-- Name: pokemons_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.pokemons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pokemons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.pokemons_id_seq OWNED BY public.pokemons.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token character varying NOT NULL,
    "userId" integer NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: userPokemon; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."userPokemon" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "pokemonId" integer NOT NULL
);


--
-- Name: userPokemon_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."userPokemon_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: userPokemon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."userPokemon_id_seq" OWNED BY public."userPokemon".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: pokemons id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemons ALTER COLUMN id SET DEFAULT nextval('public.pokemons_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: userPokemon id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userPokemon" ALTER COLUMN id SET DEFAULT nextval('public."userPokemon_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.migrations VALUES (1, 1628199458266, 'CreateTablsUsersPokemonsSessionsAndUserPokemon1628199458266');


--
-- Data for Name: pokemons; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.pokemons VALUES (1, 'bulbasaur', '1', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', '69', '7', '64', 'Loves to eat');
INSERT INTO public.pokemons VALUES (2, 'ivysaur', '2', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', '130', '10', '142', 'Proud of its power');
INSERT INTO public.pokemons VALUES (3, 'venusaur', '3', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', '1000', '20', '236', 'Sturdy body');
INSERT INTO public.pokemons VALUES (4, 'charmander', '4', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', '85', '6', '62', 'Highly curious');
INSERT INTO public.pokemons VALUES (5, 'charmeleon', '5', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', '190', '11', '142', 'Strong willed');
INSERT INTO public.pokemons VALUES (6, 'charizard', '6', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', '905', '17', '240', 'Likes to run');
INSERT INTO public.pokemons VALUES (7, 'squirtle', '7', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', '90', '5', '63', 'Takes plenty of siestas');
INSERT INTO public.pokemons VALUES (8, 'wartortle', '8', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', '225', '10', '142', 'Likes to thrash about');
INSERT INTO public.pokemons VALUES (9, 'blastoise', '9', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', '855', '16', '239', 'Capable of taking hits');
INSERT INTO public.pokemons VALUES (10, 'caterpie', '10', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', '29', '3', '39', 'Mischievous');
INSERT INTO public.pokemons VALUES (11, 'metapod', '11', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png', '99', '7', '72', 'Somewhat vain');
INSERT INTO public.pokemons VALUES (12, 'butterfree', '12', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png', '320', '11', '178', 'Alert to sounds');
INSERT INTO public.pokemons VALUES (13, 'weedle', '13', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png', '32', '3', '39', 'Nods off a lot');
INSERT INTO public.pokemons VALUES (14, 'kakuna', '14', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png', '100', '6', '72', 'A little quick tempered');
INSERT INTO public.pokemons VALUES (15, 'beedrill', '15', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png', '295', '10', '178', 'Highly persistent');
INSERT INTO public.pokemons VALUES (16, 'pidgey', '16', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png', '18', '3', '50', 'Thoroughly cunning');
INSERT INTO public.pokemons VALUES (17, 'pidgeotto', '17', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png', '300', '11', '122', 'Strongly defiant');
INSERT INTO public.pokemons VALUES (18, 'pidgeot', '18', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png', '395', '15', '216', 'Impetuous and silly');
INSERT INTO public.pokemons VALUES (19, 'rattata', '19', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png', '35', '3', '51', 'Scatters things often');
INSERT INTO public.pokemons VALUES (20, 'raticate', '20', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png', '185', '7', '145', 'Likes to fight');
INSERT INTO public.pokemons VALUES (21, 'spearow', '21', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png', '20', '3', '52', 'Good endurance');
INSERT INTO public.pokemons VALUES (22, 'fearow', '22', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png', '380', '12', '155', 'Often lost in thought');
INSERT INTO public.pokemons VALUES (23, 'ekans', '23', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png', '69', '20', '58', 'Hates to lose');
INSERT INTO public.pokemons VALUES (24, 'arbok', '24', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png', '650', '35', '157', 'Somewhat of a clown');
INSERT INTO public.pokemons VALUES (25, 'pikachu', '25', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', '60', '4', '112', 'Likes to relax');
INSERT INTO public.pokemons VALUES (26, 'raichu', '26', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png', '300', '8', '218', 'Quick tempered');
INSERT INTO public.pokemons VALUES (27, 'sandshrew', '27', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png', '120', '6', '60', 'Good perseverance');
INSERT INTO public.pokemons VALUES (28, 'sandslash', '28', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png', '295', '10', '158', 'Very finicky');
INSERT INTO public.pokemons VALUES (29, 'nidoran-f', '29', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png', '70', '4', '55', 'Somewhat stubborn');
INSERT INTO public.pokemons VALUES (30, 'nidorina', '30', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png', '200', '8', '128', 'Quick to flee');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, '3b8e5802-6803-4a7a-8a76-48485a173594', 4);
INSERT INTO public.sessions VALUES (2, 'aa633341-c576-4b7b-9e8d-0c3e9f980bca', 4);
INSERT INTO public.sessions VALUES (3, '5a17109f-493b-4070-8b4f-0e4e2a51e7c8', 4);
INSERT INTO public.sessions VALUES (4, '7d3862e5-c170-40dd-86ff-2971e00259d5', 4);
INSERT INTO public.sessions VALUES (5, 'c8bf1468-acf3-4e1b-b22f-4e9f27c6e437', 4);
INSERT INTO public.sessions VALUES (6, 'e7aea17d-5ad3-4a9d-be85-8ddf6ecd80dd', 4);
INSERT INTO public.sessions VALUES (7, '6afbe449-41a7-4611-a777-b79afbc958b8', 4);


--
-- Data for Name: userPokemon; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (4, 'a@a.com', '$2b$10$qX3wrLlLYXX.Ggs3kam.4.MEKGDTSrHbg3XGgGsGNl4tkVv4DCdxK');
INSERT INTO public.users VALUES (5, 'c@c.com', '$2b$10$S7Iv1UznFjNScQWSwK2U.uip//UIaKwIa/Hh.inWKckk2SADXlR22');


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, true);


--
-- Name: pokemons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.pokemons_id_seq', 30, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 7, true);


--
-- Name: userPokemon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."userPokemon_id_seq"', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: sessions PK_3238ef96f18b355b671619111bc; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY (id);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: pokemons PK_a3172290413af616d9cfa1fdc9a; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemons
    ADD CONSTRAINT "PK_a3172290413af616d9cfa1fdc9a" PRIMARY KEY (id);


--
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- Name: userPokemon PK_b899066a30a20b171a07ca732c7; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userPokemon"
    ADD CONSTRAINT "PK_b899066a30a20b171a07ca732c7" PRIMARY KEY (id);


--
-- Name: userPokemon FK_3f76b5c14a699d17640a0478456; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userPokemon"
    ADD CONSTRAINT "FK_3f76b5c14a699d17640a0478456" FOREIGN KEY ("pokemonId") REFERENCES public.pokemons(id);


--
-- Name: sessions FK_57de40bc620f456c7311aa3a1e6; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: userPokemon FK_ae60ec16d4f6c75d47bd69dd1b9; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userPokemon"
    ADD CONSTRAINT "FK_ae60ec16d4f6c75d47bd69dd1b9" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

