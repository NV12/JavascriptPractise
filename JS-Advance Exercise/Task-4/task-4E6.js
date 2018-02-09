// 4. Write a javascript code that demonstrate concept of static method.

class Demo{
	donTheme1(){
		alert("From Variable: Mujko Phechan lo");
	}

	static donTheme2(){	
		alert("By static method: Me hu Don");
	}
}

var weNeedVariable = new Demo();

weNeedVariable.donTheme1();

// No need to create Object of Demo to call donTheme2 method (static method)
Demo.donTheme2();