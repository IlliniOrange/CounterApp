// javascript
let headerEl = document.getElementById("header-el")
let count = 0
headerEl.textContent = count

function increment() {
    count += 1
    displayResult(count)
}

function clearCounter() {
    count = 0
    displayResult(count)
}

function displayResult(result) {
    headerEl.textContent = result
}