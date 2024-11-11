function createCounterActions(store) {
	function getCounter() { // selectCounter
		const state = store.getState()
		return state.counter.counter
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

	return {
		getCounter,
		setCounter,
		decrementCounter,
		incrementCounter
	}
}

export default createCounterActions