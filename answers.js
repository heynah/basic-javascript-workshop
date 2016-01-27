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




//**5**
//Write a function that takes two numbers and multiplies them together. Test your 
//function on a few inputs. Write in your comments what happens when you pass 
//something other than a number to your function.

var times = function (n,q) {
    return (parseInt(n) * parseInt(q));
}

console.log("Pass: NaN + NaN");
console.log(times(NaN,NaN));

console.log("Pass: string + string");
console.log(times("n","q"));

console.log("Pass: string + number");
console.log(times("n",6));

console.log("Pass: string '0' + number");
console.log(times("0",6));

console.log("Pass: empty string + number");
console.log(times("",6));

console.log("Pass: empty string + empty string");
console.log(times("",""));

console.log('true numbers:');
console.log(times(3,5));
console.log(times(8,13));
console.log(times(21,34));


//**6**
//Write a function that takes two numbers and a string. If the string is ‘add’, 
//then return the sum of the numbers. If the string is ‘subtract’, return the 
//difference. If the string is ‘mult’, return the product. If the string is ‘div’, 
//return the ratio. Otherwise return 0.

var basicOperations = function(operator, n, q) {
    if (operator === 'add') {
        return (parseInt(n) + parseInt(q));
    }
    else if (operator === 'subtract') {
        return (parseInt(n) - parseInt(q));
    }
    else if (operator === 'mult') {
        return (parseInt(n) * parseInt(q));
    }
    else if (operator === 'div') {
        return (parseInt(n) / parseInt(q));
    }
    else
    return 0
    
}

console.log(basicOperations("div",12,2));
console.log(basicOperations("div",12,5));
console.log(basicOperations("mult",4,8));
console.log(basicOperations("add",1,1));
console.log(basicOperations("subtract",4,9));
console.log(basicOperations("cheese",2,3));
console.log(basicOperations("add","peanut butter","jelly"));
*/


//**7**
//Write a function that takes a string and a number, and returns the string 
//repeated that many number of times. Test your function with various inputs.

var stringRepeat = function(string,number) {
    return(string.repeat(parseInt(number)));
}

console.log(stringRepeat("fun ",5));
console.log(stringRepeat("more ",6));
console.log(stringRepeat("fun ",7));

