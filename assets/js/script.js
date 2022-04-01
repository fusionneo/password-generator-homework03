// Assignment Code
var generateBtn = document.querySelector("#generate");

const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  alert("Let's generate a secure password for you!");
  alert("You will be prompted for password criteria.\nPlease select at least one character type for your password.")

  //Ask user for password length and validate their input against given criteria.
  var lenPrompt = prompt("How long would you like your password to be? \nPlease enter between 8-128 characters.");
  while (lenPrompt < 8 || lenPrompt > 128 || lenPrompt % 1 !== 0) {
    {
      lenPrompt = prompt("Please enter a valid length between 8-128 characters.");
    }
  }

  // Ask user if they want lowercase chars and validate their input against given criteria.
  //Error checking for lowercase letters.
  var lowerPrompt = prompt("Would you like LOWERCASE characters? \nPlease enter 'Y' or 'N'.");
  var lowerPromptCheck = lowerPrompt.toUpperCase();

  while (lowerPromptCheck != "N" && lowerPromptCheck != "Y") 
    {
      lowerPrompt = prompt("Please enter 'Y' or 'N'.");
      lowerPromptCheck = lowerPrompt.toUpperCase();
    }

  // Ask user if they want uppercase chars and validate their input against given criteria.
  // Error checking for lowercase letters.
  var upperPrompt = prompt("Would you like UPPERCASE characters? \nPlease enter 'Y' or 'N'.");
  var upperPromptCheck = upperPrompt.toUpperCase();

  while (upperPromptCheck != "N" && upperPromptCheck != "Y") 
    {
      upperPrompt = prompt("Please enter 'Y' or 'N'.");
      upperPromptCheck = upperPrompt.toUpperCase();
    }

  // Ask user if they want numbers and validate their input against given criteria.
  // Error checking for lowercase letters.
  var numberPrompt = prompt("Would you like NUMBERS? \nPlease enter 'Y' or 'N'.");
  var numberPromptCheck = numberPrompt.toUpperCase();
  
  while (numberPromptCheck != "N" && numberPromptCheck != "Y") 
    {
      var numberPrompt = prompt("Please enter 'Y' or 'N'.");
      var numberPromptCheck = numberPrompt.toUpperCase();
    }

  // Ask user if they want symbols and validate their input against given criteria.
  // Error checking for lowercase letters.
  var symbolPrompt = prompt("Would you like SYMBOLS? \nPlease enter 'Y' or 'N'.");
  var symbolPromptCheck = symbolPrompt.toUpperCase();
  
  while (symbolPromptCheck != "N" && symbolPromptCheck != "Y") 
    {
      var symbolPrompt = prompt("Please enter 'Y' or 'N'.");
      var symbolPromptCheck = symbolPrompt.toUpperCase();
    }



// If user selected no for all password criteria, alert them to try again and return a null value.
if (lowerPromptCheck == "N" && upperPromptCheck == "N" && numberPromptCheck == "N" && symbolPromptCheck == "N")
  {
    alert("You must select at least one character type.\nPlease click Generate Password and try again.");
    return;
  }

// If the user selected "Y" for a criteria, the corresponding array will be pushed into our userChoice array.
var userChoice = [];

if (lowerPromptCheck == "Y")
  {
    userChoice.push(lowercase)
  }

if (upperPromptCheck == "Y")
  {
    userChoice.push(uppercase)
  }

if (numberPromptCheck == "Y")
  {
    userChoice.push(numberChars)
  }

if (symbolPromptCheck == "Y")
  {
    userChoice.push(specialChars)
  }

// Create a blank variable to store our password.
var generatedPassword = "";

// Iterate through the loop based on the required password length as specified by the user.
for (i = 0; i < lenPrompt; i++)
  {
    // x will generate a random value for which criteria we want to pull from (lowercase, uppercase, numbers, or symbols.)
    // y will generate a random value for the exact character from the given array child we are indexing into.
    x = Math.floor((Math.random() * (userChoice.length)));
    y = Math.floor((Math.random() * (userChoice[x].length)));

    // Begin generating the password for the user.
    var generatedPassword = generatedPassword + userChoice[x][y];
  }

// Return the completed generated password for the user.
return generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
