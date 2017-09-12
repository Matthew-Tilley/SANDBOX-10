var mydate = new Date;
document.getElementById("F1").innerHTML = mydate.getDay();
var numdate = mydate.setDate(15);

document.getElementById("F1").innerHTML = ("After amending date to the 15th, the day number is: " + mydate.getDay());