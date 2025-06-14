const coding = ['c++', 'javascript', 'python','ruby', 'go', 'swift'];

// coding.forEach(  function (item){
//     console.log(item);
// })

coding.forEach( (item) => {
    //console.log(item);
})

function printMe(item){
    //console.log(item)
}

//coding.forEach(printMe);

coding.forEach( (item, index, arr) =>{
    //console.log(item,index,arr)
})


// Example of using forEach with an array of objects
const myCoding = [
    {
        languageName: 'c++',
        languageNameLength: 3
    },{
        languageName: 'javascript',
        languageNameLength: 10
    },{
        languageName: 'python',
        languageNameLength: 6
    },{
        languageName: 'ruby',
        languageNameLength: 4
    }
]

myCoding.forEach((item)=>{
   // console.log(item.languageName)
   // console.log(item.languageNameLength)
})

///+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const myCoding2 = ['c','c++','javascript','python']

const values = myCoding2.forEach((item) =>{
    //console.log(item);
})

//console.log(values); // undefined, because forEach does not return a value

const nums = [1, 2, 3, 4, 5];

const nums2 = nums.filter((num)=> {
    return num > 2;
})
//console.log(nums2); // [3, 4, 5]

const nums3 = []
nums.forEach((num) =>{
    if(num >2){
        nums3.push(num)
    }
})

//console.log(nums3)


const books = [
    { title: 'Book 1', publish: '1984' , price : 10 , eddition: 'first'},
    { title: 'Book 2', publish: '1973' , price : 15, eddition: 'second'},
    { title: 'Book 3', publish: '9234' , price : 20, eddition: 'first'},
    { title: 'Book 4', publish: '1253' , price : 25, eddition: 'fourth'},
    { title: 'Book 5', publish: '6382' , price : 30, eddition: 'first'}
]

const userBooks = books.filter((bk)=>{
    if(bk.eddition === 'first'){
        return bk;
    }
})

console.log(userBooks);