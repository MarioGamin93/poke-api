import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Context from "./Context";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Pokemones from "./views/Pokemones";

function App() {
  const [name, setName] = useState('')
  const estadoName = {name, setName}
  const imagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
  
  return (
    <div className="App">
      <Context.Provider value={{estadoName, imagen}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemones/:pokeName" element={<Pokemones />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
