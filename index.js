function pet()
{
	this.animal = "";
	this.name = "";
	
	this.setAnimal = function(newAnimal)
	{
		this.animal = newAnimal;
	}
	
	this.setName = function(newName)
	{
		this.name = newName;
	}
	
}

var myCat = new pet();
myCat.setAnimal = "cat";
myCat.setName = "Jade";


