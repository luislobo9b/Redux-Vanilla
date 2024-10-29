import { store, getCounter, setCounter, decrementCounter, incrementCounter } from "./store.mjs"

const btnGetCounter = document.querySelector("#getCounter"),
	btnSetCounter = document.querySelector("#setCounter"),
	inputCounter = document.querySelector("#inputCounter"),
	btnDecrementCounter = document.querySelector("#decrementCounter"),
	btnIncrementCounter = document.querySelector("#incrementCounter"),
	resultElement = document.querySelector("#result")