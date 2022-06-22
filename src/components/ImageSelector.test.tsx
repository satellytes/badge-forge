import userEvent from "@testing-library/user-event";
import { BadgeForgeContextProvider } from "../contexts/BadgeForgeContext";
import { ImageSelector } from "./ImageSelector";
import { render, screen} from "@testing-library/react";

const customRender = () =>
  render(
    <BadgeForgeContextProvider>
      <ImageSelector />
    </BadgeForgeContextProvider>
  );

describe("ImageSelector", () => {
  it("should accept the uploaded file", async () => {
    customRender();
    let uploadArea = screen.getByTitle("upload an image file");
    let imageUpload = screen.getByLabelText("imageupload") as HTMLInputElement;
    const file = new File(["0"], "test.png", { type: "image/png" });
    await userEvent.upload(uploadArea, file);
    console.log(imageUpload);
    expect(imageUpload.files).toBeDefined();
    expect(imageUpload.files).toHaveLength(1);
    expect(imageUpload.files?.item(0)).toBe(file);
  });

  it("image file being present changes the label", async () => {
    customRender();
    let uploadArea = screen.getByTitle("upload an image file");
    expect(uploadArea.innerHTML).toContain("UPLOAD");
    const file = new File(["test"], "test.png", { type: "image/png" });
    await userEvent.upload(uploadArea, file);
    expect(uploadArea.innerHTML).toContain("CHANGE");
  });
});
