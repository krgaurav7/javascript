const num1 = [1, 2, 3, 4, 5];

const k = num1.map((num)=>{
    return num+2;
})

//console.log(k);

const num2 = num1
                .map((num)=> num *10)
                .map((num) => num+3)

//console.log(num2)

//+++++++++++++++++++++++++++++++++++++++++++++++==

// reduce method in array 
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const myNums = [1, 2, 3, 4, 5,89];

let previousValue = 0;
const total = myNums.reduce((accumulator,currentValue)=>{
    return  accumulator = accumulator + currentValue;
},previousValue)


// accumulator = previousValue
// currentValue = myNums[i]
//initial value = 0


//console.log(total)


const shoppingCart = [
    {
    product: 'shirt',
    price: 20,
    quantity: 2
}, {
    product: 'pants',
    price: 30,
    quantity: 1
}, {
    product: 'shoes',
    price: 50,
    quantity: 1
}
]

const totalPrice = shoppingCart.reduce((acc,item)=> acc + item.price , 0)

console.log(totalPrice)