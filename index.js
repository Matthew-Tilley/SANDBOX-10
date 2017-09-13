function telltime()
{
	var out = " ";
	var now = new Date;
	
	out += "<br /> Date: " + now.getDate();
	out += "<br /> Month: " + now.getMonth();
	
	
	
	document.getElementById("T1").innerHTML = out;
	
	

	
}


telltime();




