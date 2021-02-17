import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Footer from ".";

const history = createMemoryHistory();
const component = (
  <Router history={history}>
    <Footer />
  </Router>
);

describe("Footer component", () => {
  it("renders the footer menu", () => {
    const { queryAllByText } = render(component);
    const footerMenu = queryAllByText(
      (_content, element) => element.className === "footer",
    );
    expect(footerMenu[0]).toBeInTheDocument();
  });
});
