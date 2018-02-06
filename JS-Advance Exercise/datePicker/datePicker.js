let date, month, year, dateOfWeek, dateOfYear;
let monthArr = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Checking whether the year is leap year or not
function checkLeapYear(year){
	if( year % 400 === 0)	return 1;
	else if( year % 100 === 0)	return 0;
	else if( year % 4 === 0)	return 1;
	else	return 0;
}

// Function to calculate dateofyear
function calculateDOY(date, monthsAll, currentMonth){
	let DOY = date;
	//(month-1) bcz array index starts from 0
	for( let i = 0; i < (currentMonth- 1); i++ )
			DOY += monthsAll[i];
	
	return DOY;
}

// Function to calculate dateofweek
function calculateDOW(dateWhole, month, date){

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
function resetValues(){
	monthArr[1] = 28;		
	dateOfYear = 0;
	dateOfWeek = 0;
}

// Function to assign date values
function getDate(dateID){
	dateWhole = $(`#${dateID}`).val();
	month = parseInt(dateWhole.slice(0, 2));
	date = parseInt(dateWhole.slice(3, 5));
	year = parseInt(dateWhole.slice(6, 10));
}

//Function to print the output
function displayAllDates(displayID){
	$(`#${displayID}`).text("Day: " + dayNames[dateOfWeek] + "    WeekDate: " + (dateOfWeek+ 1) + "    YearDate: " + dateOfYear);
	console.log("date of year: ", dateOfYear);	
	console.log("date of Week: ",dateOfWeek + 1);
} 

// This function includes all necessary function calls to generate dateofweek, dateofyear
function setAllDates(dateID){

	resetValues();

	getDate(`${dateID}`);
		
	checkLeapYear(year)	?	monthArr[1]++	: console.log("Not a LeapYear");

	dateOfYear = calculateDOY(date, monthArr, month);
	dateOfWeek = calculateDOW(dateWhole, month, date);
}

$(document).ready(function(){

	$("#datepicker1").change(function(){
		setAllDates("datepicker1");	
		displayAllDates("answerForSchool");
	});

	$("#datepicker2").change(function(){
		setAllDates("datepicker2");	
		displayAllDates("answerForCollege");
	});

	$("#datepicker3").change(function(){
		setAllDates("datepicker3");	
		displayAllDates("answerForOffice");
	});

	// Mediater method having subscribers list
	$(".changeAll").click(function(){
		let eventSubsArr = ["answerForSchool", "answerForCollege", "answerForOffice"];

		// Test case: Checking whether date is empty or already chosen
		if(!($("#datepicker"+ this.id).val())){
			alert("Select date first!");
			return;
		}
		
		setAllDates("datepicker"+ this.id);

		// Calling event upon all subscriber
		eventSubsArr.forEach((subscriber) => {
			displayAllDates(`${subscriber}`);
		});
	});
	
});