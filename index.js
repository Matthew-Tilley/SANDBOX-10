function car(color, year, make, miles)
{
	this.color = color;
	this.year = year;
	this.make = make;
	this.miles = miles;
	this.odometerReading = miles;
	
	/*this.setOdometer = (newMiles)
	{
		this.odometerReading = newMiles;
	}*/
	
}

var car1 = new car("white", 2008, "Pontiac", 110000);

console.log(car1);