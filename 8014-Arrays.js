

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//
// Array
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

https://www.w3schools.com/js/js_array_methods.asp


// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//
// tutorial 1
// https://stackoverflow.com/questions/51309098/array-tostring-returns-array-instead-of-string-why-javascript
//
// Array.toString() returns array instead of string - Why? Javascript
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


// EX: toString
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();
// result => Banana,Orange,Apple,Mango


// EX: join
var punctuated = "Banana,Orange,Apple,Mango"
punctuated.split(",").join(" ");
// the result will be => Banana Orange Apple Mango


// Ex3
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain

