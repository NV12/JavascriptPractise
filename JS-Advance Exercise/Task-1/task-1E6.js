// 1. Write a javascript code that demonstrate concept of inheritance. a) simple, b) multilevel,
// c) hierarchical

class India{
	
	belongsTo(){
		alert("Multilevel: All states belongs to Country: India");
	}
}

class Gujarat extends India{

	inInside(){
		alert("Simple: Cities belong to states: Gujarat");
	}
}

class Rajkot extends Gujarat{

	cityIam(){
		alert(" I am a city: Rajkot ");
	}

}

class Maharashtra extends India{

	inInside(){
		alert("Simple: Cities belong to states: Maharashtra");
	}
}

class Bombay extends Maharashtra{

	cityIam(){
		alert(" I am a city: Bombay ");
	}
}

var obj = new Rajkot();
obj.cityIam();
obj.inInside();
obj.belongsTo();

var obj = new Bombay();
obj.cityIam();
obj.inInside();
obj.belongsTo();
// obj.wellKnown();