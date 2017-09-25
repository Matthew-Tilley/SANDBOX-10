function myObjectType()
{
	this.info = "I am a shiny new object."
	
	this.showInfo = function()
	{
		alert(this.info);
	}
	
	this.setInfo = function(newInfo)
	{
		this.info = newInfo;
	}
	
	
}


console.log(myObjectType.info);