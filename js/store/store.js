import * as Redux from "../../node_modules/redux/dist/redux.browser.mjs"
import counterReducer from "./slices/counter/counterSlice.js"

console.log("Redux", Redux)

const rootState = {
	counter: counterReducer
}

const rootReducer = Redux.combineReducers(rootState)

const store = Redux.createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store