function int(num1,num2){
	var x1 = Math.floor(num1);
	var x2 = Math.floor(num2);
	var strn = "";

	if (x1>x2) {
		for (var i = x2; i <= x1; i++) {
			strn = strn+(i.toString); 
		}
	}
	else if (x2>x1){
		strn = "-1"
	}
	else{
		strn = "x1 and x2 are equal"
	}
	console.log(strn)
}

int(2,5);

//

function multiplicationTable(argument) {
	var table = "";
	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= 10; j++) {
				table += (i*j).toString()+"\t";
		}
		table += "\n";
	}
    console.log(table);
}

multiplicationTable();

//

function multiplication(num) {
	num;
	for (var i = 0; i <= 10; i++) {
		console.log(num*i);
	}
}

multiplication(5);

//

function mult23(a) {
	var mult = "";
	var num = a;
	var sum = 0;
	while(num<500){
		mult += num.toString()+" "
		sum += num;
		num += a;
	}
	console.log("Elements: "+mult);
	console.log("Sum: "+sum);
}

mult23(23);

//

function max(num1,num2){
	if (num1>num2){
		return(num1);
	}
	else if (num1<num2){
		return(num2);
	}
	else{
		return num1;
	}
}

max(5,4);

/*Other way*/
function max(num1,num2){
	return Math.max(num1,num2);
}

max(5,4);

/*Other way*/
function max(num1,num2){
	return (num1>=num2)? num1: num2;
}

max(5,4);

//

function max3(num1,num2,num3){
	if (num1>num2&&num1>num3){
		console.log(num1);
	}
	else if (num2>num1&&num2>num3){
		console.log(num2);
	}
	else if (num3>num1&&num3>num2){
		console.log(num3);
	}
	else{
		console.log("Eather the 3 numbers are equal, or 2 are equal and 1 is smaler.")
	}
}

max3(4,2,1);

/*Other way*/
function max3(num1,num2,num3){
	if (num1>num2&&num1>num3){
		console.log(num1);
	}
	else if (num2>num3){
		console.log(num2);
	}
	else{
		console.log(num3);
	}
}

max3(4,2,1);

/*Other way*/
function max3(num1,num2,num3){
	
	return Math.max(num1,num2,num3)
}

max3(4,2,1);

//

function isVowel(abc){
	switch(abc) {
		case "a":
			return true;
			break;
		case "e":
			return true;
			break;
		case "i":
			return true;
			break;
		case "o":
			return true;
			break;
		case "u":
			return true;
			break;
		default:
			return false;
			break;
	}
}

isVowel("a");

/*Other way*/
function isVowel(abc){
	var vowels = ['a','e','i','o','u',];
	var comparison = vowels.indexOf(abc)

	if(comparison === -1){
		return false;
	}
	else{
		return true;
	}
}

isVowel("b");

/*Other way*/
function isVowel(abc){
	return ['a','e','i','o','u',].indexOf(abc) !== -1 ? true : false;
}

isVowel("b");

/*Other way*/
function isVowel(abc){
	return ['a','e','i','o','u',].includes(char);
}

isVowel("b");

/*Other way*/
function isVowel(abc){
	return /[aeiou]/.test(abc);
}

isVowel("b");


//

function getRGB(colorHex) {
	var redHex = colorHex[1]+colorHex[2]; //00
	var greenHex = colorHex[3]+colorHex[4]; //FF
	var blueHex = colorHex[5]+colorHex[6]; //00

	var redDec = parseInt(redHex, 16);
	var greenDec = parseInt(greenHex, 16);
	var blueDec = parseInt(blueHex, 16);

	return 'rgb(' + redDec + ',' + greenDec + ',' + blueDec + ')'
}
/*
#00FF00

00 -> r -> parseInt("00",16)
FF -> g -> parseInt("00",16)
00 -> b ->
*/
getRGB('#00FF00');

/*Other way*/
function getRGB(hex){
	var red = parseInt(hex.slice(1,3), 16)
	var green = parseInt(hex.slice(3,5), 16)
	var blue = parseInt(hex.slice(5,7), 16)

	return "RGB(" + red + "," + green + "," + blue ")";
}
 getRGB ('#01FF00');

//

 /* Way 1 */
function getRGB(hex) {

  var color = '';

  switch (hex) {
    case '#000000':
      color = 'black'
      break
    case '#FFFFFF':
      color = 'white'
      break
    case '#FF0000':
      color = 'red'
      break
    case '#00FF00':
      color = 'green'
      break
    case '#0000FF':
      color = 'blue'
      break
  }

  var red = parseInt(hex.slice(1,3), 16)
  var green = parseInt(hex.slice(3,5), 16)
  var blue = parseInt(hex.slice(5,7), 16)

  return 'rgb(' + red + ',' + green + ',' + blue + ') ' + color

}

/* Way 2 */
function getRGB(hex) {

  var color = '';
  var colorsTable = {
    '#000000' : 'black',
    '#FFFFFF' : 'white',
    '#FF0000' : 'red',
    '#00FF00' : 'green',
    '#0000FF' : 'blue'
  };

  if ( colorsTable[hex] ) {
    color = colorsTable[hex]
  }
  var red = parseInt(hex.slice(1,3), 16)
  var green = parseInt(hex.slice(3,5), 16)
  var blue = parseInt(hex.slice(5,7), 16)

  return 'rgb(' + red + ',' + green + ',' + blue + ') ' + color

}

/* Way 3 */
function getRGB(hex) {

  var colorsTable = {
    '#000000' : 'black',
    '#FFFFFF' : 'white',
    '#FF0000' : 'red',
    '#00FF00' : 'green',
    '#0000FF' : 'blue'
  };

  var color = colorsTable[hex] || ''
  var red = parseInt(hex.slice(1,3), 16)
  var green = parseInt(hex.slice(3,5), 16)
  var blue = parseInt(hex.slice(5,7), 16)

  return 'rgb(' + red + ',' + green + ',' + blue + ') ' + color

}

