//single line comments in javascript are done with this

var randomValue = 2;
var randomWord = "word";
var isBoolean = true;
	//initialize variables with var
	//semi-colons are your friends

randomWord = "hello";
	//no need for var when changing variable contents

var booleanVal = 5===5;
	//3='s returns true if both values are the same object type and same val
booleanVal = "5" === "5"; //true

	//2='s returns true if the contents are the same after conversion to common type
booleanVal = 5==5; //true
booleanVal = "5" == 5; //true
booleanVal = "6" == 5; //false

	//note: !=, !==