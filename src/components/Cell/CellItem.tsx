import styled from "@emotion/styled";
import { css } from "@emotion/core";

const CommonCell = css`
  width: 25px;
  border: 1px solid;
  padding: 1px;
  cursor: pointer;

  :before {
    content: "";
    float: left;
    padding-top: 100%;
  }
`;

interface CellItemProps {
  backgroundColor?: string;
  borderColor?: string;
}

export const CellItem = styled("button")<CellItemProps>`
  ${CommonCell};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({ borderColor }) => borderColor && `border-color: ${borderColor}`};
`;