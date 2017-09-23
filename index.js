var count = 10; 
var sum = 0;
while(count > 0)
{
	sum = sum + count;
	if(sum > 42 ) break;
	count--;
}

console.log(sum);