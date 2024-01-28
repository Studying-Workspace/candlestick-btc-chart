import { render } from "@testing-library/react";
import Spinner from "../components/Spinner/Spinner.jsx";
import { test } from "vitest";
import { screen } from "@testing-library/dom";

test("Spinner component renders in the UI", () => {
  render(<Spinner />);
  const element = screen.getByTestId("spinner");

  expect(element).toBeInTheDocument();
});
