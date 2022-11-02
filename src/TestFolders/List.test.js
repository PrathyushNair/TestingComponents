import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { List } from "../Components/List";

test("check if element is added",()=>{
    const {getByPlaceholderText,getByTestId,getByText}=render(<List/>)
    expect(getByPlaceholderText("add list item")).toBeDefined()
    fireEvent.change(getByPlaceholderText("add list item"),{target:{value:"one"}})
    fireEvent.click(getByTestId("submitButton"))
    const firstItem=getByText("one")
    expect(firstItem).toBeDefined()
    expect(firstItem.tagName).toBe("UL")
    expect(getByPlaceholderText("add list item").value).toBe("")

})