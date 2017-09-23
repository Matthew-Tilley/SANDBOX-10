var temperature = prompt("Enter the temperature:");

var access_code = prompt("Enter your access code:");

var user_access_code = "123";

if (temperature < 64 && access_code == user_access_code)
{
	console.log("You may turn on the heat.");
}

else if (temperature > 64 && temperature < 75 && access_code == user_access_code)
{
	console.log("No action is required");
}

else if (temperature > 75 && access_code == user_access_code)
{
	console.log("You may turn on the air conditioning.");
}

else if (access_code != user_access_code)
{
	console.log("ACCESS DENIED - ENTER CREDENTIALS AGAIN.");
}