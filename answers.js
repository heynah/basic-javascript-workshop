//Write a function that takes a string and returns the first character of the string. 
//Test your function on a few inputs, including the empty string.
/*var firstLetter = function(string){
    return string.substr(0,1);
}

console.log (firstLetter("String"));
console.log (firstLetter("Object"));
console.log (firstLetter(""));
console.log (firstLetter("While"));
console.log (firstLetter("HTML"));
console.log (firstLetter("Array"));
console.log (firstLetter("This"));
console.log (firstLetter("?"));*/


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
