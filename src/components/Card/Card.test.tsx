import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  test("render Card", () => {
    const { container } = render(<Card bgColor="red" thin />);
    const card = container.firstChild;
    expect(card).not.toBeNull();
  });
});