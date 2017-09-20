function activate()
{

	var cointoss = Math.round(Math.random());
	
	if (cointoss == 1)
	{
		console.log("HEADS");
	}
	
	else
	{
		console.log("TAILS");
	}
	
}

function newGame()
{
	location.reload();
}

