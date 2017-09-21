function detectSpam(input)
{
	input = prompt("Enter something here!");
	input = input.toLowerCase();
	
	if (input.indexOf("fake") < 0)
	{
		return false;
	}
	
	else
	{
		return true;
	}
}

console.log(detectSpam());
