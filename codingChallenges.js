// 1.
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall

// const markWeight = 78;
// const markHeight = 1.69;

// const JohnWeight = 120;
// const JohnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const JohnBMI = JohnWeight / JohnHeight ** 2;

// if (markBMI > JohnBMI) {
//     console.log(`Mark's BMI, (${markBMI}) is higher than John's! `)
// } else {
//     console.log(`John's BMI (${JohnBMI}) is higer than Mark's! `)
// }


// 2.
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 10

const dolphinsPoints = 96 + 108 + 89 + 97 + 112 + 101 + 97 + 112 + 101;
const dolphinsAverage = dolphinsPoints / 9;

const koalasPoints = 89 + 91 + 110 + 109 + 95 + 123 + 109 + 95 + 10;
const koalasAverage = koalasPoints / 9;

if ( dolphinsPoints >= 100 && dolphinsAverage > koalasAverage ) {
    console.log(`Dolphins team wins the trophy with ${dolphinsPoints} points! `)
} else if (koalasPoints >= 100 && koalasAverage > dolphinsAverage) {
    console.log(`Koalas team wins the trophy with ${koalasPoints} points! `)
} else if (koalasPoints && dolphinsPoints >= 100 && koalasAverage === dolphinsAverage) {
    console.log(`It's a draw! Both teams have exactly ${koalasPoints} points! `)
} else ("Both teams have less than a 100 points, no one wins! ")
