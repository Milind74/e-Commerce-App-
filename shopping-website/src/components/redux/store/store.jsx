import {createStore,applyMiddleware,compose} from "redux"
import rootReducers from "../reducer/index"
import thunk from "redux-thunk"


let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}
// const composeEnhancers =
//     process.env.NODE_ENV === "development" ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
//     null || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducers, enhancer)
