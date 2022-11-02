import { render, waitFor } from "@testing-library/react";
import React from "react";
import { User } from "../Components/User";

test("checking if 10 username are loaded", async () => {
  const { queryAllByTestId } = render(<User />);
  await waitFor(() => {
    expect(queryAllByTestId("users")).toHaveLength(10);
  });
});
