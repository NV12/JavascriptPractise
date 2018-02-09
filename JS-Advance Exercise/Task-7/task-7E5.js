// 7. Write a javascript code that demonstrate concept of pubsub method.

// Publisher Class
// Bookpub creates new BookPublisher
function BookPub(name){
	this.name = name;
	this.Books = [  
			{ "name": "The Monk Who Sold His Ferrari", "price": 1222 },
			{ "name": "Ferrari", "price": 100 }
	];	
}

BookPub.prototype = {

	// Every new book gets added to the books array
	addBook : function(bName,bPrice){	
		
		this.Books.push( { "name": bName, "price": bPrice });	
		console.log("Book added: "+ bName + " " + bPrice);
		
		// Notifying the Mediator after every addition of Book
		medObj.notifyAnnounceSale(medObj);
	},

	removeBook : function(bName){
		
		var indexToDelete = _.findIndex(this.Books, function(b){	return b.name === bName; });
		this.Books.splice( indexToDelete, 1);
		console.log("Book deleted: "+ bName );
		
		// Notifying the Mediator after every removal of book
		medObj.notifyLimitedStockSale(medObj);
	}
}

// Mediator class btw BookPub and BookSub
// It consists events and the methods for notifying subscibers
function Mediator(){
	//No particular constructor needed in Mediator here
}

Mediator.prototype = {

	// Notify methods
	notifyAnnounceSale : function(medObj){
		for(var sub in medObj.announceSaleSub)	medObj.announceSale(medObj.announceSaleSub[sub]);	
	},

	notifyLimitedStockSale : function(medObj){
		for(var sub in medObj.limitedStockSaleSub)	medObj.limitedStockSale(medObj.limitedStockSaleSub[sub]);
	},

	// Events
	announceSale : function(subName){
		console.log(subName + " Every Book On 10% discount!");
	},

	limitedStockSale : function(subName){
		console.log(subName + " Limited Stock Only!");
	} 

}

// BookSubscriber class
function BookSub(name, shopSize, bookPub){
	this.name = name;
	this.shopSize = shopSize;
	this.Books = bookPub.Books;

	// BookPub's Subscriber subscribes the event based on the size of the its shop
	if(shopSize === "small")
		medObj.limitedStockSaleSub.push(name);
	else
		medObj.announceSaleSub.push(name);
}

// Testing pubsub design pattern
var medObj = new Mediator();
medObj.announceSaleSub = [];
medObj.limitedStockSaleSub = [];

var BookSource = new BookPub("Sheth Publisher");
var RaviPrakashan = new BookSub("RaviPrakashan", "huge", BookSource);
var AkashPrakashan = new BookSub("AkashPrakashan", "small", BookSource);

BookSource.addBook("You Can Win",300);
BookSource.addBook("Alchemist",100);
BookSource.removeBook("Alchemist");