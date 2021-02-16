import React from "react";
import { cleanup, render } from "@testing-library/react";
import SideBarBottomLeft from ".";

describe("SideBarBottomLeft component", () => {
  afterEach(cleanup);

  it("renders all the tags within the sideBarBottomLeft", () => {
    const { queryByText, queryAllByText } = render(<SideBarBottomLeft />);
    const sideBarEl = queryByText(
      (_content, element) => element.className === "sideBar",
    );
    const sideBarBottomItemEl = queryByText(
      (_content, element) => element.className === "sideBarBottomItem",
    );
    const lineContainerEl = queryByText(
      (_content, element) => element.className === "lineContainer",
    );

    const lineEl = queryByText(
      (_content, element) => element.className === "line",
    );

    const switchText = queryAllByText("Switch");
    const navigateText = queryAllByText("to navigate");

    expect(sideBarEl).toBeInTheDocument();
    expect(sideBarBottomItemEl).toBeInTheDocument();
    expect(lineContainerEl).toBeInTheDocument();
    expect(switchText.length).toBe(1);
    expect(navigateText.length).toBe(1);
  });
});
