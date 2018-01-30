// 6. Write a javascript code that demonstrate concept of factory method.

class carFactory{

	static carType(spec){
		if(spec === "sports")
			return new SportsCar();
		else if (spec === "luxury")
			return new	LuxuryCar();
		else
			return new Car();
	}
}

class SportsCar{

	carIntro(){
		return ("I am sports car \nMy speed is 111");
	}
}

class LuxuryCar{

	carIntro(){
		return ("I am luxury car \nMy price is 10x your salary!");
	}
}

class Car{

	carIntro(){
		return ("I am an ordinary car\nI am not for showoff!");
	}
}

var car1 = carFactory.carType("sports");
console.log(car1.carIntro());

var car2 = carFactory.carType("luxury");
console.log(car2.carIntro());

var car3 = carFactory.carType();
console.log(car3.carIntro());
