var input = prompt('Enter some text with the string of "fake" at some point, in all caps!');

detectSpam(input);



function detectSpam(input)
{
	input = input.toLowerCase();
	console.log(input);
	
	if (input.indexOf("fake") > 0)
	{
		alert("The Orange Terror declares this fake news!");
	}
	
	else
	{
		alert("The Orange Terror approves.");
	}
	
}


