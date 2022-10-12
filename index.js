//? Problem #1: What should the following evaluations return? 
// 2 == '2' //* true
// 'he' == 'she' //* false
// 2 === 2 //* true
// 'true' == true //! false
// true === true //* true
// 'true' != true //* true
// 'true' !== true //* true

//! EQUATION 
////console.log('true' == 1);
////const num = 0; console.log('num' == num);

//? Problem #2: What are the three different ways you can declare a variable? And what is the differences between them? 

// * var
//! Globably scoped!

// * let
//! block scoped and can be re-assigned

// * const
//! block scoped and can NOT be re-assigned


//? Problem #3: Write a simple function for each type of these functions: 
//? - First-Class Function
/* const firstClass = () => {
    console.log("Hello");
  };
  firstClass(); */

//? - Higher-Order Function

/*  const higherOrderFunction = (printHello) => {
    printHello() 
}

const printHello = ( ) => {
    console.log('hello');
}

higherOrderFunction(printHello) */

//? Callback Function

/*   const callbackFunction = (printHello, callback) => {
    printHello() 
    callback()
}


function callMe() {
    console.log('Tony');
}

const printHello = ( ) => {
    console.log('hello');
}

callbackFunction(printHello, callMe);
 */


//? Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below? 

//* a: hi!
//* b: bye
//* c: undefined

/* const a = 'hi';
console.log(c);
const someFunction = (arg) => {
 const b = 'bye';
 if (arg) {
 const c = 'see ya!';
 console.log(a);
 console.log(b);
 console.log(c);

 }
} */
/* 
const a = 'hi!';
// console.log(c)
 const someFunction = (arg) => {
    const b = 'bye'
if (arg) {
 //   const c = "see ya!";
 
    console.log(a);
    console.log(b);
}
}
someFunction(true)
 */



//? Problem #5: Given the following data structure, write a for loop using: 

/* const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = []; 

 */

//* For statement
/* for (let i = 0; i < someArray.length; i++) {
    arr2.push(someArray[i]);
}

console.log(arr2);
  */

//*  For…of 
/*   for (const number of someArray) {
    console.log(number);
  }  
 */
//? Problem #5: Given the following data structure, write a for loop using: 

//! const someArray = [1, 2, 3, 4, 5];

//? Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5]
/*  const someArray2 = [];
endArray = someArray.concat(someArray2);
console.log(someArray2.concat(endArray))  
 */
//? - Use the length property to return the length of the array
//console.log(someArray.length);

//? - Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5]
/* const filterOut3 = someArray.filter(num => num !== 3)
console.log(someArray); 
console.log(filterOut3);  */

//? - Use the find() method to find and return the value of 5.
/* const findNumber4 = someArray.find(num => num === 5);
console.log(findNumber4)
 */
//? - Use the slice() method to return back this array: [3, 4]
/* console.log(someArray.slice(2, 4))
 */

//? - Use the splice() method to return back this array: [1, 2, 5]
/*//! const removed = someArray.splice(2, 2);
console.log(someArray)
 */

//? - Use the includes() method to return back TRUE when I pass in “4” into the includes method.
/* console.log(someArray.includes(4))
 */

//? - Use the indexOf() method to return back the index of the element “2”
/* console.log(someArray.indexOf(2))
 */

//? - Use the isArray() method to return back TRUE when I pass in the array
/*  console.log(Array.isArray(someArray))
 */

//? - Use the join() method to return back: “1, 2, 3, 4, 5”
/* console.log(someArray.join(", "));
 */

//? - Use the map() method to return back a new array: [2, 4, 6, 8, 10]
/* const map = someArray.map(a => a * 2);
console.log(map); */

//? - Use the pop() method to return back a new array: [1, 2, 3, 4]
/* const removed = someArray.pop()
console.log(someArray) */

//? - Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6]
/* someArray.push(6)
console.log(someArray)
 */

//? - Use the shift() method to return back a new array: [2, 3, 4, 5]
/* someArray.shift()
console.log(someArray)
 */

//? - Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5]
/* someArray.unshift(0)
console.log(someArray)
 */

//? - Sort this array to return [9, 1, 3, 5] using the sort() method  [9, 1, 3, 5] to return [1, 3, 5, 9]
/* const someArray = [9, 1, 3, 5];
someArray.sort();
console.log(someArray); 
 */

//? - Use the reduce() method to return back the sum of all numbers in the array
/* const total = someArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
console.log(total)  */

//? Problem #7: Given the following data structure: 

/*   const someObject = { 
    color: 'black',
}

Object.assign(someObject, {name: "John Doe"});
someObject.age = 22
someObject["address"] = '123 test address';

//! console.log(Object.keys(someObject));  
//! console.log(Object.values(someObject));  
for (const property in someObject) {
    console.log(`${someObject[property]}`);
  }  */
// ?   Use the assign() method to add a new key value pair of: name: ‘john doe’
//? - Use the dot notation to add a new key value pair of: age: 22
//? - Use the bracket notation to add a new key value pair of: address: ‘123 test address’
//? - Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”]
//? - Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test address”]
//? - Use the for…in loop against this object to console.log each of the keys values.
//? Your terminal should return: 


//? Problem #8: Given the following data structure: 
/* const numbers = [
    {
    num: 1
    },
    {
    num: 2
    },
    {
    num: 3
    }
   ]
   for (const obj of numbers) {
    console.log(obj['num'])
   } */
  
 //?  Problem #9: Create a new Set() object
/*  const collection = new Set( )
 collection.add('john doe') //create 'john doe'
 console.log(collection)
 console.log(collection.has('john doe')) //see 'john doe' exist
 console.log(collection.delete('john doe')); //delete 'john doe'
 console.log(collection)
 */
 
 //? Problem #10: Create a new Map() object
/* const profile = new Map()
profile.set('name','john doe');
const values = [...profile.values()];
console.log(profile)
console.log(values.includes('john doe'));
console.log(profile.delete('name'));
console.log(profile) */

//? Problem #11: Explain what asynchronous programming means in 3 sentences. 
/* Asynchronous progamming the same as the Synchronous starts at the top part of the code but the 
difference is that the code is run sepately from the rest of the code because it needs to wait to reduce
time in operation which take a long time to run.
  */
//? Problem #12: Explain what call back hell is.
/* 
It refers to a pyramind structure that forms when we have nested dependednt callbacks on one after another
with a callback inside callback and a lot of nested callbacks that amakes the code becomes unmaintainable.
 */

//? Problem #13: Explain what is a promise and describe the possible states of promises.
/* 
Promises is an object that represents the eventual completion (or failed) of an asychronous operations,  
as soon as the data was presented in the promise amd it will 
call once. It's also added security that the code was not given into external function. 
The three states are Pending, Fulfilled, and Rejected. 
   Pending: It is the initial state when see it's neither fulfilled nor  rejected.
   Fullfilled: meaning that the operation was completed successfully
   Rejected: the operations was unseccessfull or failed
  */

//? Problem #14: What is async/await?
/*  Await makes JavaScript wait until that promise settles and returns its result 
 and async ensures that the function returns a promise, and wraps non-promises in it. */

//? Problem #15: Using Git, please push this code up to your GitHub repo following the directions: 
