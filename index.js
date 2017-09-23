function randomizer()
{
	var number = Math.ceil(Math.random() * 3);
	return color_assignment(number);
}


function color_assignment(number)
{
	var color;
	
	if (number == 1)
	{
		color = "green";
	}
	
	if (number == 2)
	{
		color = "yellow";
	}
	
	if (number == 3)
	{
		color = "red";
	}
	
	return output(color);
	
}


function output(color)
{
	switch(color)
			{
		case color = "red" :
			message = console.log("Stop!");
			break;
			
		case color = "yellow" :
			message = console.log("Proceed with caution!");
			break;
			
		case color = "green" :
			message = console.log("You may proceed.");
			break;
			
	}
}




