function car(color, year, make, miles)
{
	this.color = color;
	this.year = year;
	this.make = make;
	this.miles = miles;
	this.odometerReading = miles;
	
	this.setOdometer = (newMiles)
	{
		this.odometerReading = newMiles;
	}
	
}

/*function car(color, year, make, miles)
{
	this.color = color; 
	this.year = year;
	this.make = make;
	this.miles = miles;
}*/