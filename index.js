function car(color, year, make, miles)
{
	this.color = color;
	this.year = year;
	this.make = make;
	this.miles = miles;
	this.odometerReading = miles;
	
	this.setOdometer = function (newMiles)
	{
		this.odometerReading = newMiles;
	}
	
}

var car1 = new car("white", 2008, "Pontiac", 110000);
console.log(car1.setOdometer = 112000);

console.log(car1);