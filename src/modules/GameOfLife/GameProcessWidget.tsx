import React, { FC } from "react";
import { connect } from "react-redux";
import { RootState } from "@/store";
import { Button, WidgetBase } from "@/components";
import { actions } from "../GameOfLife/reducer";
import styled from "@emotion/styled";

const Wrapper = styled.span`
  margin-right: 20px;
  margin-left: 30px;
`;

const mapStateToProps = ({ game, statistics }: RootState) => ({
  isRunning: game.isRunning,
  initialPercent: game.initialPercent,
  generation: statistics.generation,
});

const mapDispatchToProps = {
  switchGameStatus: actions.switchGameStatus,
  generate: actions.generate,
  reset: actions.reset,
};

export type GameProcessProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const GameProcessComponent: FC<GameProcessProps> = ({
  isRunning,
  initialPercent,
  generation,
  switchGameStatus,
  generate,
  reset,
}) => {
  return (
    <WidgetBase color="violet">
      <Wrapper>
        <Button
          name="startStop"
          onClick={switchGameStatus}
          disabled={initialPercent === 0 || initialPercent === 100}
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
      </Wrapper>
      <Wrapper>
        <Button name="reset" disabled={isRunning} onClick={reset}>
          Clear
        </Button>
      </Wrapper>
      <Wrapper>
        <Button name="regenerate" disabled={isRunning} onClick={generate}>
          Generate
        </Button>
      </Wrapper>
      <Wrapper>{`Generation: ${generation}`}</Wrapper>
    </WidgetBase>
  );
};

export const GameProcessWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameProcessComponent);
