
const alpha = ["abcdefghijklmnopqrstuvwxyz"];
const numeric = ["1234567890"];
const special = ["!/#$%&'()*+,-.:;<=>?@\"[]^_`{|}~"];

const lowerCase = [...alpha.toString()];
// console.log("=========lowerCase=========");
// console.log(lowerCase);

const upperCase = [...alpha.toString().toUpperCase()];
// console.log("===========upperCase===========");
// console.log(upperCase);

const numChar = [...numeric.toString()];
// console.log("===============numString===========");
// console.log(numChar);

const specialChar = [...special.toString()];
// console.log("===============$peci@l===========");
// console.log(specialChar);


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    console.log("we made it to the fkn writepass fukntion");
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
function generatePassword() {
    let randomChar = '';
    let choiceLength = prompt("How long would you like your password to be?(Must be a number 8-128)", '');

    if (choiceLength >= 8 && choiceLength <= 128) {
        console.log(choiceLength);
        // userInput = parseInt(choiceLength);


        // TODO: WHEN asked for character types to include in the password
        // TODO: THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
        let choiceLower = confirm("Would you like your password to include lowercase characters?");
        let choiceUpper = confirm("Would you like your password to include UPPERCASE characters?");
        let choiceNumeric = confirm("Would you like your password to include numbers?");
        let choiceSpecial = confirm("Would you like your password to include $pec!@l (special) characters?");


        if (choiceLower) {
            console.log(true);
        }
        if (choiceUpper) {
            console.log("ALPHA-DADDY");
        }
        if (choiceNumeric) {
            console.log("lemme get dat numeric");
        }
        if (choiceSpecial) {
            console.log(specialChar);
        }
    }
    else {
        alert("You must choose a valid number between 8-128!");
        generatePassword ();
    }
}
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
