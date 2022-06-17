import {
    fireEvent,
    render,
    screen
} from "@testing-library/react"
import renderer from "react-test-renderer"
import About from "../components/About"

const testIds = {
    heading: "about",
}
describe("Contact.jsx tests", () => {

    it('should render without an error with initial values', () => {
        render( < About / > )
        const heading = screen.getByTestId(testIds.heading)

        expect(heading.textContent).toBe("About Us")
        expect(heading.tagName).toBe("H1")
    })


    // const displayedImage = document.querySelector("img") as HTMLImageElement;
    // expect(displayedImage.src).toContain("");







})