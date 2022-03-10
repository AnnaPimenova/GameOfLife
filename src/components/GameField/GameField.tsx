import React, { FC } from "react";
import { Cell, CellsRow, CellsGridWrapper } from "../Cell";

export interface GameFieldProps {
  cells: boolean[][];
  onClick: (x: number, y: number) => void;
}

export const GameField: FC<GameFieldProps> = ({ cells, onClick }) => (
  <CellsGridWrapper>
    {cells.map((row, y) => {
      return (
        <CellsRow cellsCount={row.length} key={`${y}_row`}>
          {[
            row.map((cell, x) => {
              return (
                <Cell
                  key={`${y}_${x}`}
                  x={x}
                  y={y}
                  borderColor={cell ? "#008000" : "#bdc3c7"}
                  backgroundColor={cell ? "#32cd32" : "#f6f7ff"}
                  onClick={onClick}
                />
              );
            }),
          ]}
        </CellsRow>
      );
    })}
  </CellsGridWrapper>
);
