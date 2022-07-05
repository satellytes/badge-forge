import userEvent from "@testing-library/user-event";
import { BadgeForgeContextProvider } from "../contexts/BadgeForgeContext";
import { ImageSelector } from "./ImageSelector";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../theme/theme";

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
