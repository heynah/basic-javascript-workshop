//Write a function that takes a string and returns the first character of the string. 
//Test your function on a few inputs, including the empty string.
/*
var firstLetter = function(string){
    return string.substr(0,1);
}

console.log (firstLetter("String"));
console.log (firstLetter("Object"));
console.log (firstLetter(""));
console.log (firstLetter("While"));
console.log (firstLetter("HTML"));
console.log (firstLetter("Array"));
console.log (firstLetter("This"));
console.log (firstLetter("?"));


//Write a function that takes a string and returns the last character of a string. 
//Test your function on a few inputs, including the empty string

var lastLetter = function(string){
    return string.substr(string.length-1);
}

console.log(lastLetter("String"));
console.log(lastLetter("character"));
console.log(lastLetter("console"));
console.log(lastLetter("java"));
console.log(lastLetter("script"));
console.log(lastLetter(""));
*/

//Write a function that takes a string and a number, and returns the character 
//at the position represented by the number. The indexing of number should start 
//at 0. Test your function on a few inputs, including the empty string.


var letNoIndex = function(string,number) {
    var indexPos = parseInt(number);
    //console.log(number); ** just checking :)
    return string.substring(    (number-1)   , number  );
}

console.log(letNoIndex("bananas", 3));

console.log(letNoIndex("",2));

var letNoIndex = function(string, number) {
    return string.substr( (parseInt(number)-1) , 1)
}

console.log(letNoIndex("pineapples", 5));

console.log(letNoIndex("",2));