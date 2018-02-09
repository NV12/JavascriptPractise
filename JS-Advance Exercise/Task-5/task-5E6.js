// 5. Write a javascript code that demonstrate concept of “Symbol methods”.

/*Testing for symbol methods*/

// lol = Symbol('naeim is great!');
// console.log(typeof lol);
// obj = Object(lol);
// console.log(typeof obj);

/*Short testing period over!*/

lol = Symbol('lolw');
const prop = Symbol('age');

var myObj={
	name : "naeim",
	prop : "youth"
}

// console.log(Symbol.keyFor(myObj.age));
console.log(Object.getOwnPropertyNames(myObj));
console.log(Object.getOwnPropertySymbols(myObj));