let nowTable = new Table(document.querySelector(".table__wrapper"), "table", ["Время", "Занятие", "Преподаватель", "Кабинет"])

let getDay = () => {
  let date = new Date()
  return date.getDay()
}

nowTable.editCaption(data[getDay()].name)

nowTable.addContent(data[getDay()]['1'])
console.log(nowTable)
console.log(data[getDay()].name)