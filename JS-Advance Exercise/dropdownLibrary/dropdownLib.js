(function(){
		this.Dropdowns = function() {
	};

	Dropdowns.prototype = {

		// Method for adding all dropdowns

		addAllDropdowns : function(target){

			// Getting all targets 

			var targetObjs = document.querySelectorAll(target);
			
			// Adding all 3 dropdowns on every targetObject

			targetObjs.forEach(function(targetObj){
				Dropdowns.prototype.addDropdown("Country", targetObj);
				Dropdowns.prototype.addDropdown("State", targetObj);
				Dropdowns.prototype.addDropdown("City", targetObj);
			});
		},

		// Function to add dropdown 

		addDropdown : function(dropdownName, target){
			
			// Label to specify the dropdown name

			// var label = document.createElement("label");
			Dropdowns.prototype.createDropdowns(dropdownName, target);
		},

		// Function to create dropdown

		createDropdowns : function(dropdownName, targetObj){
			
			// Best practise: Using fragment instead of appending child directly to parent 

			var fragment = document.createDocumentFragment(),
				select = document.createElement("select");
				// select.className += "dropdown-toggle";
				
			// Adding data if the dropdown is of country

			if(dropdownName === "Country"){
				Dropdowns.prototype.fillData("country", select, "countries.json", null);
			}

			// Appending child to the target obj by using fragment

			fragment.appendChild(select);
			targetObj.appendChild(fragment);
		},

		// Function that will use jQuery call to fetch data
		// NOTE: THIS WON'T WORK IN BROWSERS HAVING MORE SECURITY(LIKE CHROME)

		fillData : function(dataFor, target, dataSource, constraint){
			$.getJSON(dataSource, function(allData){

				// Using allData[Object.keys(allData)[0]] here to access the JSON data array
				// Adding data to the options of the dropdown
				
				// If the dropdown is already filled, empty it!

				if($(target).val())	$(target).empty();
					
				// For setting states and cities
				if(constraint !== null){
					
					// Setting var to check the constraint of state or city

					if(dataFor === "state"){
						var check = "country_id";

						// Setting the first option 
						var firstOption = new Option("<-- select state -->");
						target.add(firstOption);
					}
					else{
						var check = "state_id";

						// Setting the first option 
						var firstOption = new Option("<-- select city -->");
						target.add(firstOption);
					}

					// Best pracitse: Using ._filter instead of simple forEach loop

					_.filter(allData[Object.keys(allData)[0]], function(data){

						// Selecting only the proper data to add into options of dropdown
						if(data[check] === constraint){
							var option = new Option(data.name, data.id);
							option.setAttribute("name", dataFor);
							option.onclick = function () {	Dropdowns.prototype.selectedOption(this, target);	}
							target.add(option, null);	
						}
					});
				}
				else	//For adding countries
				{
					// Setting the first option 

					var firstOption = new Option("<-- select country -->");
					target.add(firstOption);
					_.filter(allData[Object.keys(allData)[0]], function(data) {
						var option = new Option(data.name, data.id);
						option.setAttribute("name", dataFor);
						option.onclick = function () {	Dropdowns.prototype.selectedOption(this, target);	}
						target.add(option, null);
					});	
				}
			});
		},

		// This function calls method for setting next dropdown's options according to selected value
		selectedOption : function(optionObj, target){

			// Calling fillData for adding options in State dropdown
			if(optionObj.getAttribute("name") === "country"){
				console.log("selected " + optionObj.textContent + " adding states");
				Dropdowns.prototype.fillData("state", target.nextSibling, "states.json", optionObj.getAttribute("value"));
			}
			// Calling fillData for adding options in City dropdown
			else if (optionObj.getAttribute("name") === "state"){
				console.log("selected " + optionObj.textContent + " adding cities");
				Dropdowns.prototype.fillData("city", target.nextSibling, "cities.json", optionObj.getAttribute("value"));
			}
			// Log the selected city
			else
				console.log("selected city " + optionObj.textContent);
		}
	};
}());

// Declaring the object of dropdowns
var module1 = new Dropdowns();
module1.addAllDropdowns(".dropdownTarget");