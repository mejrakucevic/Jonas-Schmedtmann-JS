// Values and Variables

const country = "Serbia";
const continent = "Europe";
let Serbiapopulation = 8651165;
const isIsland = false;

const language = "Serbian";

let finalnd = 6000000;


console.log(typeof country, typeof isIsland, typeof Serbiapopulation, typeof language);

FirsthalfOfSerbianPopulation = 4325582;
SecondHalfOfSerbianPopulation = 4325583;

Serbiapopulation ++;
console.log(Serbiapopulation);


console.log(Serbiapopulation > finalnd);

const averagePopulation = 33000000;
console.log(Serbiapopulation > averagePopulation);

const description = (country + ' '+  "is in" + ' '+ continent +' ' + "and it's"+  ' ' +Serbiapopulation +' ' +"people speak" + " " + language);
console.log(description);

// String and template literals


const newDescription = `${country} is in ${continent} and it's ${Serbiapopulation} people speak ${language}`;

console.log(newDescription);

// if else

// 1. If your country's population is greater that 33 million, log a string like this to the 
// console: 'Portugal's population is above average'. Otherwise, log a string like 
// 'Portugal's population is 22 million below average' (the 22 is the average of 33 
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to 
// 130. See the different results, and set the population back to origina

if (Serbiapopulation > 33000000) {
    console.log("Serbia's population is above average. ")
} else {
    console.log("Serbia's population is 22 million below average. ")
}

// type coericon

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17);  //  23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143