



// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//
// In, LOOP mais lento
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


// REFERNCES
// https://stackoverflow.com/questions/42273457/understanding-the-typeof-operator-in-javascript




// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//
// tutorial 1
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
var car = {
	b: 'BMW',
	c: 'GOL',
	d: 2019
}

for (var prop in car) {
	console.log(prop)
}


// testing whether property exists, return TRUE|FALSE
console.log('f' in car)