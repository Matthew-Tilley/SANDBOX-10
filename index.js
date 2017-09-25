function person(personName)
{
	this.name = personName;
	this.info = "This person is called " + this.name;
	
	this.showInfo = function()
	{
		alert(this.name + " says hello!");
	}
}


/*person.prototype.sayHello = function()
{
	alert(this.name + " says hello!");
}*/

person("Joe");