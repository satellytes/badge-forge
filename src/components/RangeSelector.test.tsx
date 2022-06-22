import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { RangeSelectors } from "../components/RangeSelectors";
import { BadgeForgeContextProvider } from "../contexts/BadgeForgeContext";
import { Theme } from "../theme/theme";

const customRender = () =>
  render(
    <BadgeForgeContextProvider>
      <ThemeProvider theme={Theme}>
        <RangeSelectors />
      </ThemeProvider>
    </BadgeForgeContextProvider>
  );

afterEach(cleanup);

describe("AngleSelector", () => {
  it("should change the donut angle", () => {
    customRender();
    const angleSlider = screen.getAllByRole("slider")[0] as HTMLInputElement;
    const angle = "60";
    fireEvent.change(angleSlider, { target: { value: angle } });
    expect(angleSlider.value).toBe(angle);
  });
});

describe("WidthSelector", () => {
  it("should change the donut border width", () => {
    customRender();
    const widthSlider = screen.getAllByRole("slider")[1] as HTMLInputElement;
    const width = "20";
    fireEvent.change(widthSlider, { target: { value: width } });
    expect(widthSlider.value).toBe(width);
  });
});
