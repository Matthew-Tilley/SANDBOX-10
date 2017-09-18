function confirmz()
{
	var check = confirm("Are you absolutely,\npositively sure\nyou want to continue???");
	
	return decider(check);
}


function decider(check)
{
	if(check == true)
	{
		var output = "continuing";
		console.log(output.toUpperCase());
		
	}
	
	else
	{
		var output = "NOT CONTINUING";
		console.log(output.toLowerCase());
	}
}