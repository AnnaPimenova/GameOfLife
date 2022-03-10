import React from "react";
import { render } from "@testing-library/react";
import { WidgetBase } from "./WidgetBase";

describe("WidgetBase", () => {
  test("render WidgetBase", () => {
    const { container } = render(
      <WidgetBase title={"Title"} color={"yellow"} />
    );
    const widgetBase = container.firstChild;
    expect(widgetBase).not.toBeNull();
  });
});