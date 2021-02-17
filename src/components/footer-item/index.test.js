import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import FooterItem from ".";

const history = createMemoryHistory();
const component = (
  <Router history={history}>
    <FooterItem
      contentItem={{
        id: "00",
        text: "home",
        address: "/",
      }}
    />
  </Router>
);

describe("Footer component", () => {
  afterEach(cleanup);

  it("renders the clickable Logo", () => {
    render(component);
    const particleEffectEl = screen.queryAllByText(
      (_content, element) => element.tagName === "CANVAS",
    );

    expect(particleEffectEl[0]).toBeInTheDocument();
    expect(particleEffectEl[0]).toHaveStyle({ visibility: "hidden" });
  });
});
