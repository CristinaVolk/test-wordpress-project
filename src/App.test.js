import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders Main Container", () => {
    render(<App />);
    //screen.debug();
    const mainContainer = screen.queryAllByText(
      (_content, element) => element.className === "main-container",
    );

    expect(mainContainer[0]).toBeInTheDocument();
  });
});
