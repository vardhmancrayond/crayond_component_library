import React from "react";
import { render } from "@testing-library/react";

import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("renders the LoginForm component", () => {
    render(<LoginForm buttonLabel="Login" />);
  });
});