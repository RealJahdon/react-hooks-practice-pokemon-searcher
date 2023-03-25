import React from "react";

function Search( {pokemons, setPokemons, search, setSearch } ) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => setSearch(e.target.value)} value={search} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
