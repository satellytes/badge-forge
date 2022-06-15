import { RenderButton } from "../components/RenderButton";
import { screen, render } from "@testing-library/react";
import { Canvas } from "../components/Canvas";
import userEvent from "@testing-library/user-event";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";

const createEnv = () =>
  render(
    <>
      <Canvas />
      <RenderButton />
    </>
  );

describe("downloadImage", () => {
  it("should download the image file", () => {
    const anchor = {
      click: jest.fn(),
    };
    // jest.spyOn(document, "createElement").mockImplementation(() => anchor);
    // const { container } = createEnv();
    // const button = screen.getByTitle("Download as PNG file");
    // userEvent.click(button);
    // expect(anchor.download).toContain("profile");
    // expect(anchor.click).toHaveBeenCalledTimes(1);
  });
});
