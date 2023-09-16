// const days = [
//   data.sunday['1'], 
//   data.monday['1'],
//   data.tuesday['1'], 
//   data.wednesday['1'],
//   data.thursday['1'], 
//   data.friday['1'], 
//   data.saturday['1'], 
//   ]

// let getMinutes = () => {
//   let date = new Date()
//   return date.getHours() * 60 + date.getMinutes()
// }

// let getDay = () => {
//   let date = new Date()
//   return date.getDay()
// }

// let nowTable = new Table(document.querySelector(".table__wrapper"), "table-now", ["№", "Время", "Урок", "Преподаватель", "Кабинет"])

// let currentDay = getDay()
// nowTable.render(days[currentDay])

// let currentRow = Table.checkTimes(nowTable.times, getMinutes())
// nowTable.setActiveRow(currentRow)

// setInterval(() => {
//   if (currentDay !== getDay()) { // Reload day
//     currentDay = getDay()
//     nowTable.render(days[currentDay])
//   }
  

//   if (currentRow !== Table.checkTimes(nowTable.times, getMinutes())) { // Reload row
//     currentRow = Table.checkTimes(nowTable.times, getMinutes())
//     nowTable.setActiveRow(currentRow)
//   }

// }, 1000);