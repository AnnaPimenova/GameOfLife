import React from "react";
import { GameOfLife, GameProcessWidget, GameParamsWidget } from "@/modules";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const GamePage = () => {
  return (
    <Container>
      <GameProcessWidget />
      <GameParamsWidget />
      <GameOfLife />
    </Container>
  );
};
