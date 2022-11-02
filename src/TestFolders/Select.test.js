import React from "react";
import { fireEvent, getAllByRole, render } from "@testing-library/react";
import { Select } from "../Components/Select";

test("testing if 5 options exist", () => {
  let { getAllByRole } = render(<Select />);

  expect(getAllByRole("option").length).toBe(5);
  
});

test("default selection", () => {
  let { getByRole } = render(<Select />);
  expect(getByRole("option", { name: "Select Product Category" }));
});

test("testing if laptop is selected", () => {
    //act
  let { getByRole, getByTestId } = render(<Select />);
  //arrange
  fireEvent.change(getByTestId("selectTag"), { target: { value: "laptop" } });
  //assert
  expect(getByRole("option", { name: "laptop" }).selected).toBe(true);
  fireEvent.change(getByTestId("selectTag"), { target: { value: "TV" } });
  //assert
  expect(getByRole("option", { name: "TV" }).selected).toBe(true);
});
