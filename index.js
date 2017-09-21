function detectSpam(input)
{
	input = prompt("Enter something here!");
	input = input.toLowerCase();
	return typeof(input);
}

console.log(detectSpam());
