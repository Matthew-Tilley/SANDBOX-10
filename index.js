function calc()
{
	var x = prompt("Enter a number:");
	cuber();
	return x;
}

function cuber(x)
{
	x = x*x*x;
	return x;
}

calc();