function person(last, first)
{
	this.last = last;
	this.first = first;
}

var me = new person("Tilley", "Matt");

console.log(me.last);

