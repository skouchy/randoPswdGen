let theFinalCharSet = '';


const alpha = ["abcdefghijklmnopqrstuvwxyz"];
const numeric = ["1234567890"];
const special = ["!/#$%&'()*+,-.:;<=>?@\"[]^_`{|}~"];


const lowerCase = [...alpha.toString()];
const upperCase = [...alpha.toString().toUpperCase()];
const numChar = [...numeric.toString()];
const specialChar = [...special.toString()];

// * const choiceLower = true;
// * const choiceLength = 9; 
// a method associated with array prototype - the object is the array - 
// alpha, numeric, and special are the prototypes?

// * const choiceLower = confirm("Would you like your password to include lowercase characters?");
if (isChoiceLower) {
    console.log("little alpha");
}

// if (choiceLower) {
//  for (let index = 0; index < choiceLength; index++) {
//      console.log(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
//     // const element = array[index];
    
//  }
// } // T or F

// if (choiceUpper) {
//     for (let index = 0; index < upperCase.length; index++) {
    //         const element = array[index];
        
//     }
// }





    // console.log("=========lowerCase=========");
    // console.log(lowerCase);
    
    // console.log("===========upperCase===========");
    // console.log(upperCase);
    
    // console.log("===============numString===========");
    // console.log(numChar);
    
    // console.log("===============$peci@l===========");
    // console.log(specialChar);