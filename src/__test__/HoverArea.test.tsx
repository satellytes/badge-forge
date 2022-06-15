import { HoverArea } from "../components/HoverArea";
import { ImageSelector } from "../components/ImageSelector";
import {
  BadgeForgeContext,
  BadgeForgeContextProvider,
} from "../contexts/BadgeForgeContext";
import { useContext } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { drawImage } from "../lib/canvas/drawImage";

const createEnv = () =>
  render(
    <BadgeForgeContextProvider>
      <HoverArea>
        <ImageSelector />
      </HoverArea>
    </BadgeForgeContextProvider>
  );

afterEach(cleanup);

// test("Hovering over canvas reveals upload area", () => {
//   const { container } = render(
//     <HoverArea>
//       <ImageSelector></ImageSelector>
//     </HoverArea>
//   );
//   let uploadArea = screen.getByTitle("upload an image file");
//   expect(uploadArea).not.toBeVisible();
//   userEvent.hover(container);
//   userEvent.hover(uploadArea);
//   expect(uploadArea).toBeVisible();
//   userEvent.unhover(uploadArea);
//   expect(uploadArea).not.toBeVisible();
// });

test("Uploaded image file changes input label state", () => {
  const { container } = createEnv();
  let uploadArea = screen.getByTitle("upload an image file");
  expect(uploadArea.innerHTML).toContain("UPLOAD");
  const file = new File(["test"], "test.png", { type: "image/png" });
  userEvent.upload(uploadArea, file);
  expect(uploadArea.innerHTML).toContain("CHANGE");
});
