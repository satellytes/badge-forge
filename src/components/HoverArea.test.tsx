import { HoverArea } from "./HoverArea";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../theme/theme";
import userEvent from "@testing-library/user-event";

describe("HoverArea", () => {
  it("should reveal and conceal the children on hover and unhover, resp.", () => {
    render(
      <ThemeProvider theme={Theme}>
        <HoverArea>
          <p>Child</p>
        </HoverArea>
      </ThemeProvider>
    );

    const hoverArea = screen.getByLabelText("hoverable");

    expect(screen.queryByText("Child")).toBeNull();

    // Mouse Enter -> Child appears
    userEvent.hover(hoverArea);
    expect(screen.getByText("Child")).toBeInTheDocument();

    // Mouse Leave -> Child hides
    userEvent.unhover(hoverArea);
    expect(screen.queryByText("Child")).toBeNull();
  });

  it("should reveal and conceal the children on dragEnter and dragEnd, resp.", () => {
    render(
      <ThemeProvider theme={Theme}>
        <HoverArea>
          <p>Child</p>
        </HoverArea>
      </ThemeProvider>
    );

    const hoverArea = screen.getByLabelText("hoverable");

    expect(screen.queryByText("Child")).toBeNull();

    // Drag Enter -> Child appears
    fireEvent.dragEnter(hoverArea);
    expect(screen.getByText("Child")).toBeInTheDocument();

    // Drag Leave -> Child hides
    fireEvent.dragLeave(hoverArea);
    expect(screen.queryByText("Child")).toBeNull();
  });
});
