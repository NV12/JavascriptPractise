// 1. Write a javascript code that demonstrate concept of inheritance. a) simple, b) multilevel,
// c) hierarchical

/*Country Class*/
function Country(name){
	this.name = name;
}

/*A method to give introduction of the country*/
Country.prototype.introCountry = function(){
		alert("I am Country. My name is " + this.name);
}

/*PrimeMinister Class*/
function PM(pname){
	this.pname = pname;
}

/*Extending Country Class by PM class*/
PM.prototype = Object.create(Country.prototype);

/*Assigning the constructor of PM to retain the properties of PM class*/
PM.prototype.constructor = PM;


/*A method to give introduction of the PM*/
PM.prototype.introPM = function(cname){
	alert("I am Prime Minister of " + cname +". My name is " + this.pname);
}

/*State Class*/
function State(sname){
	this.sname = sname;
}

State.prototype = Object.create(Country.prototype);
State.prototype.constructor = State;


// Note: First assign the prototype object(extends), then add method to the derived class

State.prototype.introState = function(){
		alert("I am a state. My name is " + this.sname);
}

/*City Class*/
function City(cname){
	this.cname = cname;
}


City.prototype = Object.create(State.prototype);
City.prototype.constructor = City;

City.prototype.introCity = function(){
	alert("I am a city. My name is " + this.cname);
}

/*All objects using the classes*/
var India = new Country("India");
India.introCountry();

var Gujarat = new State("Gujarat");
Gujarat.introState();

var Modi = new PM("Narendra Modi");
Modi.introPM("India");

var Rajkot = new City("Rajkot");
Rajkot.introCity();