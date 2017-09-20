var myArray = [];

var designation = [];

myArray[1] = "Monday";
myArray[3] = "Wednesday";
myArray[5] = "Friday";
myArray[0] = "Sunday";
myArray[2] = "Tuesday";
myArray[4] = "Thursday";
myArray[6] = "Saturday";

designation += "ICE CREAM DAY!";

console.log(myArray, designation);

for (i=0; i<myArray.length; i++)
{
	var output = myArray.concat(designation);
	console.log(output);
}

