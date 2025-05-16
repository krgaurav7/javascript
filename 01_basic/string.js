const name = "Gaurav"
const count = 50

console.log(name + count) // Gaurav50

console.log(`Hello my name is ${name} and I have won ${count} times`)

const gameName = new String("Gaurav");
console.log(gameName) // [String: 'Gaurav']
console.log(gameName.length) // 6
console.log(gameName.toUpperCase())
console.log(gameName.__proto__)
console.log(gameName.charAt(3))
console.log(gameName.indexOf("G")) // 0