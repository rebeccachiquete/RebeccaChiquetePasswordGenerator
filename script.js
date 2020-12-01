// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // All of my code will happen between line 12 and the return for generatePassword
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "1234567890";
  var specialCharacters = "!@#$%^&*()";
  var finalPassword = "";
  var userChoice = "";


// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for the length of the password
alert ("Please Enter between 8-128 Characters");
var passwordLength = parseInt(prompt("How many characters do you want the password to be?"));
console.log(passwordLength);
// change the prompt from a string into a number
// DONT FORGET TO VALIDATE PASSWORDLENGTH FOR WORDS
while (passwordLength <8 || passwordLength >128){

}

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
// if lowercase === true, then include lowercase
// if uppercase === true, then include uppercase
// if numbers === true, then include numbers
// if special === true, then include special
if (lowercase === true) {
  var userChoice = lowercaseCharacters;
}

if (lowercase === true && uppercase === true) {
var userChoice = lowercaseCharacters.concat(uppercaseCharacters);
} 
else if (lowercase === false && uppercase === true) {
var userChoice = uppercaseCharacters;
}


if (lowercase === true && uppercase === true && numbers === true) {
var userChoice = lowercaseCharacters.concat(uppercaseCharacters, numberCharacters);
} 
else if (lowercase === true && uppercase === false && numbers === true) {
  var userChoice = lowercaseCharacters.concat(numberCharacters);
} 
else if (lowercase === false && uppercase === true && numbers === true) {
  var userChoice = uppercaseCharacters.concat(numberCharacters);
}
else if (lowercase === false && uppercase === false && numbers === true) {
  var userChoice = numberCharacters;
}


if (lowercase === true && uppercase === true && numbers === true && special === true) {
  var userChoice = lowercaseCharacters.concat(lowercaseCharacters, numberCharacters, specialCharacters);
}
else if(lowercase === false && uppercase === true && number === true && special === true) {
  var userChoice = uppercaseCharacters.concat(numberCharacters, specialCharacters);
}
else if (lowercase === false && uppercase === false && numbers === true && special === true) {
  var userChoice = numberCharacters.concat(specialCharacters);
}
else if (lowercase === false && uppercase === false && numbers === false && special === true) {
  var userChoice = specialCharacters;
}

// Once you have all the possibleCharacters, grab passwordLength amount of characters randomly from possibleCharacters

for(var i = 0; i < passwordLength; i++) {
  userChoice.split("")
  finalPassword +=userChoice[Math.floor(Math.random() * userChoice.length)]
}

// Add those characters together using string concatenation to form your password
// Return it
  return finalPassword;
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
