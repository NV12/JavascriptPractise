// 2. Write a javascript code that demonstrate concept of super class. Create subclasses with
// extends and call it with super.

class Vehicle{

	info(){
		alert ("I am useful for family");
	}

}

class Car extends Vehicle{

	hasSpeed(speed){
		return (" My speed is "+speed+"kmph");
	}

	carInfo(){
		alert("I am a car");
		super.info(); 
	}

}

class Audi extends Car{

	intro(model,speed){
		super.carInfo();
		alert("I am Audi "+ model + super.hasSpeed(speed));
		
	}

}

var car1= new Audi();
car1.intro("R8",120);