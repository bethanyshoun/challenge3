// Assignment code here
var writePassword;
var passwordLength = window.prompt("How many characters should your password have? Choose a number from 8 to 128.");
var selectLowercase = window.confirm ("Will your password have lowercase characters? Choose 'ok' for yes or 'cancel' for no.");
var selectUppercase = window.confirm ("Will your password have uppcarcase characters? Choose 'ok' for yes or 'cancel' for no.");
var selectNumbers = window.confirm ("Will your password have numbers? Choose 'ok' for yes or 'cancel' for no.");
var selectSpecial = window.confirm ("Will your password have special characters? Choose 'ok' for yes or 'cancel' for no.");

/* writePassword = function () {
  //function to determine password length
  passwordLength = window.prompt("How many characters should your password have? Choose a number from 8 to 128."); 
    
  //validate prompt answer- no value entered
  if (passwordLength === "" || passwordLength === null) {
    window.alert("You must provide a number from 8 to 128.")
    return writePassword();
  } 
  // validate prompt answer - too few characters
  if (passwordLength < 8) {
    window.alert("Too short. Choose at least 8 characters.")
    return writePassword();
  }
  
  //validate prompt answer- too many characters
  if (passwordLength > 128) {
    window.alert("Too long. Your number must be less than 128.")
    return writePassword();
  }

  // if true, save to localStorage and go to the next prompt
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("You chose " + passwordLength + " characters.");
    console.log(passwordLength);
    var passwordLength = true; //*
    //localStorage.setItem("length", passwordLength);
  }
} */


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Call Functon
writePassword ();


