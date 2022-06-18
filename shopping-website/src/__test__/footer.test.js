import { fireEvent, render, screen } from "@testing-library/react"
import Contact from "../components/contact/Contact"
import renderer from "react-test-renderer"
import Footer from "../Footer/Footer"
const testIds = {
    heading: "logoname",
    customer:"customerdata",
    busines:"business",
    lega:"legal"
   
}
describe("footer.jsx tests", () => {

    it('should render without an error with initial values', () => {
        render(<Footer />)
        const heading = screen.getByTestId(testIds.heading)

        expect(heading.textContent).toBe("Ketnipz")
        expect(heading.tagName).toBe("H4")
    })



    it('should render without an error with initial values', () => {
        render(<Footer />)
        const heading = screen.getByTestId(testIds.customer)

        expect(heading.textContent).toBe("Customer")
        expect(heading.tagName).toBe("H4")
    })

    it('should render without an error with initial values', () => {
        render(<Footer />)
        const heading = screen.getByTestId(testIds.lega)

        expect(heading.textContent).toBe("Legal")
        expect(heading.tagName).toBe("P")
    })

   

    

   

    

})