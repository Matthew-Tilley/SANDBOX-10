function user_input()
{
	var date = new Date();
	var day = date.getDay();
	humanizer(day);
}



function humanizer(day)
{
		
	if (day == 0)
	{var x = "Sunday"}
	
	else if (day == 1)
	{var x = "Monday"}
	
	else if (day == 2)
	{var x = "Tuesday"}
	
	else if (day == 3)
	{x = "Wednesday"}
	
	else if (day == 4)
	{x = "Thursday"}
	
	else if (day == 5)
	{x = "Friday"}
	
	else
	{x = "Sunday"}
	
	display(x);
	
}

function display(x)
{
	document.getElementById("F1").innerHTML = x;
}
