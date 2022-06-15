import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BadgeForgeContextProvider } from "../contexts/BadgeForgeContext";

jest.mock("../contexts/BadgeForgeContext", () => {
    return {BadgeForgeContextProvider: jest.fn(()=>null)}
})

test("App renders without failure", ()=> {
    render(<App/>);
})
