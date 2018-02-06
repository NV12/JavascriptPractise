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
					}else{
						return obj;
					}
				}
	}
	
	
	function prayer(){
		alert("Karma karye ja, fal ni aasha na rakh");
	}
})();

var emp1={
	name: "binayakji",
	phone: "8789737310",
	msg: "you are trash",
	designation: "nalla",
	belevesIn: God.assign()
};

// console.log(God);

var emp2={
	name: "lalitji",
	phone: "8786737310",
	msg: "you are not trash",
	designation: "nalla@fb",
	belevesIn: God.assign()
};
