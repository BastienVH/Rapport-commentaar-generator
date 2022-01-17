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
    selectedTekst = tekstRadioButton.value;
    console.log(selectedTekst);
  }
}


// Store result for stemgebruik
const stemRadioButtons = document.querySelectorAll('input[name="stemgebruik"]');
let selectedStem
for (const stemRadioButton in stemRadioButtons) {
  if (stemRadioButton.checked) {
    selectedStem = stemRadioButton.value;
    console.log(selectedStem);
  }
}

// Store result for goedmeedoen
const meedoenRadioButtons = document.querySelectorAll('input[name="goedmeedoen"]');
let selectedMeedoen
for (const meedoenRadioButton in meedoenRadioButtons) {
  if (meedoenRadioButton.checked) {
    selectedMeedoen = meedoenRadioButton.value;
    console.log(selectedMeedoen);
  }
}

// Store result for aanwezigheid
const aanwezigheidRadioButtons = document.querySelectorAll('input[name="aanwezigheid"]');
let selectedAanwezigheid
for (const aanwezigheidRadioButton in aanwezigheidRadioButtons) {
  if (aanwezigheidRadioButton.checked) {
    selectedAanwezigheid = aanwezigheidRadioButton.value;
    console.log(selectedAanwezigheid);
  }
}


// Get the student name
// const studentName = prompt("Naam van de leerling:", '')
// displayName.innerText = studentName;
// displayTotal.innerHTML = '';