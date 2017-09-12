var mydate = new Date;

console.log( "Created: " + mydate.toDateString() + " " + mydate.toTimeString() );

mydate.setDate( mydate.getDate() + 33 );

console.log( "After adding 33 days: " + mydate.toDateString() + " " + mydate.toTimeString() );