import {  render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"

import { BrowserRouter, } from "react-router-dom"

import Checkout from "../components/payment/Checkout"
import { store } from "../components/redux/store/store"
const testIds = {
    placeholder:"username",
    
}
describe("Checkout.jsx tests", () => {

    it('should render without an error with initial values',async () => {
        render(
            <BrowserRouter>
             <Provider store={store}>
        <Checkout/>
        </Provider>
        </BrowserRouter>)
        const buttonlist =await screen.findAllByRole("button")

        expect(buttonlist).toHaveLength(1)
    })
    it('email input should accept email', () => {
        render(
            <BrowserRouter>
            <Provider store={store}>

        <Checkout />
        </Provider>
        </BrowserRouter>);
        const email=screen.getByPlaceholderText('you@example.com')
        userEvent.type(email,"milind")
        expect(email.value).not.toMatch("milind@gmail.com")
        // expect(place.placeholder).toBe("username")
    })
  
    it('firsname should accept first name', () => {
        render(
            <BrowserRouter>
            <Provider store={store}>

        <Checkout />
        </Provider>
        </BrowserRouter>);
        const firsname=screen.getByPlaceholderText('firstName')
        expect(firsname).toHaveAttribute("type","text")

    })
    it('lastname should accept last name', () => {
        render(
            <BrowserRouter>
            <Provider store={store}>

        <Checkout />
        </Provider>
        </BrowserRouter>);
        const lastname=screen.getByPlaceholderText('lastName')
        expect(lastname).toHaveAttribute("type","text")

    })

    // it('username input should accept email', () => {
    //     render(
    //         <BrowserRouter>
    //   <Provider store={store}>
    //     <Checkout />
    //     </Provider>
    //     </BrowserRouter>);
    //     const name=screen.getByPlaceholderText('Username')
    //     userEvent.type(name,"milind")
    //     expect(name.value).not.toMatch("milind")
    //     // expect(place.placeholder).toBe("username")
    // })
   
   

    

    

   

    

})