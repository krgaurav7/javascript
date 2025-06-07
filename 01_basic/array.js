const arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]) 
// }

//arr.push(8) // Adds an element to the end of the array
//console.log(arr)

//arr.pop() // Removes the last element from the array
//console.log(arr)

//arr.unshift(9) // Adds an element to the beginning of the array
//arr.shift() // Removes the first element from the array

// const na = arr.join()
// console.log(arr)
// console.log(na)

//console.log(arr)

// const arr1 = arr.slice(1, 3) // Creates a new array with elements from index 1 to 2
// console.log(arr1)

// console.log("original = ",arr)

//const arr2 = arr.splice(1,3) // Removes elements from index 1 to 3 and returns them
//console.log(arr2)
//console.log("after splice = ", arr)

const marvel = ["Ironman", "Thor", "Hulk", "Captain America"]
const dc = ["Batman", "Superman"]

// marvel.push(dc)
// console.log(marvel)
let merge = dc.concat(marvel) // Combines two arrays without modifying the original arrays
console.log(merge);

let s1 = 234
let s2 = 354
let s3 = 643

console.log(Array.of(s1,s2,s3))

console.log(Array.from("Gaurav")) // Converts a string to an array of characters