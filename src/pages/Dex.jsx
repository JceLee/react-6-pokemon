import React, { useState } from "react";
import styled from "styled-components";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length < 6 && !selectedPokemon.includes(pokemon)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    } else {
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };

  return (
    <DexContainer>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </DexContainer>
  );
}

export default Dex;
