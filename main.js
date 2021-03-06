var multiplier = Number(document.getElementById("serving_size_multiplier").innerHTML);
var number_of_ingredients = document.getElementsByClassName("measurement").length;
var fraction_ingredient_measurements = [];
var decimal_ingredient_measurements = [];
var ingredient_measurement_units = [];

//read in the ingredient measurements
for (i = 0; i < number_of_ingredients; i++) {
	//read in measurement string
	fraction_ingredient_measurements[i] = document.getElementsByClassName("measurement")[i].innerHTML; 
	
	//read in measure unit string
	ingredient_measurement_units[i] = document.getElementsByClassName("measure_unit")[i].innerHTML; 
	
	//Nested array. For six element nested arrays, 0 == whole number, 1 == " ", 2 == numerator, 3 == "/", 4 == first denominator, 5 == second digit denominator; For five element nested arrays, 0 == whole number, 1 == " ", 2 == numerator, 3 == "/", 4 == denominator; For three element nested arrays, 0 == numerator, 1 == "/" 2 == denominator
	fraction_ingredient_measurements[i] = fraction_ingredient_measurements[i].split(""); 
	
	//Convert string fractions to decimal numbers
	if (fraction_ingredient_measurements[i].length == 6 && fraction_ingredient_measurements[i][3] == "/") {
		decimal_ingredient_measurements[i] = Number(fraction_ingredient_measurements[i][0]) + Number(fraction_ingredient_measurements[i][2]) / Number(fraction_ingredient_measurements[i][4]+fraction_ingredient_measurements[i][5]);
	} else if (fraction_ingredient_measurements[i].length == 5  && fraction_ingredient_measurements[i][3] == "/") {
		decimal_ingredient_measurements[i] = Number(fraction_ingredient_measurements[i][0]) + Number(fraction_ingredient_measurements[i][2]) / Number(fraction_ingredient_measurements[i][4]);
	} else if (fraction_ingredient_measurements[i].length == 3  && fraction_ingredient_measurements[i][1] == "/") {
		decimal_ingredient_measurements[i] = Number(fraction_ingredient_measurements[i][0]) / Number(fraction_ingredient_measurements[i][2]);
	} else {
		decimal_ingredient_measurements[i] = Number(fraction_ingredient_measurements[i][0]);
	}
}

function decrement_multipler() {
	if (multiplier > 1) {
		multiplier--;
	} else {
		multiplier = 1;
	}
	after_multiplier_change();
}

function increment_multipler() {
	multiplier++;
	after_multiplier_change();			
}

function after_multiplier_change() {
	//display the changed multiplier
	document.getElementById("serving_size_multiplier").innerHTML = multiplier;
	
	var multiplied_decimal_ingredients = [];
	var multiplied_fraction_ingredients = [];
	var whole_number_part_multiplied_decimal_ingredients = [];
	var decimal_part_multiplied_decimal_ingredients = [];
	
	for (i = 0; i < number_of_ingredients; i++) { 
		//decimal ingredient measurements multiplied by the multiplier and stored in multiplied_decimal_ingredients array
		multiplied_decimal_ingredients[i] = decimal_ingredient_measurements[i] * multiplier;
		
		//convert decimals to fractions
		whole_number_part_multiplied_decimal_ingredients[i] = Number(String(multiplied_decimal_ingredients[i]).split(".")[0]); 
		decimal_part_multiplied_decimal_ingredients[i] = String(multiplied_decimal_ingredients[i]).split(".")[1];
		var one_third = String(1/3).split(".")[1];
		var two_thirds = String(2/3).split(".")[1];
		var one_sixth = String(1/6).split(".")[1];
		var five_sixth = String(5/6).split(".")[1];
		if (decimal_part_multiplied_decimal_ingredients[i] === undefined) {
			multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i];
		} else if (decimal_part_multiplied_decimal_ingredients[i] == 25) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "1/4";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 1/4";
			}
		} else if (decimal_part_multiplied_decimal_ingredients[i] == 5) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "1/2";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 1/2";
			}
		} else if (decimal_part_multiplied_decimal_ingredients[i] == 75) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "3/4";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 3/4";
			}
		} else if (decimal_part_multiplied_decimal_ingredients[i].substr(0, 4) == one_third.substr(0, 4)) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "1/3";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 1/3";
			}
		} else if (decimal_part_multiplied_decimal_ingredients[i].substr(0, 4) == two_thirds.substr(0, 4)) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "2/3";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 2/3";
			}
		} else if (decimal_part_multiplied_decimal_ingredients[i] == 125) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "1/8";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 1/8";
			}
		} else if (decimal_part_multiplied_decimal_ingredients[i] == 375) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "3/8";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 3/8";
			}
		} else if (decimal_part_multiplied_decimal_ingredients[i] == 625) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "5/8";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 5/8";
			}
		} else if (decimal_part_multiplied_decimal_ingredients[i] == 875) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "7/8";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 7/8";
			}
		}  else if (decimal_part_multiplied_decimal_ingredients[i].substr(0, 4) == one_sixth.substr(0, 4)) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "1/6";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 1/6";
			}
		}  else if (decimal_part_multiplied_decimal_ingredients[i].substr(0, 4) == five_sixth.substr(0, 4)) {
			if (whole_number_part_multiplied_decimal_ingredients[i] === 0) {
				multiplied_fraction_ingredients[i] = "5/6";
			} else {
				multiplied_fraction_ingredients[i] = whole_number_part_multiplied_decimal_ingredients[i] + " 5/6";
			}
		} else {
			multiplied_fraction_ingredients[i] = multiplied_decimal_ingredients[i];
		}
		
		//displays the multiplied decimal ingredient measurements
		document.getElementsByClassName("measurement")[i].innerHTML = multiplied_fraction_ingredients[i];
		
		//changes singular to plural and vice versa
		if (Number(multiplied_decimal_ingredients[i]) > Number(1) && ingredient_measurement_units[i].match(/s$/g) != "s") {
			//singular to plural
			if (ingredient_measurement_units[i].endsWith("x")) {
				ingredient_measurement_units[i] = ingredient_measurement_units[i] + "es";
			} else {
				ingredient_measurement_units[i] = ingredient_measurement_units[i] + "s";
			}
		} else if (Number(multiplied_decimal_ingredients[i]) <= Number(1) && ingredient_measurement_units[i].match(/s$/g) == "s") {
			//plural to singular
			if (ingredient_measurement_units[i].endsWith("es")) {
				ingredient_measurement_units[i] = ingredient_measurement_units[i].slice(0, (ingredient_measurement_units[i].length-2));
			} else {
				ingredient_measurement_units[i] = ingredient_measurement_units[i].slice(0, (ingredient_measurement_units[i].length-1));
			}
		}
		//displays the measurement unit
		document.getElementsByClassName("measure_unit")[i].innerHTML = ingredient_measurement_units[i];				
	}
}