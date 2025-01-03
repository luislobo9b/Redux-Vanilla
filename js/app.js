import store from "./store/store.js"
import createCounterActions from "./store/slices/counter/counterActions.js"

console.log("store", store)

const { getCounter, setCounter, decrementCounter, incrementCounter } = createCounterActions(store)

const btnGetCounter = document.querySelector("#getCounter"),
	btnSetCounter = document.querySelector("#setCounter"),
	inputCounter = document.querySelector("#inputCounter"),
	btnDecrementCounter = document.querySelector("#decrementCounter"),
	btnIncrementCounter = document.querySelector("#incrementCounter"),
	resultElement = document.querySelector("#result")

btnGetCounter.addEventListener("click", () => {
	const counter = getCounter()
	console.log(counter)
})

btnSetCounter.addEventListener("click", () => {
	const value = Number(inputCounter.value)
	inputCounter.value = 0
	setCounter(value)
})

btnDecrementCounter.addEventListener("click", () => {
	decrementCounter()
})

btnIncrementCounter.addEventListener("click", () => {
	incrementCounter()
})

store.subscribe(render)

function render() {
	const counter = getCounter()
	resultElement.textContent = counter.toString()
}