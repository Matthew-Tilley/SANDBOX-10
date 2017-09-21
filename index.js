function user_input()
{
	var input = prompt("Enter something here.");
	return detectSpam(input);
}

function detectSpam(input)
{
	input = input.toLowerCase();
	return input.indexOf("fake");
}

console.log(user_input());


