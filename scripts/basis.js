// Initialize document elements
const displayName = document.getElementById("name");
const displayTotal = document.getElementById("total");
const commentPara = document.getElementById("commentaartekst");

// Get the student name
const studentName = prompt("Naam van de leerling:", '')
displayName.innerText = studentName;
displayTotal.innerHTML = '';