import React from "react";
import { render } from "@testing-library/react";

import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  test("renders the HelloWorld component", () => {
    render(<HelloWorld name="World" />);
  });
});