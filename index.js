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


function dog()
{
	this.breed = "";
	this.setBreed = function(newBreed)
	{
		this.breed = newBreed;
	}
	
	dog.prototype = new pet();
}


var myDog = new dog()
myDog.setName("Baxter");

