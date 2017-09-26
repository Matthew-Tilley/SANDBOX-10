String.prototype.backwards = function()
{
	var out = "";
	
	for (i=this.length-1; >= 0; i--)
	{
		out += this.substr(i, 1);
	}
	
	return out;
}


var inString = prompt("Enter your test string:");

console.log(inString.backwards());