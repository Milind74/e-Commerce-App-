import{render} from "@testing-library/react"
import Login from "../Auth/Login"

// test('username input should be rendered', () => { 
//     render(<Login/>)
//     const userInputEl=screen.getByPlaceholderText(/username/i)
//     expect(userInputEl).toBeInTheDocument()

//  })


 
test('username should be empty', () => { 
    render(<Login/>)
    const userInputEl=screen.getByPlaceholderText(/username/i)
    expect(userInputEl.value).toBe("") 

 })

 
// test('password input should be rendered', () => { 
//     render(<Login/>)
//     const passwordInputEl=screen.getByPlaceholderText(/password/i)
//     expect(passwordInputEl).toBeInTheDocument()

//  })

 
// test('button input should be rendered', () => { 
//     render(<Login/>)
//     const buttonInputEl=screen.getByRole(/button/i)
//     expect(buttonInputEl).toBeInTheDocument()

//  })