import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

const PokemonInfo = styled.div`
  margin-top: 10px;
`;

const PokemonName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
  color: black;
`;

const PokemonNumber = styled.p`
  font-size: 12px;
  color: #666;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: #ff0000;
  color: #fff;
  border-radius: 5px;

  &:hover {
    background-color: #cc0000;
  }
`;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon-detail?id=${pokemon.id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonInfo>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonNumber>
          No. {pokemon.id.toString().padStart(3, "0")}
        </PokemonNumber>
      </PokemonInfo>
      {isSelected ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
