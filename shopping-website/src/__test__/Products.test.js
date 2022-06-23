import { fireEvent,getByTestId, render, screen, waitFor } from "@testing-library/react"
import { act } from 'react-dom/test-utils';

import { BrowserRouter,Router } from "react-router-dom"
import { createMemoryHistory } from 'history';

import userEvent from "@testing-library/user-event"
import Products from "../components/product/Products";
import { Provider } from "react-redux";
import { store } from "../components/redux/store/store";
import db from "../db/db.json"
// const unmockedFetch = global.fetch
  
// act(()=>{beforeAll(() => {
//   global.fetch = () =>
//     Promise.resolve({
//       json: ()=>Promise.resolve(db.data),
//     })
// })})

// afterAll(() => {
//   global.fetch = unmockedFetch
// })

describe("products.jsx tests", () => {
  const history = createMemoryHistory({ initialEntries: ['/products'] });
   
    it('should pass', async () => {
        // const history = createMemoryHistory({ initialEntries: ['/products'] });
      //  console.log("history",history)
        act(()=>{render(
      
          <BrowserRouter history={history}>
              <Provider store={store}>

            <Products />
             </Provider>

         </BrowserRouter> 

        );})
      // const json=await getProducts()
       expect(history.location.pathname).toBe('/products');
       await waitFor(()=>async()=>{  
        fireEvent.click(screen.getAllByTestId('btn')[0]);
         //screen.debug(undefined,50000)
         await waitFor(()=>expect(history.location.pathname).toBe('/product'))
       })
      });

    

   

    

})