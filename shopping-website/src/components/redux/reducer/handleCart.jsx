import { ADDITEM,DELITEM, SEARCHDATA_SUCCESS,
  SEARCHDATA_REQUEST,
  SEARCHDATA_FAILURE,
   } from "../action/actiontype";
const cart = localStorage.getItem("mycart")? JSON.parse(localStorage.getItem("mycart")):[];
const handleCart = (state=cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADDITEM:
      //Check if Product is Already Exist
      const exist  = state.find((x) => x.id === product.id);
      if (exist) {
        //increase the quantity
        return state.map((x) =>
          x.id === product.id
            ? {
                ...x,
                qty: x.qty + 1,
              }
            : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
    case DELITEM:
      const exist1 = state.find((x) => x.id === product.id);
      let newarr;
      if (exist1.qty === 1) {
         newarr=state.filter((x) => x.id !== exist1.id);
      } else {
        newarr=state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      localStorage.setItem("mycart", JSON.stringify(newarr))
      console.log("newarray",newarr);
      return newarr


      case SEARCHDATA_REQUEST: {
        return {
            ...state,

           
        }
    }

    case SEARCHDATA_SUCCESS: {
      return {
          ...action.payload
         
      }
  }

   
  case SEARCHDATA_FAILURE: {
    return {
        ...state,

    }
}

      break;
    default:
        return state;
      break;
  }
};

export default handleCart
