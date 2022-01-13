// Get the student name
let studentName = document.getElementById("name");
let displayTotal = document.getElementById("total");
studentName.innerText = prompt("Naam van de leerling:", '');
displayTotal.innerHTML = '';

// Get all grades
let gradeEarRhythm = prompt("Percentage voor ritmisch dictee:");
let gradeEarMelodic = prompt("Percentage voor melodisch dictee:");
let gradeSinging = prompt("Percentage voor zang:");
let gradeTheory = prompt("Percentage voor theorie:");

// Compute student total
gradeTotal = (Number(gradeEarRhythm) + Number(gradeEarMelodic) + Number(gradeSinging) + Number(gradeTheory))/4;

// Create Rapport Card comment


// Insert rapport card comment into web page
displayTotal.innerHTML = `${gradeTotal} %`;