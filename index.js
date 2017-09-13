function telltime()
{
	var out = " ";
	var now = new Date;
	
	out += "<br /> Date: " + now.getDate();
	out += "<br /> Month: " + now.getMonth();
	out += "<br /> Year: " + now.getYear();
	out += "<br /> Hours: " + now.getHours();
	out += "<br /> Minutes: " + now.getMinutes();
	
	
	
	
	document.getElementById("T1").innerHTML = out;
	
	

	
}


telltime();




