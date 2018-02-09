/*God is the class that creates the Singelton Object of God*/
// God is only one! Duh!
var God=(function(){
	var obj;

	function createObject(){
		obj=new Object();
		obj.name="Karma";
		return obj; 
	}

	return{
		assign: function(){
				if(!obj){
					console.log(obj);
					return createObject();
				}
				else{ return obj; }
			}
	}
	
	/*Prayer for the only God*/	
	function prayer(){
		alert("Karma karye ja, fal ni aasha na rakh");
	}
})();

/*All Employees*/
var emp1={
	name: "binayakji",
	phone: "8789737310",
	msg: "you are trash",
	designation: "nalla",
	belevesIn: God.assign()
};
var emp2={
	name: "lalitji",
	phone: "8786737310",
	msg: "you are not trash",
	designation: "nalla@fb",
	belevesIn: God.assign()
};
