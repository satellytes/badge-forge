import { RenderButton } from "../components/RenderButton";
import { screen, render, cleanup } from "@testing-library/react";
import { Canvas } from "../components/Canvas";
import userEvent from "@testing-library/user-event";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";

const createEnv = () =>
  render(
    <>
    <Canvas/>
    <RenderButton/>
    </>
  );

  afterEach(cleanup);

describe("downloadImage", () => {
  it("should download the image file", () => {
    const anchor = {
      click: jest.fn(),
      download: "",
    };
    // const { container } = createEnv();
    // jest.spyOn(document, "createElement").mockImplementation(() => anchor);
    // const button = screen.getByTitle("Download as PNG file");
    // userEvent.click(button);
    // expect(anchor.download).toContain("profile");
    // expect(anchor.click).toHaveBeenCalledTimes(1);
  });
});
