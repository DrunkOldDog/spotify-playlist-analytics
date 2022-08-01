import App from "../App";
import { render, screen } from "@testing-library/react";

test("this is a test", () => {
  render(<App />);
  expect(screen.getByText("Hello there xd!")).toBeInTheDocument();
});
