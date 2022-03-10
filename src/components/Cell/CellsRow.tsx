import styled from "@emotion/styled";
import { CellItem } from "./CellItem";

interface CellRowProps {
  cellCount: number;
}

export const CellsRow = styled("div")<CellRowProps>`
  ${CellItem} {
    width: ${({ cellCount }) => 100 / Math.max(cellCount, 1)}%;
  }
`;