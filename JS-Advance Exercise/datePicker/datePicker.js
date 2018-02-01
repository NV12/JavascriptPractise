// let files = [];

$(document).ready(function(){

	// let temp = 0;
	let dateWhole, date, month, year, dateOfWeek, dateOfYear, lastTwoDigYear, firstTwoDigYear;
	let monthArr = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let zellarMonth = [ 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	// let files = [];
	
	// files.push(this);
	// console.log("All Files", files);

	$("#datepicker").change(function(){
		
		//Reset the month and dates everytime
		monthArr[1] = 28;		
		dateOfYear = 0;
		dateOfWeek = 0;
		dateWhole = $('#datepicker').val();

		month = parseInt(dateWhole.slice(0, 2));
		date = parseInt(dateWhole.slice(3, 5));
		year = parseInt(dateWhole.slice(6, 10));

		//Checking for leap year
		if( year % 400 === 0)
			monthArr[1]++;
		else if( year % 100 === 0)
			console.log("Not a leap year");
		else if( year % 4 === 0)
			monthArr[1]++;
		else
			console.log("Not a leap year");

		dateOfYear += date;
		for( let i = 0; i < (month - 1); i++ )
			dateOfYear += monthArr[i];

		firstTwoDigYear = (parseInt(dateWhole.slice(6,8)));
		lastTwoDigYear = (parseInt(dateWhole.slice(8,10)));
		if( month === 1 || month === 2)
			lastTwoDigYear--;
		
		// Zeller's Rule to find day of the week
		// http://mathforum.org/dr.math/faq/faq.calendar.html

		dateOfWeek = date+ Math.floor( (13* (zellarMonth[month- 1]) -1)/ 5 )+ lastTwoDigYear+ Math.floor( lastTwoDigYear/4 )+ Math.floor( firstTwoDigYear/4 )- (2* firstTwoDigYear);

		if( dateOfWeek > 0){
			dateOfWeek = dateOfWeek % 7;
		}
		else{
			while( dateOfWeek < 0 )
				dateOfWeek += 7;
		}

		$("#answer").text("Day: " + dayNames[dateOfWeek] + "    WeekDate: " + (dateOfWeek+ 1) + "    YearDate: " + dateOfYear);
		console.log("date of year: ", dateOfYear);	
		console.log("date of Week: ",dateOfWeek);
		// console.log("Day of the week: ", dayNames[dateOfWeek]);
	});
	
});
