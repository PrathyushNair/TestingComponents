import { getByTestId, render,screen } from "@testing-library/react"
import App from "../App"
import { Message } from "../Components/Message"

test("testing message component for bold behaiour",()=>{


        var {getByTestId}=render(<Message content={"I see everything twice"} isImportant={false}/>)
        expect(getByTestId("unbold").textContent).toBe("I see everything twice")
   
   
     
})
test("testing message component for unbols behaviour",()=>{
const {getByTestId}=render(<Message content={"I see everything twice"} isImportant={false}/>)
     expect(getByTestId("unbold").textContent).toBe("I see everything twice")
    
     
})