myNewObject = new Object();

myNewObject.info = "I am a shiny new object.";

function myFunc()
{
	alert(this.info);
}


function newFunc()
{
	alert(this.info + " HELLO");
}

myNewObject.showInfo = newFunc;

myNewObject.showInfo = myFunc;



