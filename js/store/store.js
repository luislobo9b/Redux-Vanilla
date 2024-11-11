import * as Redux from "../../node_modules/redux/dist/redux.browser.mjs"
console.log("Redux", Redux)

const initialState = {
	counter: 0
}

function counterReducer(state = initialState, action) {
	console.log("state", state)
	console.log("action", action)

	let counter = state.counter

	switch(action.type) {
		case "counter/set":
			state = {...state, counter: action.payload}
			break
		case "counter/decrement":
			state = {...state, counter: counter - 1}
			break
		case "counter/increment":
			state = {...state, counter: counter + 1}
			break
	}

	return state
}

const store = Redux.createStore(
	counterReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log("store", store)

// utils
function getCounter() {
	const state = store.getState()
	return state.counter
}

function setCounter(value) {
	store.dispatch({
		type: "counter/set",
		payload: value
	})
}

function decrementCounter() {
	store.dispatch({
		type: "counter/decrement"
	})
}

function incrementCounter() {
	store.dispatch({
		type: "counter/increment"
	})
}

export {
	store,
	getCounter,
	setCounter,
	decrementCounter,
	incrementCounter
}