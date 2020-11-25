// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // All of your code will happen between line 12 and the return for generatePassword
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "1234567890";
  var specialCharacters = "!@#$%^&*()";

  var UserChoice;

  var finalPassword = [];


// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for the length of the password
var passwordLength = parseInt(prompt("How many characters do you want the password to be?"));
console.log(passwordLength);
// change the prompt from a string into a number
// DONT FORGET TO VALIDATE PASSWORDLENGTH FOR WORDS
  // THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
var lowercase = confirm("Would you like to include lowercase in your password?");
console.log("lowercase is " + lowercase);
var uppercase = confirm("Would you like to include uppercase in your password?");
console.log({uppercase});
var numbers = confirm("Would you like to include numbers in your password?");
console.log(numbers);
var special = confirm("Would you like to include Special Characters in your password?");
console.log(special);
// THEN my input should be validated and at least one character type should be selected




// IF STATEMENTS (to gather each set into one big string)
if (lowercase === "yes") {
  var UserChoice = lowercaseCharacters;
}


if (lowercase === "yes" && uppercase === "yes") {
var UserChoice = lowercaseCharacters.concat(uppercaseCharacters);
} 
else if (lowercase === "no" && uppercase === "yes") {
var UserChoice = uppercaseCharacters;
}


if (lowercase === "yes" && uppercase === "yes" && numbers === "yes") {
var UserChoice = lowercaseCharacters.concat(uppercaseCharacters, numberCharacters);
} 
else if (lowercase === "yes" && uppercase === "no" && numbers === "yes") {
  var UserChoice = lowercaseCharacters.concat(numberCharacters);
} 
else if (lowercase === "no" && uppercase === "yes" && numbers === "yes") {
  var UserChoice = uppercaseCharacters.concat(numberCharacters);
}
else if (lowercase === "no" && uppercase === "no" && numbers === "yes") {
  var UserChoice = numberCharacters;
}


if (lowercase === "yes" && uppercase === "yes" && numbers === "yes" && special === "yes") {
  var UserChoice = lowercaseCharacters.concat(lowercaseCharacters, numberCharacters, specialCharacters);
}
else if(lowercase === "no" && uppercase === "yes" && number === "yes" && special === "yes") {
  var UserChoice = uppercaseCharacters.concat(numberCharacters, specialCharacters);
}
else if (lowercase === "no" && uppercase === "no" && numbers === "yes" && special === "yes") {
  var UserChoice = numberCharacters.concat(specialCharacters);
}
else if (lowercase === "no" && uppercase === "no" && numbers === "no" && special === "yes") {
  var UserChoice = specialCharacters;
}



// if lowercase === true, then include lowercase
// if uppercase === true, then include uppercase
// if numbers === true, then include numbers
// if special === true, then include special

// Once you have all the possibleCharacters, grab passwordLength amount of characters randomly from possibleCharacters



// Add those characters together using string concatenation to form your password
// Return it
  return "something"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Primitive Datatypes
  // Strings
  // Booleans
  // Numbers

// Complex Datatypes
  // Objects & Arrays
  // Functions

// String concatenation
//when you add a string to another variable
