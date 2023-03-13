// Assignment Code
var generateBtn = document.querySelector("#generate");

//creating arrays for all of our possible password characters

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

function generatePassword() {

  // function passQLen() {

    var passLength = parseInt(
      prompt("How long would you like your password to be? (char-min: 8, char-max: 128)")
    )
  
    // now an if statement to confirm they have input in our desired length
  
    if (passLength < 8) {
      return alert("Password must be at least 8 characters long");
    };
  
    // now make sure our user doesn't go higher than 128 characters
  
    if (passLength > 128) {
      return alert("Password cannot be more than 128 characters long");
    };
  
    // our last check is to make sure our user input is a number using isNaN()
  
    if (isNaN(passLength) === true) {
      return alert("Password length must be input in numbers. (ex: '10' or '14')")
    };


  
  
    // this variable will ask the user if they want their password to use lowercase letters

    var useLower = window.confirm("Click 'OK' if you'd like to use lowercase letters in your password.\n\nClick 'Cancel' if you don't.");

    // this variable will ask the user if they want their password to include uppercase letters
  
    var useUpper = window.confirm("Click 'OK' if you'd like to use uppercase letters in your password.\n\nClick 'Cancel' if you don't.");

    // this variable will ask the user if they want numbers used in their password
  
    var useNum = window.confirm("Click 'OK' if you'd like to use numbers in your password.\n\nClick 'Cancel' if you don't.");
  
    // this function is asking the user if they want special characters used in their passwords 
  
    var useSpec = window.confirm("Click 'OK' if you'd like to use special characters in your password.\n\nClick 'Cancel' if you don't.");
 
    // This next code will check to make sure that users selected at least one type of data
    if(!useNum && !useSpec && !useLower && !useUpper){
      alert("Please select at least one character type or no password can be created.")
      generatePassword();
    }

    var passParam = {
      useLower: useLower,
      useUpper: useUpper,
      useNum: useNum,
      useSpec: useSpec
    };

    var passwordGen = '';

    if (passParam.useLower){
      for (var r=0; r<lowerCase.length; r++){
        passwordGen += lowerCase[r];
      }
    }

    if (passParam.useUpper){
      for (var r=0; r<upperCase.length; r++){
        passwordGen += upperCase[r];
      }
    }

    if (passParam.useNum){
      for (var r=0; r<number.length; r++){
        passwordGen += number[r];
      }
    }

    if (passParam.useSpec){
      for (var r=0; r<characters.length; r++){
        passwordGen += characters[r];
      }
    }

    var passReveal = '';

    for (var r=0; r<passLength; r++){
      var ranIndex = Math.floor(Math.random()*passwordGen.length);
      passReveal += passwordGen[ranIndex];
    }


  //this will return our final password that has been created
    return passReveal;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

    // Display the password to the user once it has been created.

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



