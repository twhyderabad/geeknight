import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Home text", () => {
  const { getAllByText } = render(<App />);
  const linkElements = getAllByText(/Prepare/i);
  for (let linkElement of linkElements) {
    expect(linkElement).toBeInTheDocument();
  }
});
