// 3. Write a javascript code that demonstrate concept of constructor. Make constructor using
// ‘prototype’ and ‘observer’ design patterns.

class Emp{

	constructor(name,id,salary){
		this.name = name;
		this.id = id;
		this.salary = salary;
		this.empArr = [];
		this.promotionSubscribe = [];
	}

	promotion(salary){
		this.salary = salary;

		this.promotionSubscribe.forEach((subscriber) => {
			console.log("Dear " + subscriber + ", you have been promoted!");
		});
	}

	doSubscribe(event, name, subObj){
		if( event === "promotion")
			subObj.promotionSubscribe.push(name);
		else
			console.log(event + "-> No such event exists");
		
		console.log(subObj.promotionSubscribe);
		console.log(name + " has subscribed " + event + " successfully!");
	}

	doUnsubscribe(event, name, subObj){
		if( event === "promotion"){
			var subscriberIndex = subObj.promotionSubscribe.indexOf(name);
			
			if(subscriberIndex !== -1){	
				subObj.promotionSubscribe.splice(subscriberIndex, 1);	
				console.log(name + " has unsubscribed " + event + " successfully!");
			}
			else
				console.log(name + " has not subscribed " + event);
		}
		else
			console.log(event + "-> No such event exists");
	}

	giveIntro(){
		alert("My name is "+ this.name + " id:" + this.id + " salary: " + this.salary);
	}	

	//Additional getter-setter methods

 	setName(name)	{	this.name = name;	}
 	getName()	{	return this.name;	}	
}

class EmpPrototype{

	constructor(name, proto){
		this.name = name;
		this.id = proto.id;
		this.salary = proto.salary;
		this.giveIntro = proto.giveIntro;
		this.setName = proto.setName;
		this.getName = proto.getName;
		this.doSubscribe = proto.doSubscribe;
		this.doUnsubscribe = proto.doUnsubscribe;
		proto.empArr.push(this);
		console.log("proto.empArr: ", proto.empArr);
		
		return this;
	}
}

var idealEmp = new Emp("naeim",1234,"1cr");
var Emp1 = new EmpPrototype("Emp1", idealEmp);
var Emp2 = new EmpPrototype("Suresh",idealEmp);

Emp1.setName("Ramesh");

Emp1.doSubscribe("promotion", Emp1.name, idealEmp);
Emp2.doSubscribe("promwwotion", Emp2.name, idealEmp);
Emp1.doUnsubscribe("promotddion", Emp1.name, idealEmp);

idealEmp.promotion(100);