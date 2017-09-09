function loaded()
{
	window.alert("Window loaded!");
}

function init()
{
	document.getElementById("panel").innerHTML = "PAGE INITIALIZED";
	window.alert("DOM LOADED");
	
}

window.onload = loaded();
document.addEventListener("DOMContentLoaded", init, false);