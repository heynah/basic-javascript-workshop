//**1**
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

//**2**
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

//**3**
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

*/


//**4**
//Write a function that takes two numbers and adds them together. 
//Test your function on a few inputs. Write in the comments what happens when you 
//pass something other than a number to your function.

//**4**
//Write a function that takes two numbers and adds them together. 
//Test your function on a few inputs. Write in the comments what happens when you 
//pass something other than a number to your function.

var add = function (n,q) {
    return (parseInt(n) + parseInt(q));
}

console.log("Pass: NaN + NaN");
console.log(add(NaN,NaN));

console.log("Pass: string + string");
console.log(add("n","q"));

console.log("Pass: string + number");
console.log(add("n",6));

console.log("Pass: string '0' + number");
console.log(add("0",6));

console.log("Pass: empty string + number");
console.log(add("",6));

console.log("Pass: empty string + empty string");
console.log(add("",""));

console.log('true numbers:');
console.log(add(3,5));
console.log(add(8,13));
console.log(add(21,34));