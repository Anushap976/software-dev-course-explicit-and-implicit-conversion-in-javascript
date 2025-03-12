/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// the '-' operator makes "5" to 5 into a number, so it works as expected, but it could be clearer if we explicitly converts string to a number
// Explicit type conversion to number for correct subtraction, using Number() convert "5" to 5
let result = Number("5") - 2;     
console.log("The result is: " + result);

//Boolean conversion: converts non-empty string to true   
let isValid = Boolean("false");    // "false"(string) is truthy, So isvalid becomes true since it gives output
if (isValid) {
    console.log("This is valid!");
}

//explicit type conversion
let age = "25";
// Converting age from string to number before adding
let totalAge = Number(age) + 5;    
console.log("Total Age: " + totalAge);

// One example of implicit conversion

let number = 30;
let booleanValue = true;
let sumOutput = number + booleanValue;  // implicit conversion booleanvalue 'True' gives value as 1 and returns output 
console.log("Implicit conversion output: " + sumOutput, '-', typeof(sumOutput));

//edge case : null implicitly converted to a number
let nullValue = null;
let sumWithNull = number + nullValue;    // implicit conversion: Null treated as 0
console.log("Implicit conversion with Null: " + sumWithNull, '-', typeof(sumWithNull) );


// One example of explicit conversion
let firstNumber = "10";
let secondNumber = 10.5;
let expectedOutput = firstNumber + secondNumber;  // before explicit conversion returns string
console.log("Explicit conversion output before type conversion: " + expectedOutput, '-', typeof(expectedOutput));
let expectedOutput1 = Number(firstNumber) + secondNumber;  // explicit conversion to number returns number
console.log("Explicit conversion output after type conversion: " + expectedOutput1, '-', typeof(expectedOutput1));

// edge case : Nan explicitly converted to number
let nanNumber = "Good morning";  
let conversionOutput = Number(nanNumber);   // explicit conversion gives NaN 
console.log("Explicit conversion of Nan: " + conversionOutput);