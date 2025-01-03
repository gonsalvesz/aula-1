const { DateTime, Interval } = require('luxon')

const agora = DateTime.now()
console.log(agora.month)
console.log(new Date().toLocaleString('pt-BR'))
// console.log(new Date().toLocaleString('en-US'))

 const dataDoAniversario = DateTime.fromFormat('03/10/1998', 'dd/MM/yyyy')
 console.log(dataDoAniversario.day)
 console.log(dataDoAniversario.month)
//  console.log(new Date().getDate())

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length('year')
console.log(Math.floor(idade))
