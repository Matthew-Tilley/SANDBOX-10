function myObjectType()
{
	this.info = "I am a shiny new object."
	
	this.showInfo = function()
	{
		console.log(this.info);
	}
}


myObjectType.showInfo();
