// Primitive 

// Primitive data types are the most basic data types in JavaScript. They are immutable and represent a single value.

// The 7 primitive data types in JavaScript are:
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Reference data types are more complex data types. They are mutable and can hold multiple values. They are also known as non-primitive data types.

// The 3 reference data types in JavaScript are:
// 1. Object
// 2. Array
// 3. Function 


// primitive data types
const score = 100; 
const scoreValue = 100.32

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id )
console.log(anotherId)
console.log(id === anotherId) // false
// Symbol is a unique and immutable data type. It is often used to create unique identifiers for object properties.

const bigNumber = 3767343346524654983n

// reference data types 

const players =["Dhoni", "Rohit", "Virat"] // array
console.log(players)

const player ={
    name: "Dhoni",
    age: 41,
    isCaptain: true,
    team: "India",
} // object
console.log(player)

const myFunctin = function(){
    console.log("Hello World")
} 
// function
console.log(myFunctin)


//types of operators result

//undefined = undefined
//null = object
//boolean = boolean
//string = string
//number = number
//bigint = bigint
//symbol = symbol
//object = object
//array = object
//function = function

