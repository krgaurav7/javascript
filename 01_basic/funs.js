// Functions in JavaScript
function name (){
    console.log("Hello, World!");
    console.log("This is a function in JavaScript.");
}
//name()

function addTwoNumbers(a,b){ // a and b are parameters
    c = a+b;
    console.log(c)
}
//addTwoNumbers(4,57) // 4 and 57 are arguments

function userLoggedIn(username){
    if(username === undefined || username === null || username === ""){
        console.log("Please provide a valid username");
    } else {
    return `${username} just logged in`;
    }
}

 //console.log(userLoggedIn("Gaurav Kumar")) // This will call the function and return the string


 // shoping cart example
 function calculateCartPrice(num1){
    return num1
 }
  function calculateCartPrice(...num1){
    return num1
 }
// console.log(calculateCartPrice(2))
 //console.log(calculateCartPrice(4,6,7))

 const user ={
    username : "Gaurav Kumar",
    price : 1000
 }

 function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
 }

 handleobject(user)

 // scope of variables
// function scopeExample(){
//     var a = 10; // function scope
//     let b = 20; // block scope
//     const c = 30; // block scope

//     if(true){
//         var d = 40; // function scope
//         let e = 50; // block scope
//         const f = 60; // block scope
//         console.log(a, b, c, d, e, f); // all variables are accessible here
//     }

//     console.log(a, b, c, d); // e and f are not accessible here
// }

// scopeExample()