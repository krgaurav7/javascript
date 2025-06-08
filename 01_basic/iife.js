//IIFE - Immediately Invoked Function Expression
//console.log("IIFE - Immediately Invoked Function Expression");


(function chai(){// name IIFE
    console.log(`DB CONNECTED`)
}) (); //IIFE - Immediately Invoked Function Expression

//Simple IIFE
(  (name) =>  {
    console.log(`DB CONNECTED 2 ${name}`)
})('Gaurav')