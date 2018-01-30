// 3. Write a javascript code that demonstrate concept of constructor. Make constructor using
// ‘prototype’ and ‘observer’ design patterns.

class Emp{

	constructor(name,id,salary){
		this.name=name;
		this.id=id;
		this.salary=salary;
	}

	giveIntro(){
		alert("My name is "+ this.name + " id:" + this.id + " salary: " + this.salary);
	}	

 	setName(name)	{	this.name=name;	}
 	getName()	{	return this.name;	}
	
}

class EmpPrototype{

	// var o= new Object();

	constructor(proto){

		// var emp = new Emp();
		this.name = proto.name;
		this.id = proto.id;
		this.salary = proto.salary;
		// console.log(prototype.getName());
		
		// this.prototype = {

		// }
		Object.defineProperty(this.prototype.getName , 'getName', proto.getName());
		// function getName() {
		// 	prototype.getName();
		// };
		// this.getName() = function() prototype.getName;
		return this;
	};



}

var idealEmp = new Emp("naeim",1234,"1cr");
console.log(idealEmp);
var Emp1 = new EmpPrototype(idealEmp);
var Emp2 = new EmpPrototype(idealEmp);
// console.log(dummy);
alert(Emp1.getName());
