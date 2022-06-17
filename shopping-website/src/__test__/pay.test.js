
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"

import Pay from "../components/payment/Pay"

const testIds = {
    heading: "parent",
    hr:"hr"
}
describe("Login.jsx tests", () => {

    it('should render without an error with initial values', () => {
        render(<Pay/>)

        const heading = screen.getByTestId(testIds.heading)

        // expect(heading.textContent).toBe("Your cart0")
        expect(heading.tagName).toBe("DIV")
    })

    it('should render hr', () => {
        render(<Pay/>)

        const hr = screen.getByTestId(testIds.hr)

        // expect(heading.textContent).toBe("Your cart0")
        expect(hr.tagName).toBe("HR")
    })

    
 
    
   

    

})