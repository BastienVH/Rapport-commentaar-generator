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
gradeTotal = (Number(gradeEarRhythm) + Number(gradeEarMelodic) + Number(gradeSinging) + Number(gradeTheory))/4;

// Create Rapport Card comment
commentPara.innerHTML = `Dit is een ... rapport, ${studentName}`;

// Insert rapport card comment into web page
displayTotal.innerHTML = `${gradeTotal} %`;