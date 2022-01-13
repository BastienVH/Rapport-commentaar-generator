// Get the student name
let studentName = prompt("Naam van de leerling:", '');

// Get all grades
let gradeEarRhythm = prompt("Percentage voor ritmisch dictee:");
let gradeEarMelodic = prompt("Percentage voor melodisch dictee:");
let gradeSinging = prompt("Percentage voor zang:");
let gradeTheory = prompt("Percentage voor theorie:");

// Compute student total
gradeTotal = Number(gradeEarRhythm) + Number(gradeEarMelodic) + Number(gradeSinging) + Number(gradeTheory);

// Create Rapport Card comment


// Insert rapport card comment into web page
alert(`${gradeTotal} %`);