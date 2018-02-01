// 6. Write a javascript code that demonstrate concept of factory method.

function CarFactory(factoryName){
	this.factoryName = factoryName;
}

CarFactory.prototype = {

	carType : function(type, name){
		if(type === "sports")
			return new SportsCar(name);
		else if (type === "luxury")
			return new	LuxuryCar(name);
		else
			return new Car(name);
	}
}

function SportsCar(name){
	this.name = name;
}
SportsCar.prototype.carIntro = function(){	
	return ("I am " + this.name + ". I am a sports car");	
}

function LuxuryCar(name){
	this.name = name;
}
LuxuryCar.prototype.carIntro = function(){
	return ("I am " + this.name + ". I am a luxury car \nMy price is 10x your salary!");	
}

function Car(name){
	this.name = name;
}
Car.prototype.carIntro = function(){
	return ("I am " + this.name + ". I am an ordinary car\nI am not for showoff!");
}

var autoFactory = new CarFactory("autoFactory");

var car1 = autoFactory.carType("sports", "Lamborghini");
console.log(car1.carIntro());

var car2 = autoFactory.carType("luxury", "Roles Royes");
console.log(car2.carIntro());

var car3 = autoFactory.carType("ordinary", "Alto");
console.log(car3.carIntro());
