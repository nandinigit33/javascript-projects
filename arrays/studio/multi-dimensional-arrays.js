const input = require("readline-sync");

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",").sort();
let equipmentArray = equipment.split(",").sort();
let petsArray = pets.split(",").sort();
let sleepAidsArray = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userNumber = input.question(`Please choose a cabinet:
0 - Food 
1-  Equipment
2 - Pets
3 - Sleep Aids
`);

let userSelectedCabinet;

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userNumber < 0 || userNumber > 3) {
  console.log("This is not a valid Cabinet Number");
} else {
  userSelectedCabinet = cargoHold[userNumber];
  console.log(userSelectedCabinet);

  //5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
  let userSelectedItem = input.question(
    "Which item would you choose from the Selected Cabinet? "
  );

  let containsText = "DOES";

  if (!userSelectedCabinet.includes(userSelectedItem)) {
    containsText += " NOT";
  }

  console.log(`Cabinet ${containsText} contain ${userSelectedItem}.`);
}
