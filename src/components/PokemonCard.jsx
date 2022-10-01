import React from "react";

const PokemonCard = ({ pokeSrc, pokeStats, pokeNombre }) => {
  console.log(pokeSrc);
  console.log(pokeStats);
  return (
    <div className="pokemon">

      <div className="poke-imagen">
        <img src={pokeSrc} alt="imagen de pokemon"  />
      </div>

      <div className="container-poke">
        <h2 className="poke-nombre">{pokeNombre.name}</h2>
        {pokeStats.map((pokemon, index) => {
          return (
            <ul key={index} className="poke-stats">
              <li>
                <span>{pokemon.stat.name}</span>: {pokemon.base_stat}
              </li>
            </ul>
          );
        })}
      </div>

    </div>
  );
};

export default PokemonCard;
