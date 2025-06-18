const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNexticon = document.querySelectorAll(".icons span")

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth()

const months = [
  "Gennaio",
  "Febbrario",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
]

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    LastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    LastDayofMonth = new Date(currYear, currMonth, LastDateofMonth).getDay(),
    LastDateofLastMonth = new Date(currYear, currMonth, 0).getDate()

  let liTag = " "

  for (let i = firstDayofMonth; i > 0; i--) {
    // creo le liste degli ultimi giorni del mese scorso
    liTag += `<li class= "inactive">${LastDateofLastMonth - i + 1}</li>`
  }

  for (let i = 1; i <= LastDateofMonth; i++) {
    // creo le liste di tutti i giorni del mese corrente
    let isToday =
      i === date.getDate() &&
      (currMonth === new Date().getMonth()) &
        (currYear === new Date().getFullYear())
        ? "active"
        : ""
    liTag += `<li class="${isToday}">${i}</li>`
  }

  for (let i = LastDayofMonth, count = 1; i < 6; i++, count++) {
    // creo le liste dei primi giorni del mese prossimo
    liTag += `<li class="inactive">${count}</li>`
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`
  daysTag.innerHTML = liTag
}
renderCalendar()

prevNexticon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Aggiungo il click event ad entrambe le icone
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth)
      currYear = date.getFullYear()
      currMonth = date.getMonth()
    } else {
      date = new Date()
    }

    renderCalendar()
  })
})
