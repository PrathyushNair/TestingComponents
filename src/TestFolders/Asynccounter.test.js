import React from "react";

import { fireEvent, render,waitFor } from "@testing-library/react";
import { Asynccounter } from "../Components/Asynccounter";

test("initial async count value should be 0",()=>{
    const {getByLabelText}=render(<Asynccounter/>)
    expect(getByLabelText("asyncDefault").textContent).toBe("0")

})

test("increment count by 1 asynchronously",async()=>{
    const {getByLabelText}=render(<Asynccounter/>)
    fireEvent.click(getByLabelText("asyncincrementcounter"))
   await waitFor(()=>{
        expect(getByLabelText("asyncDefault").textContent).toBe("1")
    },{timeout:2000})
    })
    
test("decrement count by 1 asynchronously",async()=>{
    const {getByLabelText}=render(<Asynccounter/>)
    fireEvent.click(getByLabelText("asyncdecrementcounter"))
    await waitFor(()=>{
        expect(getByLabelText("asyncDefault").textContent).toBe("-1")
    },{timeout:3000})
})