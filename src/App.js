import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const handleInput = (e) => {
    setUserInput(e.target.value.toLowerCase().trim());
  };
  const filteredPokes = pokemons.filter((poke) =>
    poke.name.toLowerCase().includes(userInput)
  );

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input onChange={handleInput} type="text" value={userInput} />
      <div className="cards">
        {filteredPokes.map((poke) => (
          <CardItem
            key={crypto.randomUUID()}
            name={poke.name}
            sprite={poke.sprite}
          />
        ))}
      </div>
    </div>
  );
}
