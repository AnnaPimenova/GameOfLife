import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("calls onClick callback", () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick} rounded />);
    const button = container.firstChild;
    expect(button).not.toBeNull();
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("doesn't call onClick on disabled Button", () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick} disabled fullWidth />);
    const button = container.firstChild;
    expect(button).not.toBeNull();
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
