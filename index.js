function box(width, length, height)
{
	function volume(a,b,c)
	{
		return a*b*c;
	}
	
	this.boxVolume = volume(width, length, height);
}

var crate = new box(5,4,3);

alert("Volume = " + crate.boxVolume);

alert(volume(5,4,3));