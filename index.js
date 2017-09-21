var temp = prompt("Enter the current temperature.");

if ( temp < 64 )
{
	console.log("Turn on the heater.");
}

else if ( temp > 64 && temp < 73 )
{
	console.log("All is well.");
}

else
{
	console.log("Turn on the air conditioning!");
}