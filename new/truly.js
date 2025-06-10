// const userEmail = `Gk3734@gmail.com`

// if(userEmail){
//     console.log(`Got user email`)
// } else {
//     console.log(`No user email found`)
// }

//falsy values

//false , 0, -0, "", null, undefined, NaN, BigInt(0), BigInt(-0), 0n, 
//Symbol(), Symbol(""), Symbol(0), Symbol(false), Symbol(null), Symbol(undefined), Symbol(NaN), Symbol(BigInt(0)), Symbol(BigInt(-0)), Symbol(0n)

//truthy values
//true, 1, -1, "0", "false", "null", "undefined", "NaN", BigInt(1), BigInt(-1), 1n,

// Nullish Coalescing Operator
// The nullish coalescing operator (??) is used to provide a default value when the left-hand side expression is null or undefined.
// Null and undefined are considered "nullish" values, while other falsy values like 0, false, and "" are not.

// let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 49
// console.log(val1)



//Ternary Operator
// The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value if true, and a value if false.

//condition ? trueValue : falseValue;

const iceTeaPrice = 10

iceTeaPrice > 80 ? console.log(`Expensive`) : console.log(`Cheap`)