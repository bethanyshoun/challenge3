//Assignment code here
var generatePassword = function () {
  //set variables for setCritera character types
  var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
	var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "0123456789";
	var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // set passwordLength
	var passwordLength = window.prompt("How many characters should your password have? Choose a number from 8 to 128.");
  	var minLength = parseInt('8');
  	var maxLength = parseInt('128');
    passwordLength = parseInt (passwordLength);
  	if (passwordLength < minLength || passwordLength > maxLength) {
  		window.alert("You must provide a number from 8 to 128.");
      return generatePassword();
   	} else if (Number.isNaN(passwordLength)) {
    		window.alert ("That is not a number.")
        return generatePassword();
    } else { (passwordLength >= minLength && passwordLength <= maxLength) 
      	alert("You chose " + passwordLength + " characters."); 
      }

  //variable for criteria select setCriteria
  var setCriteria = ""    

  //confirm lowercase letters
  var selectLowercase = window.confirm ("Will your password have lowercase characters? Choose 'ok' for yes or 'cancel' for no.");
      if (selectLowercase) {
        setCriteria = setCriteria + lowercase
      }
  
  //confirm uppercase letters
  var selectUppercase = window.confirm ("Will your password have uppcarcase characters? Choose 'ok' for yes or 'cancel' for no.");
      if (selectUppercase) {
        setCritera = setCriteria + uppercase
      }
  
  //confirm numbers
  var selectNumbers = window.confirm ("Will your password have numbers? Choose 'ok' for yes or 'cancel' for no.");
      if (selectNumbers) {
        setCriteria = setCritera + numbers
      }

  //confirm special characters
  var selectSpecial = window.confirm ("Will your password have special characters? Choose 'ok' for yes or 'cancel' for no.");
      if (selectSpecial) {
        setCriteria = setCriteria + special
      }
}

generatePassword();





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

/*
// Call Functon
writePassword ();


// Assignment code here
var writePassword;
var passwordLength = window.prompt("How many characters should your password have? Choose a number from 8 to 128.");
var selectLowercase = window.confirm ("Will your password have lowercase characters? Choose 'ok' for yes or 'cancel' for no.");
var selectUppercase = window.confirm ("Will your password have uppcarcase characters? Choose 'ok' for yes or 'cancel' for no.");
var selectNumbers = window.confirm ("Will your password have numbers? Choose 'ok' for yes or 'cancel' for no.");
var selectSpecial = window.confirm ("Will your password have special characters? Choose 'ok' for yes or 'cancel' for no.");

*/