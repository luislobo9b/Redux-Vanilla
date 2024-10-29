import * as Redux from "../node_modules/redux/dist/redux.browser.mjs"
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