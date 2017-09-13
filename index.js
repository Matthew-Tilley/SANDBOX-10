var height = prompt("Enter height of cylinder, in meters: ");
var radius = prompt("Enter the radius of cylinder, in meters: ");

var volume = Math.ceil(Math.PI * Math.pow(radius, 2) * height);

console.log(volume);