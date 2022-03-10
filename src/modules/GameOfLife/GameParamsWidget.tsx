import React from "react";
import { connect } from "react-redux";
import { RootState } from "@/store";
import styled from "@emotion/styled";
import { RangeRow } from "./components/RangeRow";
import { TableForm } from "./components/TableForm";
import { actions } from "./reducer";
import { WidgetBase, Button } from "@/components";

const Wrapper = styled.span`
  margin-right: 20px;
  margin-left: 30px;
  width: 350px;
`;

const mapStateToProps = ({ game }: RootState) => ({
  speed: game.speed,
  initialPercent: game.initialPercent,
  isRunning: game.isRunning,
});

const mapDispatchToProps = {
  setSpeed: actions.setSpeed,
  setInitialPercent: actions.setInitialPercent,
};

export type GameParamsProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const GameParams: React.FC<GameParamsProps> = ({
  speed,
  initialPercent,
  isRunning,
  setSpeed,
  setInitialPercent,
}) => {
  return (
    <WidgetBase title="Game settings" color="yellow">
      <TableForm>
        <tr>
          <td> Sim speed: </td>
          <td>
            <Button
              name="slowSpeed"
              onClick={() => setSpeed(1)}
              checked={speed === 1 ? true : false}
            >
              Slow
            </Button>
          </td>
          <td>
            <Button
              name="mediumSpeed"
              onClick={() => setSpeed(3)}
              checked={speed === 3 ? true : false}
            >
              Medium
            </Button>
          </td>
          <td>
            <Button
              name="fastSpeed"
              onClick={() => setSpeed(5)}
              checked={speed === 5 ? true : false}
            >
              Fast
            </Button>
          </td>
        </tr>
        <RangeRow
          label="Init %"
          name="initialPercent"
          value={initialPercent}
          valueEnding="%"
          max={100}
          min={0}
          onChange={(e) => setInitialPercent(e.target.value)}
          disabled={isRunning}
        />
      </TableForm>
    </WidgetBase>
  );
};

export const GameParamsWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameParams);
