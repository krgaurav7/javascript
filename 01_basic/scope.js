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

one ()