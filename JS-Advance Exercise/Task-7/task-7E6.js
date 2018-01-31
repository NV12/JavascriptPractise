// 7. Write a javascript code that demonstrate concept of pubsub method.

class BookPub{

	constructor(){

		this.Books = [  
			{ "name": "The Monk Who Sold His Ferrari", "price": 1222 },
			{ "name": "Ferrari", "price": 100 }
		];	
	}

	addBook(bName,bPrice){	
		
		this.Books.push( { "name": bName, "price": bPrice });	
		console.log("Book added: "+ bName + " " + bPrice);
		
		medObj.notifyAnnounceSale(medObj);
	}
	
	removeBook(bName){
		
		let indexToDelete = _.findIndex(this.Books, function(b){	return b.name === bName; });
		this.Books.splice( indexToDelete, 1);
		console.log("Book deleted: "+ bName );
		
		medObj.notifyLimitedStockSale(medObj);
	}
}

class Mediator{

	notifyAnnounceSale(medObj){
		for(let sub in medObj.announceSaleSub)	medObj.announceSale(medObj.announceSaleSub[sub]);	
	}

	notifyLimitedStockSale(medObj){
		for(let sub in medObj.limitedStockSaleSub)	medObj.limitedStockSale(medObj.limitedStockSaleSub[sub]);
	}

	announceSale(subName){
		console.log(subName + " Every Book On 10% discount!");
	}

	limitedStockSale(subName){
		console.log(subName + " Limited Stock Only!");
	} 
}

class BookSub{

	constructor(name, shopSize, bookPub){

		this.name = name;
		this.shopSize = shopSize;
		this.Books = bookPub.Books;

		if(shopSize === "small")
			medObj.limitedStockSaleSub.push(name);
		else
			medObj.announceSaleSub.push(name);
	}
}

let medObj = new Mediator();
medObj.announceSaleSub = [];
medObj.limitedStockSaleSub = [];

let BookSource = new BookPub();
let RaviPrakashan = new BookSub("RaviPrakashan", "huge", BookSource);
let AkashPrakashan = new BookSub("AkashPrakashan", "small", BookSource);

BookSource.addBook("You Can Win",300);
BookSource.addBook("Alchemist",100);
BookSource.removeBook("Alchemist");