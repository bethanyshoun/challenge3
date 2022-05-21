// Assignment code here
var writePassword = function () {
  //function to determine password length
  var passwordLength = window.prompt("How many characters should your password have? Choose a number from 8 to 128."); 

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

// Call Functon
writePassword ();

//If click on the button to generate a password

//Then prompoted for password critera

//If prompted for password criteria

//Then slect which criteria to include

//If prompted for length of password

//Then choose a length from 8-128 characters

//IF asked for character types to include

//Then choose from any/some/all of lowercase, uppercase, numeric and/or special characters

//If I answer each prompt

//Then my input should be validated and at least one character type selelcted

//If all prompts are answered

//Then a password is generated to match selected criteria

//Password is displayed in an alert or written on the page
