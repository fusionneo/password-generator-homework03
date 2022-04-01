// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lenPrompt = prompt("How long would you like your password to be? \nPlease enter between 8-128 characters.");
  while (lenPrompt < 8 || lenPrompt > 128 || lenPrompt % 1 !== 0) {
    {
      lenPrompt = prompt("Please enter a valid length between 8-128 characters.");
    }
  }
  console.log(lenPrompt);

  var lowerPrompt = prompt("Would you like lowercase characters? \nPlease enter 'Y' or 'N'.");
  var lowerPromptCheck = lowerPrompt.toUpperCase();

  while (lowerPromptCheck != "N" && lowerPromptCheck != "Y") 
    {
      lowerPrompt = prompt("Please enter 'Y' or 'N'.");
      lowerPromptCheck = lowerPrompt.toUpperCase();
    }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
