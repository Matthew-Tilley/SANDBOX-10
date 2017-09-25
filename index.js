function person(personName)
{
	this.name = personName;
	this.info = "This person is called " + this.name;
	
	this.showInfo = function()
	{
		alert(this.name + " says hello!");
	}
}

var person1 = new Person("Adam");
var person2 = new Person("Eve");

