import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import SideBarLeft from ".";
import { menuContent } from "../../common/menuLinks";

const history = createMemoryHistory();
const component = (
  <Router history={history}>
    <SideBarLeft />
  </Router>
);

describe("SideBarLeft component", () => {
  it("renders the humburger menu", () => {
    const { queryAllByText } = render(component);
    const humburgerMenu = queryAllByText(
      (_content, element) => element.className === "bm-menu",
    );
    expect(humburgerMenu[0]).toBeInTheDocument();
  });

  it("renders the links to pages", () => {
    const { getByText } = render(component);

    const homeLinkEl = getByText(menuContent[0].text);
    const aboutLinkEl = getByText(menuContent[1].text);
    const brandsLinkEl = getByText(menuContent[2].text);
    const coursesLinkEl = getByText(menuContent[3].text);
    //screen.debug(homeLinkEl);
    fireEvent(
      homeLinkEl,
      new MouseEvent("mouseEnter", { "text-decoration": "underline" }),
    );
    fireEvent.mouseEnter(aboutLinkEl);

    expect(homeLinkEl).toHaveAttribute("href", menuContent[0].address);
    expect(aboutLinkEl).toHaveAttribute("href", menuContent[1].address);
    expect(brandsLinkEl).toHaveAttribute("href", menuContent[2].address);
    expect(coursesLinkEl).toHaveAttribute("href", menuContent[3].address);
  });
});
