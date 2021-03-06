import { DonutColorSelector, LabelColorSelector } from "./ColorSelector";
import { BadgeForgeContextProvider } from "../contexts/BadgeForgeContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../theme/theme";

describe("LabelColorSelector", () => {
  it("should change the label color", () => {
    render(
      <ThemeProvider theme={Theme}>
        <BadgeForgeContextProvider>
          <LabelColorSelector />
        </BadgeForgeContextProvider>
      </ThemeProvider>
    );
    const color = "#111111";
    const picker = screen.getByLabelText("colorpicker");
    fireEvent.change(picker, { target: { value: color } });
    expect(picker).toHaveValue(color);
  });
});

describe("DonutColorSelector", () => {
  it("should change the label color", () => {
    render(
      <ThemeProvider theme={Theme}>
        <BadgeForgeContextProvider>
          <DonutColorSelector />
        </BadgeForgeContextProvider>
      </ThemeProvider>
    );
    const color = "#111111";
    const picker = screen.getByLabelText("colorpicker");
    fireEvent.change(picker, { target: { value: color } });
    expect(picker).toHaveValue(color);
  });
});
