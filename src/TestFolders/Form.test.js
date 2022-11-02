import React from "react";
import { render,describe } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Form } from "../Components/Form";
import userEvent from "@testing-library/user-event"

    test("checking if both input fields are empty",()=>{
        const {getByLabelText}=render(<Form/>)
        expect(getByLabelText("name").textContent).toBe("")
        expect(getByLabelText("surname").textContent).toBe("")
    })
    test("checking if changing the content of the fields runs smoothly",()=>{
        const {getByLabelText}=render(<Form/>)
        userEvent.type(getByLabelText("name"),"Prathyush")
        userEvent.type(getByLabelText("surname"),"Nair")
        expect(getByLabelText("name")).toHaveValue("Prathyush")
        expect(getByLabelText("surname")).toHaveValue("Nair")
    })


