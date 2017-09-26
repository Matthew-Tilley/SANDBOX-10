

function picker()
{
	var white_balls = [];
	
	var possible = Math.ceil(Math.random * 69);
	
	for each ( i in white_balls)
	{
		if (possible != white_balls[i])
		{
			white_balls.push(possible);
			console.log(white_balls);
		}
		
	}
	
	
	
	
}