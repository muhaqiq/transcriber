import React from "react";
import { render } from "@testing-library/react";

import Editor from "./Editor";

describe("Editor", () => {
  test("renders the Button component", () => {
    render(<Editor label="Hello world!" />);
  });
});
