import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Counter } from "../Components/Counter";

test("is default count 0",()=>{
    
    const {getByLabelText}=render(<Counter/>)
    expect(getByLabelText("counter").textContent).toBe("0")
})

test("increments by one",()=>{
    const {getByLabelText}=render(<Counter/>)
    fireEvent.click((getByLabelText("incrementcounter")))
    expect(getByLabelText("counter").textContent).toBe("1")
    // fireEvent.click((getByLabelText("decrementcounter")))
    // expect(getByLabelText("counter").textContent).toBe("0")
})
test("decrements by one",()=>{
    const {getByLabelText}=render(<Counter/>)
    fireEvent.click((getByLabelText("decrementcounter")))
    expect(getByLabelText("counter").textContent).toBe("-1")
})