function confirmz()
{
	var check = confirm("Are you absolutely,\npositively sure\nyou want to continue???");
	
	return decider(check);
}


function decider(check)
{
	if(check == true)
	{
		console.log("Continuing.");
	}
	
	else
	{
		console.log("Not continuing.");
	}
}