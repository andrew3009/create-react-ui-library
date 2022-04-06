import React from "react";
import { create } from "react-test-renderer";

import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  test("renders the HelloWorld component", () => {
    const component = create(<HelloWorld name="World" />);
    const instance = component.root;
    const HelloWorldComponent = instance.findByType("div");
    expect(HelloWorldComponent.props.className).toBe("helloworld");
  });
});