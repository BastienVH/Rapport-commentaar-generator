// Initialize document elements
const displayName = document.getElementById("name");
const displayTotal = document.getElementById("total");
const commentPara = document.getElementById("commentaartekst");

// Get the student name
const studentName = prompt("Naam van de leerling:", '')
displayName.innerText = studentName;
displayTotal.innerHTML = '';

// Get all grades
let gradeEarRhythm = prompt("Percentage voor ritmisch dictee:");
let gradeEarMelodic = prompt("Percentage voor melodisch dictee:");
let gradeSinging = prompt("Percentage voor zang:");
let gradeTheory = prompt("Percentage voor theorie:");

// Compute student total
gradeTotal = (Number(gradeEarRhythm) + Number(gradeEarMelodic))/8 + Number(gradeSinging)/2 + Number(gradeTheory)/4;

// Rate the rapport card
let ratingTotal;
switch (true) {
  case (gradeTotal >= 90):
    ratingTotal = "een fantastisch rapport";
    break;
  case (gradeTotal >= 80):
    ratingTotal = "een zeer goed rapport";
    break;
  case (gradeTotal >= 70):
    ratingTotal = "een goed rapport";
    break;
  case (gradeTotal >= 60):
    ratingTotal = "een degelijk rapport";
    break;
  case (gradeTotal < 60):
    ratingTotal = "geen goed rapport"
}
// Create Rapport Card comment
commentPara.innerHTML = `Dit is ${ratingTotal}, ${studentName}.`;

// Insert rapport card comment into web page
displayTotal.innerHTML = `${gradeTotal} %`;