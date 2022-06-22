import { cleanup, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Canvas } from "../components/Canvas";
import { RenderButton } from "../components/RenderButton";
import { Theme } from "../theme/theme";

const createEnv = () =>
  render(
    <>
      <Canvas />
      <ThemeProvider theme={Theme}>
        <RenderButton />
      </ThemeProvider>
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
