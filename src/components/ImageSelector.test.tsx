import userEvent from "@testing-library/user-event";
import { BadgeForgeContextProvider } from "../contexts/BadgeForgeContext";
import { ImageSelector } from "./ImageSelector";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../theme/theme";

describe("HoverDiv", () => {
  it("should reveal and conceal the image upload on hover and unhover, resp.", () => {
    render(
      <ThemeProvider theme={Theme}>
        <ImageSelector />
      </ThemeProvider>
    );

    const hoverArea = screen.getByLabelText("hoverable");
    const uploadArea = screen.getByTitle("upload an image file");

    expect(uploadArea).toHaveStyle("display: none");

    // Mouse Enter -> ImageUpload appears
    userEvent.hover(hoverArea);
    expect(uploadArea).toHaveStyle("display: flex");

    // Mouse Leave -> ImageUpload hides
    userEvent.unhover(hoverArea);
    expect(uploadArea).toHaveStyle("display: none");
  });

  it("should reveal and conceal the upload on hover on dragEnter and dragEnd, resp.", () => {
    render(
      <ThemeProvider theme={Theme}>
        <ImageSelector />
      </ThemeProvider>
    );

    const hoverArea = screen.getByLabelText("hoverable");
    const uploadArea = screen.getByTitle("upload an image file");

    expect(uploadArea).toHaveStyle("display: none");

    // Drag Enter -> ImageUpload appears
    fireEvent.dragEnter(hoverArea);
    expect(uploadArea).toHaveStyle("display: flex");

    // Drag Leave -> ImageUpload hides
    fireEvent.dragLeave(hoverArea);
    expect(uploadArea).toHaveStyle("display: none");
  });
});

const customRender = () =>
  render(
    <ThemeProvider theme={Theme}>
      <BadgeForgeContextProvider>
        <ImageSelector />
      </BadgeForgeContextProvider>
    </ThemeProvider>
  );

describe("ImageSelector", () => {
  it("should accept the uploaded file", async () => {
    customRender();
    let uploadArea = screen.getByTitle("upload an image file");
    let imageUpload = screen.getByLabelText("imageupload") as HTMLInputElement;
    const file = new File(["0"], "test.png", { type: "image/png" });
    await userEvent.upload(uploadArea, file);
    expect(imageUpload.files).toBeDefined();
    expect(imageUpload.files).toHaveLength(1);
    expect(imageUpload.files?.item(0)).toBe(file);
  });

  it("image file being present changes the label", async () => {
    customRender();
    let uploadArea = screen.getByTitle("upload an image file");
    expect(uploadArea.innerHTML).toContain("Upload");
    const file = new File(["test"], "test.png", { type: "image/png" });
    await userEvent.upload(uploadArea, file);
    expect(uploadArea.innerHTML).toContain("Change");
  });
});
