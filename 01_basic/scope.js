//console.log("Scope")
//{} - scope block
// let, const, var - variable declaration keywords
// let - block scoped variable
// const - block scoped constant
// var - function scoped variable = can be redeclared

let a = 10
const b = 34
var c = 35

// console.log(a)
// console.log(b)
// console.log(c)

function one (){
    const username = "Gaurav"
    function two (){
        const website = "Youtube"
        console.log(username)
    }
    //console.log(website) // ReferenceError: website is not defined
    two()
}

//one ()


//
// ------------- Arrow Functions ------------- and This functions
const user = {
    username : "Gaurav",
    price : 999,

    welcomeMessage :function(){
        console.log(`${this.username} is welcome to the course at price ${this.price}`)
       // console.log(this)
    }
}
user.username = "Gaurav Singh"
//console.log(user)
//user.welcomeMessage()
//console.log(this) // this refers to the global object in non-strict mode, undefined in strict mode

function one1 (){
    console.log(this) // this refers to the global object in non-strict mode, undefined in strict mode
}

//one1()

const chai = function(){
    let username = "Gaurav Singh"
    console.log(this.username)
}

// chai()


// Arrow function

const chai1 = () =>{
    let username = "Gaurav Singh"
    console.log(this)
}
//chai1()

//const addTwo = (a,b) =>{
  //  return a+b
//}


const addTwo = (a,b) => ( a+b ) // implicit return

const addThree = (a,b,c) => ({username : "Gaurav Singh"}) // explicit return

console.log(addThree(4,6,5))
console.log(addTwo(4,6))