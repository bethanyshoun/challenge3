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
  var selectLowercase = window.confirm ("Will your password have lowercase letters? Choose 'ok' for yes or 'cancel' for no.");
      if (selectLowercase)  {
        setCriteria = setCriteria + lowercase
        window.alert("Your password will have lowercase letters.");
      }
      else { ("" === selectLowercase) 
        window.alert("Your password will not have lowercase letters.");
      }
  
  //confirm uppercase letters
  var selectUppercase = window.confirm ("Will your password have uppcarcase letters? Choose 'ok' for yes or 'cancel' for no.");
      if (selectUppercase) {
        setCriteria = setCriteria + uppercase
        window.alert("Your password will have uppercase letters.");
      }
      else { ("" === selectUppercase) 
        window.confirm("Your password will not have uppercase letters.");
      }
  //confirm numbers
  var selectNumbers = window.confirm ("Will your password have numbers? Choose 'ok' for yes or 'cancel' for no.");
      if (selectNumbers) {
        setCriteria = setCriteria + numbers
        window.alert("Your password will have numbers.");
      }
      else { ("" === selectNumbers) 
        window.confirm("Your password will not have numbers.");
      }

  //confirm special characters
  var selectSpecial = window.confirm ("Will your password have special characters? Choose 'ok' for yes or 'cancel' for no.");
      if (selectSpecial) {
        setCriteria = setCriteria + special
        window.alert("Your password will have special characters.");
      }
      else { ("" === selectSpecial) 
        window.confirm("Your password will not have characters.");
      }

      //if no criteria selected
      if (setCriteria === "") {
        window.alert("You must choose one or more set of criteria.")
        return generatePassword();
      }
  //begin generating password
  var password = ""
        while (password.length < passwordLength) {
          var randomIndex = Math.floor(Math.random() * setCriteria.length);
          var randomCharacters = setCriteria.charAt(randomIndex);
          password = password + randomCharacters
        }
      return password
}

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