function addTax(subtotal, taxRate)
{
	var total = subtotal * (1 + (taxRate/100));
	return total;
}

var invoiceValue = addTax(50, 10);
alert(invoiceValue);
alert(total);