// const score = 400

// console.log(score)

// const s2 = new Number(50000)
// console.log(s2)

// console.log(s2.toString().length)
// console.log(s2.toExponential()) // scientific notation
// console.log(s2.toFixed(2)) // 2 decimal places
// console.log(s2.toPrecision(3)) // 3 significant digits
// console.log(s2.toLocaleString()) // locale string


//+++++++++++++++++++++++++++math++++++++++++++++++++++++++++++

console.log(Math)

console.log(Math.abs(-13)) // absolute value
console.log(Math.ceil(4.3)) // round up
console.log(Math.floor(4.9)) // round down
console.log(Math.round(4.5)) // round to nearest integer
console.log(Math.max(1, 2, 43, 4, 5)) // maximum value
console.log(Math.min(1, 2, 43, 4, 5)) // minimum value
console.log(Math.random()) // random number between 0 and 1
console.log(Math.random() * 10) // random number between 0 and 10
console.log(Math.random() * 10 + 1) // random number between 1 and 10


const min = 10
const max = 90

console.log(Math.floor(Math.random() * (max - min + 1) + min)) // random number between min and max
