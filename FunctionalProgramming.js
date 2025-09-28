//Functional Programming

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount,rate){
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);


/////////////////////////////////////////////////////////

console.log("//////////////");

var twoWords = "";
var wordOne = "rainy";
var wordTwo = "day";

function combineWords(first, second){
    var combined= first+" "+second;
    return combined;
}
twoWords = combineWords(wordOne,wordTwo);

console.log(twoWords);

