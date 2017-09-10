function calc()
{
	var x = prompt("Enter a number:");
	cuber();
	return x;
}

function cuber(x)
{
	c = x*x*x;
	return c;
}

console.log(calc() + " is the cube of your number.");