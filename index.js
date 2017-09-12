var mydate = new Date;
document.getElementById("F1").innerHTML = mydate.getDay();
var numdate = mydate.setDate(15);
console.log(numdate);