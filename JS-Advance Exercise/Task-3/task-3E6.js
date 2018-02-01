// 3. Write a javascript code that demonstrate concept of constructor. Make constructor using
// ‘prototype’ and ‘observer’ design patterns.


// Emp is object

class Emp{

	constructor(name,id,salary){
		this.name = name;
	}

	giveIntro(){
		alert("My name is "+ this.name + " id:" + this.id + " salary: " + this.salary);
	}	

	//Additional getter-setter methods

 	setName(name)	{	this.name = name;	}
 	getName()	{	return this.name;	}	
}


// EmpPrototype is Subject

class EmpPrototype{

	constructor(proto){
		this.proto = proto;
		this.promotionSubscribe = [];
	}

	clone(name){

		let newEmp = new Emp(); 
		
		newEmp.name = name;
		newEmp.id = this.proto.id;
		newEmp.salary = this.proto.salary;
		newEmp.giveIntro = this.proto.giveIntro;
		newEmp.setName = this.proto.setName;
		newEmp.getName = this.proto.getName;

		return newEmp;
	}

	promotion(salary){
		this.salary = salary;

		this.promotionSubscribe.forEach((subscriber) => {
			console.log("Dear " + subscriber + ", you have been promoted!");
		});
	}

	doSubscribe(event, name){
		if( event === "promotion"){
			this.promotionSubscribe.push(name);
			console.log(name + " has subscribed " + event + " successfully!");
		}
		else
			console.log(event + "-> No such event exists");
		
		console.log(this.promotionSubscribe);		
	}

	doUnsubscribe(event, name){
		if( event === "promotion"){
			let subscriberIndex = this.promotionSubscribe.indexOf(name);
			
			if(subscriberIndex !== -1){	
				this.promotionSubscribe.splice(subscriberIndex, 1);	
				console.log(name + " has unsubscribed " + event + " successfully!");
			}
			else
				console.log(name + " has not subscribed " + event);
		}
		else
			console.log(event + "-> No such event exists");
	}
}

let idealEmp = new Emp("naeim",1234,"1cr");
let protoObj = new EmpPrototype(idealEmp);

let Emp1 = protoObj.clone("Emp1");
let Emp2 = protoObj.clone("Suresh");

Emp1.setName("Ramesh");

protoObj.doSubscribe("promotion", Emp1.name);
protoObj.doSubscribe("promwwotion", Emp2.name);
protoObj.doSubscribe("promotion", Emp2.name);
protoObj.doUnsubscribe("promotddion", Emp1.name);

protoObj.promotion(100);