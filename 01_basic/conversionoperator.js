let score = undefined
//console.log(typeof score)

let valueNumber = Number(score)
//console.log(typeof valueNumber)

//console.log(valueNumber) // NaN : not a number

// "33" => 33
// "33.3" => 33.3
// "33.3abc" => NaN
// "abc" => NaN
//null => 0
//undefined => NaN
// true => 1
// false => 0

let isLoggedIn = "Gaurav"


let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn) // true

// 1 => true
// 0 => false
// "Gaurav" => true
// " " => false


let someNumber = 33
let stringNumber = String(someNumber)

//console.log(stringNumber)

// ************ operations ************

let value =3
let negValue = -value

// console.log(negValue)
// console.log(2%5)

// console.log(2 + "5")
// console.log("5" +2 +2) // 522
// console.log(2 + 2 + "5") // 45
// console.log(2 - "5") // 2-5 = -3

console.log(+true)

let gameCounter = 100
gameCounter++
console.log(gameCounter)