
const alpha = ["abcdefghijklmnopqrstuvwxyz"];
const numeric = ["1234567890"];
const special = ["!/#$%&'()*+,-.:;<=>?@\"[]^_`{|}~"];

const lowerCase = [...alpha.toString()];
const upperCase = [...alpha.toString().toUpperCase()];
const numChar = [...numeric.toString()];
const specialChar = [...special.toString()];

// * Provided assignment Code * //
var generateBtn = document.querySelector("#generate");

// * Event listener to #generate.btn on mouse "Click" * //
generateBtn.addEventListener("click", writePassword);


// * Receives {generatePassword} data to input generated characters into #password text-area * //
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


// * Iterates data based on user input only after validating all conditions * //
function generatePassword() {
    let genPassword = '';
    let charArray = [];
    let choiceLength = prompt("How many characters would you like your password to include? (Must be a number 8 - 128)", '');

    //* Validates character limit condition in order to continue *//
    if (choiceLength >= 8 && choiceLength <= 128) {
        console.log(choiceLength); // "if" wraps all conditionals, "else" is below to recall function if null//

    //* Character-types: True values (user confirms) join final array group *//    
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

        //* Validates requirement that a minimum of one character-type is chosen *//
        if (!choiceLower && !choiceUpper && !choiceNumeric && !choiceSpecial) {
            alert("Bummer. You must choose at least one character-type! Start over.");
            return null;
        }
    }

    //* Recalls {generatePassword} if character limit(user input) is invalid *//
    else {
        alert("You must choose a valid number between 8 and 128!")
        return null;
    }

    //* Generates randomized password : user's choice of length and character-types *//
    for (let index = 0; index < choiceLength; index++) {
        var charLoops = charArray[Math.floor(Math.random() * charArray.length)];
        console.log(charLoops);
        genPassword = genPassword + charLoops;
    }
    return genPassword;
}
