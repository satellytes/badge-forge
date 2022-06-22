import { DonutColorSelector, LabelColorSelector } from "./ColorSelector";
import { BadgeForgeContextProvider } from "../contexts/BadgeForgeContext";
import { fireEvent, render, screen } from "@testing-library/react";

describe("LabelColorSelector", () => {
  it("should change the label color", () => {
    render(
      <BadgeForgeContextProvider>
        <LabelColorSelector/>
      </BadgeForgeContextProvider>
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
      <BadgeForgeContextProvider>
        <DonutColorSelector/>
      </BadgeForgeContextProvider>
    );
    const color = "#111111";
    const picker = screen.getByLabelText("colorpicker");
    fireEvent.change(picker, { target: { value: color } });
    expect(picker).toHaveValue(color);
  });
});
