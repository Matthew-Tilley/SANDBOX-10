function car(make, model, color)
{
	function accelerate()
	{
		return "<br>Vroom!";
	}
	
	function init()
	{
		var panel = document.getElementById("panel");
		var myCar = new car("Dodge", "Viper", "Red");
	}
	
	document.addEventListener("DOMContentLoaded", init, false);
	
	this.make = make;
	this.model = model;
	this.color = color;
	this.accelerate = accelerate;
	
	
}