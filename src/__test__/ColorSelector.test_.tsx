import { DonutColorSelector } from "../components/ColorSelector";
import {
  BadgeForgeContext,
  BadgeForgeContextProvider,
} from "../contexts/BadgeForgeContext";
import { useContext } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const createEnv = () =>
  render(
    <BadgeForgeContextProvider>
      <DonutColorSelector />
    </BadgeForgeContextProvider>
  );

// test("DonutColorSelector changes Donut color",  ()=> {
//     createEnv();
//     const slider = screen.getByRole("input");
// })
