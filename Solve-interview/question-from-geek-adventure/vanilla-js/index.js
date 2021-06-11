const dropdownMenu = document.querySelector(".dropdown-menu")
const dropdownBtn = document.querySelector("#dropdownMenuButton")

let currentQuestion = 1
const listener = []

const renderDropdownBtn = (curQues) => {
  dropdownBtn.innerHTML = `Câu ${curQues}`
}

const toggleCollapse = (targetVal) => {
  const idVal = "ques-collapse-" + targetVal
  const target = document.querySelector(`#${idVal}`)
  const idExpandTarget = target.dataset.target
  const expandTargetEl = document.querySelector(idExpandTarget)
  if (!expandTargetEl.classList.value.includes("show")) target.click()
}

const setCurrentQuestion = (newVal) => {
  currentQuestion = newVal
  listener.forEach((l) => l(newVal))
}

dropdownMenu.addEventListener("click", (e) => {
  const val = e.target.attributes["data-value"].value
  setCurrentQuestion(Number.parseInt(val))
})

const cardHeaders = document.querySelectorAll("[id^='ques-collapse-']")

cardHeaders.forEach((card) => {
  card.addEventListener("click", (e) => {
    const val = Number.parseInt(card.id[card.id.length - 1])
    console.log(val)
    setCurrentQuestion(val)
  })
})

listener.push(renderDropdownBtn)
listener.push(toggleCollapse)
