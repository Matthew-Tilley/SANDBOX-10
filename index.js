function possible()
{
	var number = Math.ceil(Math.random() * 69 );
	return checker(number);
}


function checker(number)
{
	var white_balls = [];
	
	for ( i in white_balls )
	{
		if ( number != white_balls[i])
		{
			white_balls.push();
		}
	}
	
	return console.log(white_balls);
	
}





function reset()
{
	location.reload();
}