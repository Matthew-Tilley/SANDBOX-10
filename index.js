function reload()
{
	location.reload();
	test();
}

function test()
{
	var random = Math.ceil(Math.random() * 2 );
	
	if (random % 2 === 0)
	{
		console.log(random + " EVEN" );
	}
	
	else
	{
		console.log(random + " ODD" );
	}	


}

