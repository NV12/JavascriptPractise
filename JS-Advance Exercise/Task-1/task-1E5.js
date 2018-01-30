function Country(name){
	this.name = name;
}

Country.prototype.introCountry = function(){
		alert("I am Country. My name is " + this.name);
}

function PM(pname){
	this.pname = pname;
}

PM.prototype = Object.create(Country.prototype);
PM.prototype.constructor = PM;

PM.prototype.introPM = function(cname){
	alert("I am Prime Minister of " + cname +". My name is " + this.pname);
}

function State(sname){
	// Country.call(this, sname);
	this.sname = sname;
}

State.prototype = Object.create(Country.prototype);
State.prototype.constructor = State;


// Note: First assign the prototype object(extends), then add method to the derived class

State.prototype.introState = function(){
		alert("I am a state. My name is " + this.sname);
}

function City(cname){
	this.cname = cname;
}


City.prototype = Object.create(State.prototype);
City.prototype.constructor = City;

City.prototype.introCity = function(){
	alert("I am a city. My name is " + this.cname);
}

var India = new Country("India");
India.introCountry();

var Gujarat = new State("Gujarat");
// Gujarat.introCountry();
Gujarat.introState();
// Gujarat.introState();

var Modi = new PM("Narendra Modi");
Modi.introPM("India");

var Rajkot = new City("Rajkot");
Rajkot.introCity();