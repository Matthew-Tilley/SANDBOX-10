function user_input()
{
	var input = prompt("Enter something here.");
	return detectSpam(input);
}

function detectSpam(input)
{
	if ( input.indexOf("fake") >= 0 )
		{
			return console.log("FAKE NEWS");
		}
	
	/*return console.log(input.toLowerCase());*/
	
}

user_input();



