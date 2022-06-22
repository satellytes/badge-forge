import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders without failure", () => {
  render(<App />);
  const headline = screen.getByText(
    "Create customized profile pictures with ease."
  );

  expect(headline).toBeInTheDocument();
});
