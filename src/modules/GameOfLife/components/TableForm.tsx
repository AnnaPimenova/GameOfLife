import React from "react";
import styled from "@emotion/styled";

const Table = styled.table`
  width: 100%;
  text-align: left;

  th {
    color: #5958a8;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  td {
    padding-top: 10px;
  }
`;

interface TableFormProps {
  children: React.ReactNode;
}

export const TableForm: React.FC<TableFormProps> = ({ children }) => {
  return (
    <Table>
      <tbody>{children}</tbody>
    </Table>
  );
};

export const ThreeColumnsHeader: React.FC = () => {
  return (
    <tr>
      <th width="30%">Parameter</th>
      <th width="20%">Value</th>
      <th width="50%">Input</th>
    </tr>
  );
};

