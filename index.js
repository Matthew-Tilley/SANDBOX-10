function myObjectType()
{
	this.info = "I am a shiny new object."
	
	this.showInfo = function()
	{
		alert(this.info);
	}
	
	
}


console.log(myObjectType.info);