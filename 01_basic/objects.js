//singleton 
// A singleton is a design pattern that restricts a class to a single instance and provides a global point of access to it. 

// Object Literal
// An object literal is a comma-separated list of name-value pairs wrapped in curly braces.

const mysyms = Symbol("key1")

const jsuser ={
    name : "Gaurav Kumar",
    [mysyms] : "key",
    age : 24,
    location : "India",
    skills : ["JavaScript", "React", "Node.js"],
    email : "Gk22242@gmail.com"
}

// console.log(jsuser.email);
// console.log(jsuser["skills"])
// console.log(jsuser[mysyms]);

// jsuser.email = "gk215732@gmail.com"
// console.log(jsuser.email);

// Object.freeze(jsuser); // This will make the object immutable
// jsuser.name = "Gaurav Kumar Singh"; // This will not change the name
// console.log(jsuser.name); // Still "Gaurav Kumar"

// jsuser.greeting = function(){
//     console.log(`Hii Everyone, My name is ${this.name} and I am from ${this.location}`);
// }

// console.log(jsuser.greeting())

//const app = new Object(); // Creating an empty object using the Object constructor, this is singletone object 

const user = {}

user.name = "Gaurav Kumar Singh"
user.age = 24
user.location = "India"
user.id = "gk215732"
user.isLoggedIn = true

//console.log(user);

const user1 = {
    email : "fhs562@gmail.com",
    fullname : {
        username : {
             firstname : "Gaurav",
            lastname : "Kumar Singh"
        }
    }
}

//console.log(user1.fullname.username.firstname); // Accessing nested object properties

const object1 = { 1:"a", 2:"b", 3:"c" }
const object2 = { 1:"a", 2:"b", 3:"c" }

const obj3 = Object.assign({},object1, object2); // Merging two objects
//console.log(obj3); // { 1: 'a', 2: 'b', 3: 'c' }

const obj4 = {...object1, ...object2}; // Merging two objects using spread operator
//console.log(obj4)

//console.log(Object.keys(user)) // This will return an array of keys in the user object
//console.log(Object.values(user)) // This will return an array of values in the user object
//console.log(Object.entries(user)) // This will return an array of key-value pairs in the user object

// Destructuring Objects
const course = {
    courseName: "JavaScript",
    courseDuration: "3 months",
    coursePrice: 10000,
    courseInstructor: {
        name: "Gaurav Kumar",
        experience: "5 years"
    }
}

//course.courseInstructor

const {courseInstructor : inst} = course
//console.log(inst)
//console.log(inst.name) // Accessing nested object properties using destructuring


// API // Application Programming Interface
// An API is a set of rules that allows one piece of software to interact with another. It defines the methods and data formats that applications can use to communicate with each other.

// REST API // Representational State Transfer
// REST API is an architectural style for designing networked applications. It relies on a stateless, client-server communication model and uses standard HTTP methods like GET, POST, PUT, DELETE to perform operations on resources.

// JSON // JavaScript Object Notation
// JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used to transmit data between a server and a web application.

{
    "name": "Gaurav Kumar Singh",
    "course": "JavaScript",
    "price" : "10000"
}

[
    {},
    {}
]