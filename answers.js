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



//**7**
//Write a function that takes a string and a number, and returns the string 
//repeated that many number of times. Test your function with various inputs.

var stringRepeat = function(string,number) {
    var result = (string.repeat(number));
    console.log(result);
}

stringRepeat("word ", 3);

// console.log(stringRepeat("fun ",5));
// console.log(stringRepeat("more ",6));
// console.log(stringRepeat("fun ",7));



//**8**
//Write a function that takes a string, and returns the reverse of that string. 
//For example, if you pass the function the string “hello”, it should return “olleh”. 
//Test your function on a few inputs, including the empty string.

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
};

console.log(reverse("backwards"));
console.log(reverse("parallelogram"));
console.log(reverse("palindromes"));
console.log(reverse("heynah"));



//**8**
//Write a function that takes a number and returns the factorial of a number. 
//The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a 
//few numbers, including negative numbers.


var factorial = function(n) {
     if (n===0) {
         return 1;
     }
     
     for (var i = n; i > 0; i--) {
         n *= i;
     }
     
        return n;
     };

console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(-2));
console.log(factorial(-1));
console.log(factorial(0));



//**9**
//Write a function that takes a phrase as a string, and returns the longest word 
//in that phrase. If the phrase contains more than one such word, return the first 
//occurrence. Test your function on a few inputs.

var longestWord = function(phrase) {
    var wordsArr = phrase.split(' ');
    var longest = 0;
    var word = null;
    for (var i = 0; i < wordsArr.length; i++) {
        if (longest < wordsArr[i].length) {
            longest = wordsArr[i].length;
            word = wordsArr[i];
        }
    }
    console.log(wordsArr);
    return word;
    
};


console.log("The longest word is: " + longestWord("I wish I was like six-foot-nine"));
console.log("The longest word is: " + longestWord("So I can get with Leoshi"));
console.log("The longest word is: " + longestWord("Cause she don't know me but yo she's really fine"));
console.log("The longest word is: " + longestWord("You know I see her all the time everywhere I go"));
console.log("The longest word is: " + longestWord("And even in my dreams I can scheme a way to make her mine"));
console.log("The longest word is: " + longestWord("Cause I know she's livin phat"));


//**10**
//Write a function that takes a phrase, and returns the same phrase with every 
//word capitalized. For example, if you pass your function "hello world", it 
//should return “Hello World” and if you pass it “HELLO WORLD” or even "HeLLo WoRLD", 
//it will also return "Hello World". Test your function of a few inputs.

function capitalizeEachWord(str) {
    return str.replace(/\w\S* /g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(capitalizeEachWord("I wish I was like six-foot-nine"));
console.log(capitalizeEachWord("So I can get with Leoshi"));
console.log(capitalizeEachWord("Cause I know she's livin phat"));


function loopCapitalizeEachWord(str) {
    var result = [];
    var wordsArr = str.split(" ");
    for (var i = 0; i < wordsArr.length; i++) {
        var newWord = wordsArr[i].charAt(0).toUpperCase() +  wordsArr[i].slice(1).toLowerCase();
    
        result.push(newWord);
        
    };
        return result.join(" ");
    
}



console.log(loopCapitalizeEachWord("I wish I was like six-foot-nine"));
console.log(loopCapitalizeEachWord("So I can get with Leoshi"));
console.log(loopCapitalizeEachWord("Cause I know she's livin phat"));



//Write a function that takes an array and returns the largest number of the array. 
//Test your function on a few inputs.


function returnBig(arr) {
    var num = 0;
    arr.forEach(function (current, index) {

        if(num < current){
            num = current
        }
        if(index === 2){
            console.log(current)
        }
    })
    return num;
}
returnBig([1,2,3,4])

//Write a function that takes an array, and returns a filtered array. The filtered 
//array should only contain the truthy values from the initial array. Hint: there 
//is an array method called filter that can help you with this :)

*/
var arr;


function isTruthy(el) {
    return el ;
}
var arrTest = [0, 1, true, false, "", "word", "worddup", 8];

var truthies = (arr = arrTest).filter(isTruthy);

console.log(truthies);


/*
//Write a function that takes an array of numbers, and returns the sum of all the 
//numbers in the array.

var arrOfNum = [-43,-62,15,-6,3,-43,23,-76,154,-21,54,9]

var sum;

var sumWithReduce = arrOfNum.reduce(function(acc, num) {
   return acc + num;
}, 0)

console.log(sumWithReduce)

*/