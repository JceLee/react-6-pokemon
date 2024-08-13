import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: #f0f0f0; /* 부드러운 배경 색상 */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

function PokemonList({ pokemonList, onAddPokemon }) {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAddPokemon} />
      ))}
    </ListContainer>
  );
}

export default PokemonList;
