var input = prompt('Enter some text with the string of "fake" at some point, in all caps!');

detectSpam(input);



function detectSpam(input)
{
	input = input.toLowerCase();
	console.log(input);
	
	if (input.indexOf("fake") > 0)
	{
		console.log("The Orange Terror declares this fake news!");
	}
	
	else
	{
		console.log("The Orange Terror approves.");
	}
	
}


