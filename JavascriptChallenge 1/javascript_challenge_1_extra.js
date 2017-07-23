//calculator
function calculator(operation, num1, num2){
	switch(operation){
		case "suma":
			return num1+num2;
			break;
		case "resta":
			return num1-num2;
			break;
		case "multiplicacion":
			return num1*num2;
			break;
		case "division":
			return num1/num2;
			break;
	}
}

calculator("suma",10,5) // 15
calculator("resta",10,5) // 5
calculator("multiplicacion",10,5) // 50
calculator("division",10,5) // 2

//----------------------
//calculator plus

function calculator(){
	var results = arguments[1]
	switch(arguments[0]){
		case "suma":
			for (var i = 2; i < arguments.length; i++) {
				results += arguments[i];
			}			break;
		case "resta":
			for (var i = 2; i < arguments.length; i++) {
				results -= arguments[i];
			}
			break;
		case "multiplicacion":
			for (var i = 2; i < arguments.length; i++) {
				results *= arguments[i];
			}
			break;
		case "division":
			for (var i = 2; i < arguments.length; i++) {
				results /= arguments[i];
			}
			break;
	}
	return results;
}

calculator("suma",10,5,2,3) // 20
calculator("resta",10,5,1) // 4
calculator("multiplicacion",10,5,2) // 100
calculator("division",10,5) // 2

//---------------
//getFullName

function getFullName(name, lastname){
	return "Your full name is "+name+" "+lastname+"."
}

 getFullName( "juanma", "garrido") // "Your full name is "juanma garrido""

//------------------------
//isNumber

function number