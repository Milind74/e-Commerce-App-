import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import Contact from "../components/contact/Contact"
import renderer from "react-test-renderer"
import Footer from "../Footer/Footer"
import Login from "../components/Auth/Login"
import { BrowserRouter,Router } from "react-router-dom"
import { createMemoryHistory } from 'history';

import userEvent from "@testing-library/user-event"
const testIds = {
    placeholder:"username",
    
}
describe("login.jsx tests", () => {

    it('should render without an error with initial values',async () => {
        render(
            <BrowserRouter>
        <Login/>
        </BrowserRouter>)
        const buttonlist =await screen.findAllByRole("button")

        expect(buttonlist).toHaveLength(1)
    })
    it('email input should accept email', () => {
        render(
            <BrowserRouter>
        <Login />
        </BrowserRouter>);
        const email=screen.getByPlaceholderText('username')
        userEvent.type(email,"milind")
        expect(email.value).not.toMatch("milind@gmail.com")
        // expect(place.placeholder).toBe("username")
    })

    it('password input should have type password', () => {
        render(
            <BrowserRouter>
        <Login />
        </BrowserRouter>);
        const password=screen.getByPlaceholderText('password')

        expect(password).toHaveAttribute("type","password")
    })

   

    it('should be able to submit the form', () => {
        const {getByTestId}=
        render(
            <BrowserRouter>
        <Login />
        </BrowserRouter>);
       const submitBtn=getByTestId("btn")
       const emailinput=screen.getByPlaceholderText('username')
       const passwordinput=screen.getByPlaceholderText('password')

        fireEvent.click(submitBtn)
        
expect(emailinput.value).toMatch("")
        expect(passwordinput.value).toMatch("")
    })
   
   
   



    it('should pass', () => {
        const history = createMemoryHistory({ initialEntries: ['/login'] });
       render(
          <BrowserRouter history={history}>

            <Login />
         </BrowserRouter> 
        );
        const email=screen.getByPlaceholderText('username')
        userEvent.type(email,"abc@gmail.com")
        const password=screen.getByPlaceholderText('password')
        userEvent.type(password,"12345")

        expect(history.location.pathname).toBe('/login');
        fireEvent.click(screen.getByTestId('btn'));
        screen.debug(undefined,50000)
        
        setTimeout(()=>{expect(history.location.pathname).toBe('/products')
        },1000)
      });
   
   
    

   

    

})