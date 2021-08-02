import { formatNum } from "./helpers.js"

const formEl = document.querySelector("#form")
const minuteEl = document.querySelector(".minute-value")
const secondEl = document.querySelector(".second-value")
let intervalId = null

formEl.addEventListener("submit", function (e) {
  e.preventDefault()

  const form = e.target
  let minute = Number.parseInt(form.elements.minute.value)
  let second = Number.parseInt(form.elements.second.value)

  if (isNaN(minute)) {
    minute = 0
  }

  if (isNaN(second)) {
    second = 0
  }

  if (minute < 0 || second < 0) {
    return alert("Input must larger than 0!")
  }

  minuteEl.innerHTML = formatNum(minute)
  secondEl.innerHTML = formatNum(second)

  intervalId = null
})

document.querySelector(".start-btn").onclick = function (e) {
  if (
    Number.parseInt(minuteEl.textContent) === 0 &&
    Number.parseInt(secondEl.textContent) === 0
  ) {
    return
  }

  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
    return
  }

  intervalId = setInterval(intervalFun, 1000)
}

document.querySelector(".stop-btn").onclick = function (e) {
  clearInterval(intervalId)
  minuteEl.textContent = "00"
  secondEl.textContent = "00"
}

function intervalFun() {
  const se = Number.parseInt(secondEl.textContent)
  const mi = Number.parseInt(minuteEl.textContent)

  if (se > 0) {
    secondEl.textContent = formatNum(se - 1)
  } else {
    if (mi === 0) {
      return clearInterval(intervalId)
    }
    secondEl.textContent = 59
    minuteEl.textContent = formatNum(mi - 1)
  }
}
