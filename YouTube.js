// 
// 🚀 Main ES6 Topics List
// let & const
// Hoisting
// Scope
// Template Literals
// Arrow Functions
// Default Parameters
// Rest Operator
// Spread Operator
// Destructuring
// Enhanced Object Literals
// for...of Loop
// Array Methods (map, filter, reduce, find)
// Classes
// Modules (import/export)
// Promises
// Async / Await
// Optional Chaining (?.)
// Nullish Coalescing (??)
// Set & Map
// Symbol
// Iterators & Generators
// 
// 
// 
// 
// 🔥 MOST IMPORTANT TOP 8
// Ye MUST strong karo:
// let / const
// template literals
// arrow functions
// destructuring
// spread/rest
// map/filter/reduce
// promises
// async/await
// 👉 Ye React ki backbone hain 😎🔥
// 
// *******************************************************************************
// Advance Javascipt ES6 | Class # 18 in Urdu/Hindi | Web 3.0 and Metaverse Course
// *******************************************************************************
// Hoisting

// let a = "Hello Wolrd";
// function greet(){
//     a = "Hello Advace JS"

// }
// greet()
// console.log(a);

// 
// if(true){
//     var a = "welcome User..."
// }
// console.log(a);
// 
// if(true){
//     let a = "welcome User..."
//     console.log(a);
// }

// 
// let firstName = "Syed";
// firstName = "Waleed";
// console.log(firstName);

// 
// const firstName = "Syed";
// firstName = "Waleed";
// console.log(firstName);

// 
// Template Literals
// 
// let firstName = "Syed";
// let lastName = "Waleed";

// console.log(firstName + " " + lastName);
// console.log(`Welcome ${firstName} ${lastName}`);
// 

// let arr = ["Abc", 123, true, 100];
// let [firstValue,secondValue = 50 ,thirdValue,forthValue,] = arr;
// console.log(firstValue);
// console.log(secondValue);
// console.log(thirdValue);

// 
// let obj = {
// name : "Waleed",
// age : 22,
// city: "Karachi"
// }

// let {name: myName , age , city} = obj;
// console.log(myName);


// 
// let age = +prompt("Enter Your Age") ;

// let check = age < 20 || age> 30 ? console.log("Allowed.."): console.log("Not Allowed..");

// method array ES5****************
// let arr = [1,2,3,4,5];
// let arr2 = ["Syed","Waleed","ali",];

// let result = arr.concat(arr2);
// console.log(result);
// 
// 
// Spread Operator
// let arr = [1,2,3,4,5];
// let arr2 = [...arr, "Syed","Waleed","ali",];
// console.log(arr2);

// 
// let bool = false; 
// let check = bool && "abc";
// console.log(check);
// 
// let bool = true; 
// let check = bool && "abc";
// console.log(check);
// 
// let bool = false; 
// let check = bool || "abc";
// console.log(check);

// 
// Math.round()
// Math.ceil()
// Math.floor()
// Math.trunc()
// Math.random()
// Math.max()
// Math.min()
// Math.pow()
// Math.sqrt()
// Math.cbrt()
// Math.abs()
// Math.sign()
// Math.sin()
// Math.cos()
// Math.tan()
// Math.log()
// Math.log10()
// Math.exp()
// Math.PI
// Math.E
// 

// JavaScript mein String ke bohat saare methods hain, lekin ye sabse important hain:
// length
// toUpperCase()
// toLowerCase()
// trim()
// trimStart()
// trimEnd()
// charAt()
// at()
// indexOf()
// lastIndexOf()
// includes()
// startsWith()
// endsWith()
// slice()
// substring()
// replace()
// replaceAll()
// split()
// concat()
// repeat()
// padStart()
// padEnd()
// search()
// match()

// Interview / Assignment ke liye sabse important:
// length
// toUpperCase()
// toLowerCase()
// trim()
// indexOf()
// includes()
// slice()
// substring()
// replace()
// split()
// startsWith()
// endsWith()
    
// Ye 12 methods achi tarah aa jayein to beginner se intermediate level tak ka kaam ho jata hai.

// 
// let firstName = "Waleed";
// console.log(firstName.startsWith("W"));
// console.log(firstName.endsWith("d"));
// console.log(firstName.repeat(2));
// console.log(firstName.substring(1,4));

// 
// Acync & sync

// console.log("Number 1");
// setTimeout(function()
// {
// console.log("Number 2");

// },1000);
// console.log("Number 3");
// 
// function greet(){
// alert ("Hello World..")
// }
// greet()

// let greet = () =>{
//     alert("Waleed")
// }
// greet();

// let greet = (num1 , num2) => {
//     num1 + num2;
// };
// console.log(greet(20 ,12));
// 

// ******************Pas by value*************//
// let a = 10;
// let b = a;

// b = b + 20;

// console.log(a);
// console.log(b);

// ******************Pas by Referance*************//

// let obj = {
//     name: "Syed",
//     age : 23,
// }
// let obj2 = {
//     name: "Waleed",
//     age : 23,
// }
// let obj3 = {
//     name: "Ali",
//     age : 23,
// }

// let obj4 = obj3;
// obj3.address = "Karachi"

// console.log(obj);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

// 
// let promise = new Promise((resolve , reject)=>{
// let status = "isAvailable";

// if (status == "isAvailable"){
//     resolve("Succesfull..");
// }else{
//     reject("Unseccesfull...");
// }
// });

// promise
// .then((data)=>{
//     console.log("resolve", data);
// })
// .catch((error)=>{
//     console.log(error);

// });
// 
// let promise = new Promise((resolve , reject)=>{
// let status = "isNotAvailable";

// if (status == "isAvailable"){
//     resolve("Succesfull..");
// }else{
//     reject("Unseccesfull...");
// }
// });

// promise
// .then((data)=>{
//     console.log("resolve", data);
// })
// .catch((error)=>{
//     console.log(error);

// });
// 
