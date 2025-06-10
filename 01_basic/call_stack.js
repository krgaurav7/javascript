//console.log("Hello Everyone !")

// javascript execution context

// Global Execution Context (this)
// console.log(this); // this refers to the global object in non-strict mode

// function execution context
//eval execution context 


// - global execution context
// - memory creation phase
// - code execution phase

//-----------call stack-------------------
// call stack is a data structure that keeps track of function calls in JavaScript




//++++++++++==== Control flow of execution ====++++++++++++++

// if 


//const isUserLoggedIn = false;

// 2 =="2" // loose equality check
// 2 ==="2" // strict equality check
// if(isUserLoggedIn) {
//     console.log("User Logged In");
// } else {
//     console.log("User Not Logged In");
// }



// const score = 200

// if(score >100){
//     let power = fly 
//     console.log("You have super ${power");
// } 
// console.log("You can ${power}");  // here power is not defined because it is block scoped due to let keyword 

// nested if else statements;

// const score = 100;
// if(score > 100) {
//     console.log("You have super power");
// }else if(score > 50) {
//     console.log("You have normal power");
// }else {
//     console.log("You have no power");
// }

const isUserLoggedIn = true;
const debitCard = true;

// && is the logical AND operator
// || is the logical OR operator
// ! is the logical NOT operator

// if(isUserLoggedIn && debitCard) {
//     console.log("You can buy the product");
// }else if(isUserLoggedIn && !debitCard) {
//     console.log("You can not buy the product, you need a debit card");
// }else if(!isUserLoggedIn && debitCard) {
//     console.log("You can not buy the product, you need to login");
// }else {
//     console.log("You can not buy the product, you need to login and have a debit card");
// }

// switch case statements

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid month");
        break;
}