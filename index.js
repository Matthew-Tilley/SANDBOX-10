function confirmz()
{
	var check = confirm("Are you absolutely,\npositively sure\nyou want to continue???");
	
	if (check == true)
	{
		console.log("They want to continue.");
	}
	
	else
	{
		console.log("User is not continuing.");
	}
}