import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import SideBarRight from ".";
import { useComponent } from "./hook";
import { socialMediaLinks } from "../../utils/socialMediaLinks";

function setupHook(hook) {
  const hookOutput = {};
  function TestComponent() {
    Object.assign(hookOutput, hook());
    return null;
  }
  render(<TestComponent />);
  return hookOutput;
}
let hook;

describe("SideBarRight component", () => {
  afterEach(cleanup);
  const initialState = { language: "En" };

  it("tests the custom hook", () => {
    hook = setupHook(useComponent);

    expect(hook.language).toEqual(initialState.language);
    expect(hook.handleClick).toBeInstanceOf(Function);
  });

  it("renders the SideBarRight container", () => {
    const { queryByText } = render(<SideBarRight />);
    const rightSideBarEl = queryByText(
      (_content, element) => element.className === "rightSidebarContainer",
    );

    expect(rightSideBarEl).toBeInTheDocument();
  });

  it("tests the button's behaviour of switching a lanuage", () => {
    const { queryByRole } = render(<SideBarRight />);

    const buttonChangeLanguage = queryByRole("button");
    expect(buttonChangeLanguage.value).toBe("En");

    fireEvent.click(buttonChangeLanguage);
    expect(buttonChangeLanguage.value).toBe("Ru");
  });

  it("renders all the social media icons", () => {
    const { queryAllByAltText } = render(<SideBarRight />);

    const iconsList = queryAllByAltText(
      (_content, element) => element.className === "socialMediaIcons",
    );

    const iconLinksList = queryAllByAltText(
      (_content, element) => element.tagName === "A",
    );

    iconLinksList.forEach((iconLink, index) =>
      expect(iconLink).toHaveAttribute("href", socialMediaLinks[index]),
    );

    expect(iconsList.length).toBe(3);
    iconsList.forEach((icon) => expect(icon).toBeInstanceOf(HTMLImageElement));
  });
});
