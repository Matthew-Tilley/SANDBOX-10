function box(width, length, height)
{
	function volume(a,b,c)
	{
		return a*b*c;
	}
	
	this.boxVolume = volume(width, length, height);
}