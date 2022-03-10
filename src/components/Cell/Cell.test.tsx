import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cell } from "./Cell";

describe("Cell", () => {
  test("click Cell", () => {
    const onClick = jest.fn();
    const { container } = render(
      <Cell
        x={5}
        y={3}
        borderColor={"gray"}
        backgroundColor={"white"}
        onClick={onClick}
      />
    );
    const cell = container.firstChild;
    expect(cell).not.toBeNull();
    userEvent.click(cell);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(5, 3);
  });
});