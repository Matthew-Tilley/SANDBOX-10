function addTax(subtotal, taxRate)
{
	var total = subtotal * (1 + (taxRate/100));
	return total;
}

console.log(addTax(100, 5));