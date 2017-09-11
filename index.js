
document.getElementById("BD1").innerHTML = 	navigator.appName;
document.getElementById("BD2").innerHTML= 	navigator.appCodeName;
document.getElementById("BD3").innerHTML= 	navigator.appVersion;
document.getElementById("BD4").innerHTML= 	navigator.language;


/*COOKIES*/
if (navigator.cookieEnabled == true)
{
	document.getElementById("BD5").innerHTML = "YES";
}

else
{
	document.getElementById("BD5").innerHTML = "NOPE - NO COOKIES FOR YOU!!!"
}


/*CPU CLASS*/
if (navigator.cpuClass == undefined)
{
	document.getElementById("BD6").innerHTML = "SORRY - INFORMATION UNAVAILABLE";
}

else
{
	document.getElementById("BD6").innerHTML = navigator.cpuClass;
}


/*ONLINE*/
if (navigator.cookieEnabled == true)
{
	document.getElementById("BD7").innerHTML = "YES - ONLINE";
}

else
{
	document.getElementById("BD5").innerHTML = "NOT ONLINE"
}



document.getElementById("BD8").innerHTML= 	navigator.platform;
document.getElementById("BD9").innerHTML= 	navigator.plugins.length;

/*TESTED IN CHROME AND FIREFOX DEVED - WORKS PROPERLY IN BOTH.*/