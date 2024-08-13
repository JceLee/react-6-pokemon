import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/pokemon-logo.png"; // 업로드한 이미지를 사용할 수 있도록 경로를 맞춰주세요

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Logo = styled.img`
  width: 600px;
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ff0000;
  color: white;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Logo src={logo} alt="Pokemon Logo" />
      <StartButton onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </StartButton>
    </HomeContainer>
  );
}

export default Home;
