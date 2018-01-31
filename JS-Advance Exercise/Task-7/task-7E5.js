// 7. Write a javascript code that demonstrate concept of pubsub method.

function BookPub(name){
	this.name = name;
	this.Books = [  
			{ "name": "The Monk Who Sold His Ferrari", "price": 1222 },
			{ "name": "Ferrari", "price": 100 }
	];	
}

BookPub.prototype = {

	addBook : function(bName,bPrice){	
		
		this.Books.push( { "name": bName, "price": bPrice });	
		console.log("Book added: "+ bName + " " + bPrice);
		
		medObj.notifyAnnounceSale(medObj);
	},

	removeBook : function(bName){
		
		var indexToDelete = _.findIndex(this.Books, function(b){	return b.name === bName; });
		this.Books.splice( indexToDelete, 1);
		console.log("Book deleted: "+ bName );
		
		medObj.notifyLimitedStockSale(medObj);
	}
}


function Mediator(){
	//
}

Mediator.prototype = {

	notifyAnnounceSale : function(medObj){
		for(var sub in medObj.announceSaleSub)	medObj.announceSale(medObj.announceSaleSub[sub]);	
	},

	notifyLimitedStockSale : function(medObj){
		for(var sub in medObj.limitedStockSaleSub)	medObj.limitedStockSale(medObj.limitedStockSaleSub[sub]);
	},

	announceSale : function(subName){
		console.log(subName + " Every Book On 10% discount!");
	},

	limitedStockSale : function(subName){
		console.log(subName + " Limited Stock Only!");
	} 

}

function BookSub(name, shopSize, bookPub){
	this.name = name;
	this.shopSize = shopSize;
	this.Books = bookPub.Books;

	if(shopSize === "small")
		medObj.limitedStockSaleSub.push(name);
	else
		medObj.announceSaleSub.push(name);
}


var medObj = new Mediator();
medObj.announceSaleSub = [];
medObj.limitedStockSaleSub = [];

var BookSource = new BookPub("Sheth Publisher");
var RaviPrakashan = new BookSub("RaviPrakashan", "huge", BookSource);
var AkashPrakashan = new BookSub("AkashPrakashan", "small", BookSource);

BookSource.addBook("You Can Win",300);
BookSource.addBook("Alchemist",100);
BookSource.removeBook("Alchemist");