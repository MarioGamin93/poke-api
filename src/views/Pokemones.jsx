import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import PokemonCard from "../components/PokemonCard";

const Pokemones = () => {
  const {estadoName}  = useContext(Context);
  const [pokeSrc, setPokeSrc] = useState({});
  const [pokeStats, setPokeStats] = useState([]);
  const [pokeInput, setPokeInput] = useState([]);
  const [pokeNombre, setPokeNombre] = useState([]);
  const { name, setName } = estadoName;
  console.log(pokeInput);
  console.log(name);
  const navigate = useNavigate();
  const { pokeName } = useParams();
  console.log(pokeName);
  
  const getPokemones = async (pokeName) => {
    const url = `https://pokeapi.co/api/v2/pokemon`;
    console.log(`${url}/${pokeName}`);
    const responseSrc = await fetch(`${url}/${pokeName}`);
    const responseStats = await fetch(`${url}/${pokeName}`);
    const responseNombre = await fetch(`${url}/${pokeName}`);
    const { sprites } = await responseSrc.json();
    const { stats } = await responseStats.json();
    const nombre = await responseNombre.json();
    setPokeSrc(sprites.other.dream_world.front_default);
    setPokeStats(stats);
    setPokeNombre(nombre);
  };

  const getPokemonesInput = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon`;
    const responseInput = await fetch(url);
    const { results } = await responseInput.json();
    setPokeInput(results);
    console.log(results);
  };

  useEffect(() => {
    getPokemones(pokeName);
  }, [pokeName]);

  useEffect(() =>{
    getPokemonesInput()
  }, [])

  const capturarInput = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const irAPokemon = (e) => {
    e.preventDefault();
    let datos = e.target;
    console.log(datos.pokemon.value);
    setName(datos.pokemon.value);
    navigate(`/pokemones/${name}`);
  };

  return (
    <>
      {name !== pokeName ? (
        <div>
          <h1>Selecciona un pokemon</h1>
          <form onSubmit={irAPokemon} className='container-select'>
            <select name="pokemon" onChange={capturarInput}>
              <option>Pokemones</option>
              {pokeInput.map((poke, index) => {
                return (
                  <option key={index} value={poke.name}>
                    {poke.name}
                  </option>
                );
              })}
            </select>
            <input type="submit" value="Buscar" className="button" />
          </form>
        </div>
      ) : (
        <PokemonCard pokeSrc={pokeSrc} pokeStats={pokeStats} pokeNombre={pokeNombre} />
      )}
    </>
  );
};

export default Pokemones;
