//Write a JavaScript function that reverse a number.
console.log();
console.log("The First Questions: ");
console.log();
function reverseNumber(number) {
  // Convert the number to a string.
  let strNumber = number.toString();

  // Reverse the string.
  strNumber = strNumber.split('').reverse().join('');

  // Convert the reversed string back to a number.
  return Number(strNumber);
}

console.log();

let number = 98765;
console.log("The Number Before reverse is " + number); // 98765
console.log();
let reversedNumber = reverseNumber(number);

console.log("The Number After reverse is " + reversedNumber); // 56789

console.log();

/*Write a JavaScript function that accepts a string
as a parameter and converts the first letter of each
word of the string in upper case.*/

console.log("The Second Questions: ");
console.log();

function capitalizeFirstLetterOfEachWord(str) {
    // Split the string into an array of words.
    let words = str.split(' ');
  
    // Loop through the words and capitalize the first letter of each word.
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    // Join the words back into a string.
    return words.join(' ');
  }

let str = "tuwaiq academy";

let capitalizedStr = capitalizeFirstLetterOfEachWord(str);

console.log(capitalizedStr); //Tuwaiq Academy

/*Write a JavaScript function that accepts a string
as a parameter and counts the number of vowels within
the string.*/

console.log();

console.log("The Third Questions: ");
console.log();


let string1 = "Javascript is awesome ";

console.log("The String is " + string1);
console.log();

let vowelCount = countVowels(string1);


console.log("The Number of vowels are "+vowelCount); // 8

function countVowels(str) {
    // Create an array of vowels.
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Initialize the vowel count to 0.
    let vowelCount = 0;
  
    // Loop through the characters in the string.
    for (const element of str) {
      // Check if the current character is a vowel.
      if (vowels.includes(element)) {
        // Increment the vowel count.
        vowelCount++;
      }
    }
  
    // Return the vowel count.
    return vowelCount;
  }


  /*Write a JavaScript function that accepts a number
as a parameter and check the number is prime or not.
Info : 

A prime number (or a prime) is a natural
number greater than 1 that has no positive divisors
other than 1 and itself.*/

console.log();

console.log("The Fourth Questions: A prime number");


function test_prime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  console.log(test_prime(1));
  console.log(test_prime(2));

  
console.log();

console.log("The Questions #5 ");
console.log();

/*Write a JavaScript function that accepts a string
as a parameter and find the longest word within the
string.
Example string : 'Kingdom of Saudi arabia'
Expected Output : ‘kingdom'*/


function findLongestWord(str) {
    // Split the string into an array of words.
    let words = str.split(' ');
  
    // Initialize the longest word to the first word in the array.
    let longestWord = words[0];
  
    // Loop through the words and find the longest word.
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    // Return the longest word.
    return longestWord;
  }

  let Word = "Kingdom of Saudi arabia";

let longestWord = findLongestWord(Word);

console.log(longestWord); // "jumped"



console.log();

console.log("The Questions #6 ");

console.log();

/*Write a JavaScript function that returns a passed
string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : ‘abeemrstw'*/

function sortString(str) {
    // Split the string into an array of characters.
    let chars = str.split('');
  
    // Sort the characters in the array.
    chars.sort();
  
    // Join the characters back into a string.
    return chars.join('');
  }

  let stringsort = "webmaster";

let sortedStr = sortString(stringsort);

console.log(sortedStr); // ‘abeemrstw

/*

Create a function that takes two numbers as
arguments and returns their sum
Examples
addition(3, 2) ➞ 5
addition(-3, -6) ➞ -9
addition(7, 3) ➞ 10

*/

console.log();

console.log("The Questions #7 ");

console.log();

console.log("The Result is " + addition(3, 2));

console.log("The Result is " +addition(-3, -6));

console.log("The Result is " +addition(7, 3));

function addition(number1,number2){

    let Result = number1 + number2;

    return Result;
}


console.log();

console.log("The Questions #8 ");

console.log();

/*

Create a function that takes the age in years and
returns the age in days.
EXAMPLES
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7320

*/ 

console.log();

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true

console.log();
  console.log("Leap Year");
  console.log();
  function isLeapYear(year) {
    // A year is a leap year if it is divisible by 4 and not divisible by 100,
    // or if it is divisible by 4 and is divisible by 100 and is divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0);
  }

  console.log();
  console.log();

console.log("Age from Years to DaysThe Result is " + calcAge(65));

console.log("Age from Years to Days " + calcAge(0));

console.log("Age from Years to Days " + calcAge(20) );

console.log("Age from Years to Days " + calcAge(26) );
 

function calcAge(age) {
  // There are 365 days in a non-leap year and 366 days in a leap year.
  let daysInYear = 365;
  if (isLeapYear(age)) {
    daysInYear = 366;
  }

  // The age in days is the age in years multiplied by the number of days in a year.
  return age * daysInYear;
}


console.log();

console.log("The Questions #9 ");

console.log();

/*Write a function that converts hours into
seconds.
Examples
howManySeconds(2) ➞ 7200
howManySeconds(10) ➞ 36000
howManySeconds(24) ➞ 86400*/


console.log("Convert from hours to seconds " + howManySeconds(2));

console.log("Convert from hours to seconds " + howManySeconds(10) );

console.log("Convert from hours to seconds " + howManySeconds(24) );
 

function howManySeconds(hours) {
 
  let hoursToseconds = 3600 * hours ;
  
  return hoursToseconds;
}

/*Create a function that takes a number as its
only argument and returns true if it's less than or
equal to zero, otherwise return false.
Examples
lessThanOrEqualToZero(5) ➞ false
lessThanOrEqualToZero(0) ➞ true
lessThanOrEqualToZero(-2) ➞ true*/

console.log();

console.log("The Questions #10 ");

console.log();


console.log("less Than Or Equal To Zero " + lessThanOrEqualToZero(5));

console.log("less Than Or Equal To Zero " + lessThanOrEqualToZero(0) );

console.log("less Than Or Equal To Zero " + lessThanOrEqualToZero(-2) );
 

function lessThanOrEqualToZero(number) {

let result =false; 

 if(number<=0){
 result = true ;
}

  return result;


}


/*Create a function that will return an integer number
corresponding to the amount of digits in the given integer num
Examples
num_of_digits(1000) ➞ 4
num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10
num_of_digits(0) ➞ 1
*/

console.log();

console.log("The Questions #11 ");

console.log();


console.log("Number of Digits " + num_of_digits(1000));

console.log("Number of Digits " + num_of_digits(12));

console.log("Number of Digits " + num_of_digits(1305981031));

console.log("Number of Digits " + num_of_digits(0));
 

function num_of_digits(number) {

let result = number.toString().length; 

  return result;

}


/*

 12.Write a function that converts an object into
an array, where each element represents a key value pair in the form of an array.
Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15],["tots", 12]] toArray({}) ➞ []

*/ 


console.log();

console.log("The Questions #12 ");

console.log();


function objectToKeyValueArray(obj) {
    // Create an empty array to store the key-value pairs.
    let array = [];
    //This function uses the hasOwnProperty() method to check if the property is enumerable. 
    //If it is, then the property is added to the array.
    // Loop through the object's properties.
    for (let key in obj) {
      // If the property is enumerable, then add it to the array.
      if (obj.hasOwnProperty(key)) {
        array.push([key, obj[key]]);
      }
    }
  
    // Return the array.
    return array;
  }


  let obj = { a: 1, b: 2 };
  let obj2 = { shrimp: 15, tots: 12 };
  let obj3 = {};
  
  let array = objectToKeyValueArray(obj);
  let array2 = objectToKeyValueArray(obj2);
  let array3 = objectToKeyValueArray(obj3);

  
  console.log(array); 
  console.log(array2); 
  console.log(array3); 


console.log();

console.log("The Questions #13 ");

console.log();


/*13. salesman has a number of cities to visit. They
want to calculate the total number of possible paths
they could take, visiting each city once before
returning home. Return the total number of possible
paths a salesman can travel, given n cities.
If we have cities A, B and C, possible paths would
be:
A -> B -> C
A -> C -> B
B -> A -> C
B -> C -> A
C -> B -> A
C -> A -> B
... which gives us 6 as the possible number of paths.
Examples
paths(4) ➞ 24
paths(1) ➞ 1
paths(9) ➞ 362880*/

function paths(n) {
    // Calculate the factorial of n.
    if (n === 0) {
      return 1;
    } else {
      return n * paths(n - 1);
    }
  }


console.log("The Total Path is  " + paths(6));
console.log();
console.log("The Total Path is "  + paths(4));
console.log();
console.log("The Total Path is  " + paths(1));
console.log();
console.log("The Total Path is  " + paths(9));



console.log();

console.log("The Questions #14 ");

console.log();

/*
14.Create a function that takes a word and
returns true if the word has two consecutive identical
letters.
Examples
doubleLetters("loop") ➞ true
doubleLetters("yummy") ➞ true
doubleLetters("orange") ➞ false
doubleLetters("munchkin") ➞ false
*/


function doubleLetters(word) {
    // Loop through the characters in the word.
    for (let i = 0; i < word.length - 1; i++) {
      // If the current character is the same as the next character, then return true.
      if (word[i] === word[i + 1]) {
        return true;
      }
    }
  
    // If we reach this point, then the word does not have two consecutive identical letters.
    return false;
  }


console.log("The Total Path is  " + doubleLetters("loop"));
console.log();
console.log("The Total Path is "  + doubleLetters("yummy"));
console.log();
console.log("The Total Path is  " + doubleLetters("orange"));
console.log();
console.log("The Total Path is  " + doubleLetters("munchkin"));


console.log();

console.log("The Questions #15 ");

console.log();


/*5.Write a JavaScript program to get the current date.
Expected
Output : 
mm-dd-yyyy,
mm/dd/yyyy 
 or 
dd-mm-yyyy,
dd/mm/yyyy
*/


function getCurrentDate(format) {
    // Create a new Date object.
    let today = new Date();
  
    // Get the year, month, and day of the month.
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
  
    // Return the current date in a formatted string.
    switch (format) {
      case "mm-dd-yyyy":
        return `${month}-${day}-${year}`;
      case "mm/dd/yyyy":
        return `${month}/${day}/${year}`;
      case "dd-mm-yyyy":
        return `${day}-${month}-${year}`;
      case "dd/mm/yyyy":
        return `${day}/${month}/${year}`;
      default:
        return `${year}-${month}-${day}`;
    }
  }


  let currentDate = getCurrentDate("mm-dd-yyyy");

console.log(currentDate); // 05-30-2023
console.log();
currentDate = getCurrentDate("mm/dd/yyyy");
console.log();
console.log(currentDate); // 05/30/2023
console.log();
currentDate = getCurrentDate("dd-mm-yyyy");

console.log(currentDate); // 30-05-2023
console.log();
currentDate = getCurrentDate("dd/mm/yyyy");

console.log(currentDate); // 30/05/2023

console.log();

console.log("The Questions #16: ");

console.log();

/*
16. Create a function that takes two dates and returns
the number of days between the first and second date.

Examples:

getDays(new Date("June 14, 2019"), new Date("June 20, 2019")) ➞ 6
getDays(new Date("December 29, 2018"),new Date("January 1, 2019")) ➞ 3

// Dates may not all be in the same month/year.
getDays( new Date("July 20, 2019"),new Date("July 30, 2019")) ➞ 10

*/

function getDays(startDate, endDate) {
    // Create new Date objects from the input dates.
    let start = new Date(startDate);
    let end = new Date(endDate);
  
    // Get the difference between the two dates in milliseconds.
    let differenceInMilliseconds = end.getTime() - start.getTime();
  
    // Convert the difference in milliseconds to days.
    let days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
    // Return the number of days.
    return days;
  }
 
  let startDate = new Date("June 14, 2019");
  let endDate = new Date("June 20, 2019");
  
  let daysBetweenDates = getDays(startDate, endDate);
  
  console.log(daysBetweenDates); // 6



console.log();

console.log("The Questions #18: ");

console.log();

/*
18.Write a JavaScript program that accept two numbers and
print the larger number
*/


let FirstNumber = 10;
let SecondNumber = 5;
console.log();
console.log("The First Number is "+ FirstNumber);
console.log();
console.log("The Second Number "+ SecondNumber);

if(FirstNumber>SecondNumber){
console.log("The First Number is bigger from Second Number " + FirstNumber );

}
else{
    console.log("The Second Number is bigger from First Number " + SecondNumber );

}


console.log();

console.log("The Questions #18: ");

console.log();


/*

19. You go to a jewelry shop and try to find the most
expensive piece of jewelry. You write down the name of
each piece of jewelry and its price.
Create a function that gets the name of the piece of
jewelry with the highest price and returns "The most
expensive one is the {name of jewelry piece}".
Examples
mostExpensive ({
 "Diamond Earrings": 980,
 "Gold Watch": 250,
 "Pearl Necklace": 4650
}) ➞ "The most expensive one is the Pearl Necklace"
mostExpensive({
 "Silver Bracelet": 280,
 "Gemstone Earrings": 180,
 "Diamond Ring": 3500
}) ➞ "The most expensive one is the Diamond Ring"

*/

/*
The three dots in the code ...Object.values(jewelry) is called the spread operator. It is used to expand an iterable into individual elements. In this case, the iterable is the values() method of the Object object. The spread operator will expand the values() method into an array of all the values in the object. This array is then passed to the Math.max() function, which will return the maximum value in the array.

The spread operator is a new feature in JavaScript that was introduced in ES6. 
It is a very powerful tool that can be used to simplify code and make it more readable.*/

function mostExpensive(jewelry) {
    // Get the maximum price of all the jewelry items.
    let maxPrice = Math.max(...Object.values(jewelry));
  
    // Get the name of the jewelry item with the maximum price.
    let mostExpensiveItem = Object.keys(jewelry).find(key => jewelry[key] === maxPrice);
  
    // Return the message.
    return `The most expensive one is the ${mostExpensiveItem}`;
  }

  let jewelry1 = {
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
};

let mostExpensive1 = mostExpensive(jewelry1);

console.log(mostExpensive1); // The most expensive one is the Pearl Necklace

let jewelry2 = {
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
};

let mostExpensive2 = mostExpensive(jewelry2);

console.log(mostExpensive2); // The most expensive one is the Diamond Ring



/*

Mubashir needs your help to find out number of
animals hidden in a given string txt.
You are provided with an array of animals given below:
animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"]

*/ 

console.log();

console.log("The Questions #19: ");

console.log();

function countAnimals(txt) {
    const animals = ["dog", "cat", "bat", "cock", "cow", "pig",
                   "fox", "ant", "bird", "lion", "wolf", "deer", "bear",
                   "frog", "hen", "mole", "duck", "goat"];
  
    let count = 0;
    let maxCount = 0;
  
    for (let i = 0; i < txt.length; i++) {
      for (const animal of animals) {
        if (txt.indexOf(animal, i) !== -1) {
          txt = txt.slice(i + animal.length);
          count++;
          maxCount = Math.max(count, maxCount);
        }
      }
    }
  
    return maxCount;
  }



console.log(countAnimals("dog")); // 2
console.log(countAnimals("cockdogwdufrbir")); // 4
console.log(countAnimals("dogdogdogdogdog")); // 5





  

















