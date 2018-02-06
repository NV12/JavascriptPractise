// 3. Write a javascript code that demonstrate concept of constructor. Make constructor using
// ‘prototype’ and ‘observer’ design patterns.

// Emp is the object

function Emp(name){
    this.name = name;
}

Emp.prototype.giveIntro = function (){
    alert("My name is "+ this.name + " id:" + this.id + " salary: " + this.salary);
}

Emp.prototype = {

    getName(){
        return this.name;
    },

    setName(name){
        this.name = name;
    }
}

//EmpPrototype is the subject

function EmpPrototype(proto){
    this.proto = proto;
    this.promotionSubscribe = [];
}

EmpPrototype.prototype = {

    promotion : function(salary){
        this.salary = salary;

        for(var i = 0, subArrLen = this.promotionSubscribe.length ; i < subArrLen ; i+=1)
            console.log("Dear " + this.promotionSubscribe[i] + ", you have been promoted!");

    },

    clone : function(name){
        var newEmp = new Emp(); 
        
        newEmp.name = name;
        newEmp.id = this.proto.id;
        newEmp.salary = this.proto.salary;
        newEmp.giveIntro = this.proto.giveIntro;
        newEmp.setName = this.proto.setName;
        newEmp.getName = this.proto.getName;
            
        return newEmp;
    },

    doSubscribe : function(event, name){
        if( event === "promotion"){
            this.promotionSubscribe.push(name);
            console.log(name + " has subscribed " + event + " successfully!");
        }
        else
            console.log(event + "-> No such event exists");
        
        console.log(this.promotionSubscribe); 
    },

    doUnsubscribe : function(event, name){
        if( event === "promotion"){
            var subscriberIndex = this.promotionSubscribe.indexOf(name);
            
            if(subscriberIndex !== -1){ 
                this.promotionSubscribe.splice(subscriberIndex, 1); 
                console.log(name + " has unsubscribed " + event + " successfully!");
            }
            else
                console.log(name + " has not subscribed " + event);
        }
        else
            console.log(event + "-> No such event exists");
    }
}

var idealEmp = new Emp("naeim",1234,"1cr");
var protoObj = new EmpPrototype(idealEmp);

var Emp1 = protoObj.clone("Emp1");
var Emp2 = protoObj.clone("Suresh");

Emp1.setName("Ramesh");

protoObj.doSubscribe("promotion", Emp1.name);
protoObj.doSubscribe("promwwotion", Emp2.name);
protoObj.doSubscribe("promotion", Emp2.name);
protoObj.doUnsubscribe("promotddion", Emp1.name);

protoObj.promotion(100);