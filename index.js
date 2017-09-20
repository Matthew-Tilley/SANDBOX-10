var mess = ["z", "q", "b", "a", "L", "R", "X"];

var lower = [];

for (i=0; i<mess.length; i++)
{
	lower += mess[i].toLowerCase();
	console.log(lower);
}

var better = [];

for (i=0; i<lower.length; i++)
{
	better = lower.sort();
}

console.log(better);





