// for 

// for(let k = 0; k < 10; k++) {
//     let n = k+1
//     console.log(n);
// }


// nested for loop
//  for (let i = 1; i < 11; i++) {
//     console.log(`Multiplication Table of ${i}:`);
//     for(let j = 1; j < 11; j++) {
//         let k = i*j
//         console.log(`${i} x ${j} = ${k} `);
//     }
//     console.log('-------------------');
// }

const array1 = ['Rohit', 'Rohan', 'Rahul', 'Ramesh', 'Rajesh', 'Rakesh', 'Ram', 'Ravi', 'Rani', 'Rekha'];

// for(let i = 0; i<array1.length; i++) {
//     console.log(array1[i])
// }

// break : it is used to exit the loop.
// continue : it is used to skip the current iteration and continue with the next iteration.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for(let i = 0; i<array1.length; i++) {
//     if(array1[i] === 'Ramesh') {
//         break;
//     }
//     console.log(array1[i])
// }
//==========================================================================
// for(let i = 0; i<array1.length; i++) {
//     if(array1[i] === 'Ramesh') {
//         continue;
//     }
//     console.log(array1[i])
// }

// while loop : it is used to execute a block of code repeatedly as long as the specified condition is true.

// let i = 0
// while(i <= 10){
//     console.log(i);
//     i = i+3;
// }

// do while loop : it is used to execute a block of code at least once and then repeatedly as long as the specified condition is true.

//let i = 50;
// do {
//     console.log(i);
//     i = i + 5;  
// } while(i<100)


// high order array loop methods

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(const num of arr){
//     console.log(num);
// }

// const greeting = "Hello World!"
// for(const ch of greeting){
//     if(ch === ' '){
//         continue;
//     }
//     console.log("character is = ",ch)
// }

// Maps : 

const map = new Map()
map.set('IN','India')
map.set('EN', 'England')
map.set('WI','West Indies')

//console.log(map)

for(const [key,value] of map){
    //console.log(key, ':-',value)
}

// const myObject = {
//     'game1' : 'Cricket',
//     'game2' : 'Football',
//     'game3' : 'Hockey',
// }

// for(const [key,value] of myObject){
//     console.log(key, ':-', value);
// }

const myObject = {
    js : 'JavaScript',
    py : 'Python',
    rb : 'Ruby',
}

for(const key in myObject){
    //console.log(`${key} for shortcup is ${myObject[key]}`)
}

const languagearray = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];

for(const key in languagearray){
    console.log(`${key} - ${languagearray[key]}`);
}