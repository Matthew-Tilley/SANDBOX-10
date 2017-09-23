function number_picker()
{
	var possible = (Math.ceil(Math.random() * 69 ));
	
	for ( i in white_balls )
	{
		if ( possible != white_balls[i])
		{
			white_balls.push(possible);
		}
	}
}

var white_balls = [];



