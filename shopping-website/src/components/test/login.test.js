
import { fireEvent, render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"
import About from "../About"

const testid = {
    heading: "header",
}
describe("Home.jsx tests", () => {

    it('should render without an error with initial values', () => {
        render(<About />)
        const heading = screen.getByTestId(testid.header)

        expect(heading.textContent).toBe("About Us")
        expect(heading.tagName).toBe("H1")
    })
    
})