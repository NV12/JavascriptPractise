/*This datepicker follows pubsub design pattern*/


// Declaring all important variables at a single place
let date, month, year, dateOfWeek, dateOfYear, dateWhole;
let monthArr = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAY_NAMES = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// This class describes the subscribers
class Module{

	// Checking whether the year is leap year or not
	checkLeapYear(year){
		if( year % 400 === 0)	return 1;
		else if( year % 100 === 0)	return 0;
		else if( year % 4 === 0)	return 1;
		else	return 0;
	}

	// Function to calculate dateofyear
	calculateDOY(date, monthsAll, currentMonth){
		let DOY = date;
		//(month-1) bcz array index starts from 0
		for( let i = 0; i < (currentMonth- 1); i++ )
				DOY += monthsAll[i];
		
		return DOY;
	}

	// Function to calculate dateofweek
	calculateDOW(dateWhole, month, date){

		let firstTwoDigYear, lastTwoDigYear, dateOfWeek;
		let zellarMonth = [ 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		firstTwoDigYear = (parseInt(dateWhole.slice(6,8)));
		lastTwoDigYear = (parseInt(dateWhole.slice(8,10)));
		
		
		// Zeller's Rule to find day of the week
		// http://mathforum.org/dr.math/faq/faq.calendar.html

		if( month === 1 || month === 2)
			lastTwoDigYear--;

		dateOfWeek = date+ Math.floor( (13* (zellarMonth[month- 1]) -1)/ 5 )+ lastTwoDigYear+ Math.floor( lastTwoDigYear/4 )+ Math.floor( firstTwoDigYear/4 )- (2* firstTwoDigYear);

		if( dateOfWeek > 0){
			dateOfWeek = dateOfWeek % 7;
		}
		else{
			while( dateOfWeek < 0 )
				dateOfWeek += 7;
		}
		return dateOfWeek;
	}

	// Resetting the leap year's month value, dateofyear and dateofweek
	resetValues(){
		monthArr[1] = 28;		
		dateOfYear = 0;
		dateOfWeek = 0;
	}

	// Function to assign date values
	getDate(dateID){
		dateWhole = $(`#${dateID}`).val();
		month = parseInt(dateWhole.slice(0, 2));
		date = parseInt(dateWhole.slice(3, 5));
		year = parseInt(dateWhole.slice(6, 10));
	}

	// Function to print the output
	displayAllDates(displayID){
		$(`#${displayID}`).text("Day: " + DAY_NAMES[dateOfWeek] + "    WeekDate: " + (dateOfWeek+ 1) + "    YearDate: " + dateOfYear);
		console.log("date of year: ", dateOfYear);	
		console.log("date of Week: ",dateOfWeek + 1);
	} 

	// This function includes all necessary function calls to generate dateofweek, dateofyear
	setAllDates(dateID){

		this.resetValues();

		this.getDate(`${dateID}`);
			
		this.checkLeapYear(year)	?	monthArr[1]++	: console.log("Not a LeapYear");

		dateOfYear = this.calculateDOY(date, monthArr, month);
		dateOfWeek = this.calculateDOW(dateWhole, month, date);
	}

	// method to call all operations
	allOperations(datepicker, target){
		this.setAllDates(datepicker);
		this.displayAllDates(target);
	}
}

// This class defines events to be fired upon subscibers 
class Mediater{

	// Event
	// Change dates from all subscribers when changeAll button gets pressed
	changeAllDates(subscriber, datepickerObjID, accessObj){

		accessObj.setAllDates("datepicker"+ datepickerObjID);

		// Calling event upon all subscriber
		console.log(subscriber);
		accessObj.displayAllDates(`${subscriber}`);
		
	}

}

// Object to access all class methods
let accessObj = new Module();

$(document).ready(function(){

	let event1, eventSubsArr = [];

	// Modules which are using datepicker
	$("#datepicker1").change(function(){
		accessObj.allOperations("datepicker1", "answerForSchool");
	});

	$("#datepicker2").change(function(){
		accessObj.allOperations("datepicker2", "answerForCollege");	
	});

	$("#datepicker3").change(function(){
		accessObj.allOperations("datepicker3", "answerForOffice");
	});

	// Mediater method having subscribers list
	$(".changeAll").click(function(){
		eventSubsArr = ["answerForSchool", "answerForCollege", "answerForOffice"];
		 
		// Test case: Checking whether date is empty or already chosen
		if(!($("#datepicker"+ this.id).val())){
			alert("Select date first!");
			return;
		}

		// Firing event upon all subscribers
		event1 = new Mediater();
		eventSubsArr.forEach((subscriber) => {
			event1.changeAllDates(subscriber, this.id, accessObj);
		});
	});
});