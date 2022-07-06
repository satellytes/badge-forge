import { TextLabel } from "./TextLabel";
import { BadgeForgeContextProvider } from "../contexts/BadgeForgeContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../theme/theme";

const customRender = () =>
  render(
    <ThemeProvider theme={Theme}>
      <BadgeForgeContextProvider>
        <TextLabel />
      </BadgeForgeContextProvider>
    </ThemeProvider>
  );

describe("TextLabel", () => {
  it("should change value", () => {
    const expectedValue = "hiring";

    customRender();

    const input = screen.getByPlaceholderText("15 characters max.");
    fireEvent.change(input, { target: { value: expectedValue } });

    expect(input).toHaveValue(expectedValue);
  });

  it("should not accept more than 15 characters", () => {
    const inputValue = "123456789012345";

    customRender();

    const input = screen.getByPlaceholderText("15 characters max.");
    const DropdownBox = screen.getByTitle(
      "type your own text or select from the presets"
    );
    expect(getComputedStyle(DropdownBox).border).toBe(Theme.borders.regular);

    fireEvent.change(input, { target: { value: inputValue } });

    // Expect 15 chars
    expect(input).toHaveValue(inputValue);

    fireEvent.change(input, { target: { value: `${inputValue}MORE` } });

    // Expect still 15 chars
    expect(input).toHaveValue(inputValue);

    // Expect error icon
    expect(getComputedStyle(DropdownBox).border).toBe(Theme.borders.alert);
  });
});
