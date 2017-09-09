document.addEventListener("DOMContentLoaded", init, false);

function init()
{
	var str = "Text content";
	var num = 100;
	var bln = true;
	var fcn = init;
	var obj = document.getElementById("panel");
	
	obj.innerHTML = str + "LKJLKJ";
}



init();





obj.innerHTML = str + " : " + typeof str;