import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock.js";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
`;

const PokemonName = styled.h2`
  margin: 20px 0;
  color: #ff0000; /* Pokémon 빨간색 */
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const Text = styled.p`
  color: black;
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PokemonDetail() {
  const query = useQuery();
  const navigate = useNavigate();
  const pokemonId = parseInt(query.get("id"), 10);
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <DetailContainer>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <Text>타입: {pokemon.types.join(", ")}</Text>
      <Text>{pokemon.description}</Text>
      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
    </DetailContainer>
  );
}

export default PokemonDetail;
