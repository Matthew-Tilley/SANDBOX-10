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
		if ( white_balls.length < 1 )
		{
			white_balls.push(number);
		}
	}
	
	return console.log(white_balls);
	
}





function reset()
{
	location.reload();
}