import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import pokeball from "../assets/pokeball.png"; // 포켓볼 아이콘 이미지 경로

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #ff0000; /* Pokémon 빨간색 */
`;

const SlotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const EmptySlot = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const PokeballImage = styled.img`
  width: 50px;
  height: 50px;
`;

function Dashboard({ selectedPokemon, onRemovePokemon }) {
  const slots = Array(6).fill(null);

  selectedPokemon.forEach((pokemon, index) => {
    slots[index] = (
      <PokemonCard
        key={pokemon.id}
        pokemon={pokemon}
        onRemove={onRemovePokemon}
        isSelected
      />
    );
  });

  return (
    <DashboardContainer>
      <Title>나만의 포켓몬</Title>
      <SlotsContainer>
        {slots.map((slot, index) =>
          slot ? (
            slot
          ) : (
            <EmptySlot key={Math.random()}>
              <PokeballImage src={pokeball} alt="Pokeball Icon" />
            </EmptySlot>
          ),
        )}
      </SlotsContainer>
    </DashboardContainer>
  );
}

export default Dashboard;
