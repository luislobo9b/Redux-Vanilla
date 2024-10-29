import { store, getCounter, setCounter, decrementCounter, incrementCounter } from "./store.mjs"

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