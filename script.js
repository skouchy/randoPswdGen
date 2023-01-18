
const alpha = ["abcdefghijklmnopqrstuvwxyz"];
const numeric = ["1234567890"];
const special = ["!/#$%&'()*+,-.:;<=>?@\"[]^_`{|}~"];

const lowerCase = [...alpha.toString()];
const upperCase = [...alpha.toString().toUpperCase()];
const numChar = [...numeric.toString()];
const specialChar = [...special.toString()];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    let charArray = [];
    let choiceLength = prompt("How many characters would you like your password to include? (Must be a number 8 - 128)", '');
    
    if (choiceLength >= 8 && choiceLength <= 128) {
        console.log(choiceLength);
        
        let choiceLower = confirm("Would you like your password to include lowercase characters?");
        if (choiceLower) {
            charArray = lowerCase.concat(charArray);
            console.log(charArray);
        }
        
        let choiceUpper = confirm("Would you like your password to include UPPERCASE characters?");
        if (choiceUpper) {
            charArray = upperCase.concat(charArray);
            console.log(charArray);
        }
        
        let choiceNumeric = confirm("Would you like your password to include NUM8ER5?");
        if (choiceNumeric) {
            charArray = numChar.concat(charArray);
            console.log(charArray);
        }
        
        let choiceSpecial = confirm("Would you like your password to include $pec!@l characters?");
        if (choiceSpecial) {
            charArray = specialChar.concat(charArray);
            console.log(charArray);
        }
        
        if (!choiceLower && !choiceUpper && !choiceNumeric && !choiceSpecial) {
            alert("Bummer. You must choose at least one character-type! Start over.");
            generatePassword();
        }
    }
    
    else {
        alert("You must choose a valid number between 8 and 128!")
        generatePassword();
    }

    // for (let index = 0; index < choiceLength; index++) {
    //     var genPassword = charArray[Math.floor(Math.random() * charArray.length)];
    //     console.log(genPassword);
    // }
}


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// console.log("=========lowerCase=========");
// console.log(lowerCase);
// console.log("===========upperCase===========");
// console.log(upperCase);
// console.log("===============numString===========");
// console.log(numChar);
// console.log("===============$peci@l===========");
// console.log(specialChar);
// * userInput = parseInt(choiceLength);