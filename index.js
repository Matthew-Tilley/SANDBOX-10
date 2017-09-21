function user_input()
{
	var input = prompt("Enter something here.");
	return detectSpam(input);
}

function detectSpam(input)
{
	return console.log(input.toLowerCase());
	
}

user_input();



