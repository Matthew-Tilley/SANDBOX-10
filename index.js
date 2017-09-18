function detectSpam(input)
{
	input = input.toLowerCase();
	return console.log(input.indexOf("fake"));
}

detectSpam("The Orange Terror claims this is FAKE news!");
