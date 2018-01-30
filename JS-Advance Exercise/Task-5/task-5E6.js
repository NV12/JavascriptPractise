// 5. Write a javascript code that demonstrate concept of “Symbol methods”.

// lol = Symbol('naeim is great!');
// console.log(typeof lol);
// obj = Object(lol);
// console.log(typeof obj);

lol = Symbol('lolw');
const prop = Symbol('age');

var myObj={
	name : "naeim",
	prop : "youth"
}

// console.log(Symbol.keyFor(myObj.age));
console.log(Object.getOwnPropertyNames(myObj));
console.log(Object.getOwnPropertySymbols(myObj));


// var a = function (){
// 	this.abc=10;

//  	this.function_name = () =>  {
	
// 	console.log('this.abc',this.abc);
// 	this.abc=20;
// 	console.log('that',this.abc);

// }
// 	this.getValue = () =>{	return this.abc;	}

// }

// let b=new a();
// // console.log(b);
// // console.log(b.getValue());



// b.function_name();
// console.log( b.getValue() )	;

// class abc{
// 	// abc.prototype.name = "lol";
// 	// this.a = 10;
// 	constructor(){

// 		this.a = 10;
// 		// let ownFunc = () => {	return this.a; }

// 	}
	
// 	// var a = 10;

// 	myMethod(){	
// 		// this.a = 20;
// 		return this.a;	
// 	}	
	

// 	// let ownFunc = () => {	this.a };
// }

// abc.prototype.a = 30;
// abc.prototype.sMethod = () => {	return abc.prototype.a; };
// abc.prototype.a = 40;


// var obj = new abc();

// console.log(obj.myMethod());
// console.log(obj);


