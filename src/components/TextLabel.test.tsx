import { TextLabel } from "./TextLabel";
import { BadgeForgeContextProvider } from "../contexts/BadgeForgeContext";
import { fireEvent, render, screen } from "@testing-library/react";

const customRender = () =>
  render(
    <BadgeForgeContextProvider>
      <TextLabel />
    </BadgeForgeContextProvider>
  );

describe("TestLabel", () => {
  it("should change value", () => {
    const expectedValue = "hiring";

    customRender();

    const input = screen.getByPlaceholderText("max. 15 characters");
    fireEvent.change(input, { target: { value: expectedValue } });

    expect(input).toHaveValue(expectedValue);
  });

  it("should not accept more than 15 characters", () => {
    const inputValue = "123456789012345";

    customRender();

    const input = screen.getByPlaceholderText("max. 15 characters");
    fireEvent.change(input, { target: { value: inputValue } });

    // Expect 15 chars
    expect(input).toHaveValue(inputValue);

    fireEvent.change(input, { target: { value: `${inputValue}MORE` } });

    // Expect still 15 chars
    expect(input).toHaveValue(inputValue);

    // Expect error icon
    const triangleIcon = screen.getByLabelText("Error");
    expect(triangleIcon).toBeInTheDocument();
  });
});
