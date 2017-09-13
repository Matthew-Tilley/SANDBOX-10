function telltime()
{
	var out = " ";
	var now = new Date;
	
	out += "<br /> Date: " + now.getDate();
	
	
	
	document.getElementById("T1").innerHTML = out;
	

	
}


telltime();




