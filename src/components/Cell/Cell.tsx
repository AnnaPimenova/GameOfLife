import React, { FC } from "react";
import { CellItem } from "./CellItem";

export interface CellProps {
  x: number;
  y: number;
  borderColor?: string;
  backgroundColor?: string;
  onCellClick: (x: number, y: number) => void;
}

export const Cell: FC<CellProps> = ({
  x,
  y,
  borderColor,
  backgroundColor,
  onClick,
}) => {
  const onClickHandler = React.useCallback(() => {
    onClick(x, y);
  }, [x, y, onClick]);  
  return (
    <CellItem
      data-testid="cell"
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      onClick={onClickHandler}
    />
  );
};
