import React from "react";
import { useContext } from "react";
import Context from "../Context";

const Home = () => {
  const {imagen} = useContext(Context)
  
  return (
    <div>
      <h1>Bienvenido maestro Pokemón</h1>
      <div className="imagen">
      <img src={imagen} alt="pikachu" />
      </div>
    </div>
  );
};

export default Home;
