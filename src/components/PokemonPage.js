import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const pokeUrl = 'http://localhost:3001/pokemon'
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch ] = useState("")


  useEffect(() => 
    fetch(pokeUrl)
      .then(r => r.json())
      .then(pokemons => setPokemons(pokemons)),
  [])

  // console.log(pokemons)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemons={pokemons} setPokemons={setPokemons} />
      <br />
      <Search />
      <Search setPokemons={setPokemons} pokemons={pokemons} search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection search={search} setSearch={setSearch} pokemons={pokemons} />
    </Container>
  );
}

export default PokemonPage;
