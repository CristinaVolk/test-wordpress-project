import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Navbar from ".";

const history = createMemoryHistory();
const component = (
  <Router history={history}>
    <Navbar />
  </Router>
);

describe("Navbar component", () => {
  afterEach(cleanup);
  it("renders the clickable Logo", () => {
    render(component);
    const logoAnchorEl = screen.queryAllByText(
      (_content, element) => element.className === "active",
    );
    expect(logoAnchorEl[0]).toHaveAttribute("href", "/");
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });
});
