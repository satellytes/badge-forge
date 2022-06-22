import { HoverArea } from "./HoverArea";
import { ImageSelector } from "./ImageSelector";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../theme/theme";

describe("HoverArea", () => {
  it("should reveal and conceal the image upload on hover and unhover, resp.", () => {
    render(
      <ThemeProvider theme={Theme}>
        <HoverArea>
          <ImageSelector />
        </HoverArea>
      </ThemeProvider>
    );
    let hoverArea = screen.getByLabelText("hoverable");
    let uploadArea = screen.getByTitle("upload an image file");
    expect(uploadArea).not.toBeVisible();
    fireEvent.mouseOver(hoverArea);
    expect(uploadArea).toBeVisible();
    fireEvent.mouseOut(uploadArea);
    expect(uploadArea).not.toBeVisible();
  });

  it("should reveal and conceal the image upload on dragEnter and dragEnd, resp.", () => {
    render(
      <ThemeProvider theme={Theme}>
        <HoverArea>
          <ImageSelector />
        </HoverArea>
      </ThemeProvider>
    );
    let hoverArea = screen.getByLabelText("hoverable");
    let uploadArea = screen.getByTitle("upload an image file");
    expect(uploadArea).not.toBeVisible();
    fireEvent.dragEnter(hoverArea);
    expect(uploadArea).toBeVisible();
    fireEvent.dragLeave(uploadArea);
    expect(uploadArea).not.toBeVisible();
  });
});
