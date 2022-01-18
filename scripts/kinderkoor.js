// Initialize document elements
const displayName = document.getElementById("name");
const displayTotal = document.getElementById("total");
const commentPara = document.getElementById("commentaartekst");

let result = "";

// IMPROVEMENT: create a function which allows the selection of the radiobuttons and returns the value of selected button

// Store result for tekstenkennen
const tekstRadioButtons = document.querySelectorAll('input[name="tekstenkennen"]');
let selectedTekst
for (const tekstRadioButton in tekstRadioButtons) {
  if (tekstRadioButton.checked) {
    selectedTekst = tekstRadioButton.id;
    console.log(selectedTekst);
  }
}


// Store result for stemgebruik
const stemRadioButtons = document.querySelectorAll('input[name="stemgebruik"]');
let selectedStem
for (const stemRadioButton in stemRadioButtons) {
  if (stemRadioButton.checked) {
    selectedStem = stemRadioButton.id;
    console.log(selectedStem);
  }
}

// Store result for goedmeedoen
const meedoenRadioButtons = document.querySelectorAll('input[name="goedmeedoen"]');
let selectedMeedoen
for (const meedoenRadioButton in meedoenRadioButtons) {
  if (meedoenRadioButton.checked) {
    selectedMeedoen = meedoenRadioButton.id;
    console.log(selectedMeedoen);
  }
}

// Store result for aanwezigheid
const aanwezigheidRadioButtons = document.querySelectorAll('input[name="aanwezigheid"]');
let selectedAanwezigheid
for (const aanwezigheidRadioButton in aanwezigheidRadioButtons) {
  if (aanwezigheidRadioButton.checked) {
    selectedAanwezigheid = aanwezigheidRadioButton.id;
    console.log(selectedAanwezigheid);
  }
}

// Draft for function for above functionality

function returnSelection(btnSelector) {
  return document.querySelector(`input[name="${btnSelector}"]:checked`.id);
}

// Expected result example:
// Jente, je bent een fijne meid. Je kent de teksten van de liedjes al heel goed!
// Je kan je stem al goed gebruiken en zingt mooi op toon.
// Je bent vaak aanwezig en doet goed mee. Fijn zo!

/* Draft for result code:
result = `${name}, je bent een fijne ${gender}.\n${tekstengekend}\n${stemgebruik}\n${aanwezigheid}`
*/

// Get the student name
// const studentName = prompt("Naam van de leerling:", '')
// displayName.innerText = studentName;
// displayTotal.innerHTML = '';