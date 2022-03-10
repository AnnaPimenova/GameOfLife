import styled from "@emotion/styled";

export interface ButtonProps {
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  checked?: boolean;
}

export const Button = styled("button")<ButtonProps>`
  ${({ fullWidth }) => (fullWidth ? "width: 100%" : "")}
  padding: 7px 12px;
  border-radius: ${({ rounded }) => (rounded ? "10" : "5")}px;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  background-color: #${({ disabled }) => (disabled ? "62697e" : "2764c9")};
  color: ${({ checked }) => (checked ? "red" : "white")};
  border: 3px solid white;
`;