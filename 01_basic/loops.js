// let ans =0;

// for(let i =1; i<=50; i++){
//     ans = ans + i;
// }
// console.log(ans);

//-------------Date and Time-------------------

// let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.getTime())

//console.log(typeof mydate)

let mytmestamp = Date.now()
let newdate = new Date(mytmestamp)
console.log(mytmestamp)
console.log(Math.floor(mytmestamp/1000))
console.log(newdate.toLocaleDateString())

let k = newdate.toLocaleString('default',{
    weekday: 'long',
})
console.log(k)

