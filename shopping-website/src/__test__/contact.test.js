
import { fireEvent, render, screen } from "@testing-library/react"
import Contact from "../components/contact/Contact"
import renderer from "react-test-renderer"
const testIds = {
    heading: "contact_question",
    button: "button",
    placeholder:"John Smith",
    label:"email"
}
describe("Contact.jsx tests", () => {

    it('should render without an error with initial values', () => {
        render(<Contact />)
        const heading = screen.getByTestId(testIds.heading)

        expect(heading.textContent).toBe("Have Some Question?")
        expect(heading.tagName).toBe("H1")
    })

    it('should have a label with email', () => {
        render(
        <Contact />
);
        const label = screen.getByTestId(testIds.label)
        // expect(lab.getByLabelText).toBe("email")
        expect(label.tagName).toBe("LABEL")

    })

    it('should have a buttons', () => {
        render(<Contact />);
        const [add1] = screen.getAllByTestId(testIds.button)
        expect(add1.textContent).toBe("Send Message")
    })

    it('should have a input with placeholder', () => {
        render(<Contact />);
        const place=screen.getByPlaceholderText('John Smith')
        expect(place.placeholder).toBe("John Smith")
    })

    it('render full name component in the document', () => {
      const components=  render(<Contact />);
        const childElement=components.getByLabelText('Full Name')
        expect(childElement).toBeInTheDocument()
    })
    it('render email component in the document', () => {
        const components=  render(<Contact />);
          const childElement=components.getByLabelText('Email address')
          expect(childElement).toBeInTheDocument()
      })

      it('render textarea component in the document', () => {
        const components=  render(<Contact />);
          const childElement=components.getByLabelText('Example textarea')
          expect(childElement).toBeInTheDocument()
      })

   

    

   

    

})