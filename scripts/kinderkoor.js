// Initialize document elements
const displayName = document.getElementById("name");
const displayTotal = document.getElementById("total");
const commentPara = document.getElementById("commentaartekst");

let result = "";

function generateFeedback() {
  const fbTekst = returnSelection('tekstenkennen');
  const fbStemgebruik = returnSelection('stemgebruik');
  const fbMeedoen = returnSelection('goedmeedoen');
  const fbAanwezigheid = returnSelection('aanwezigheid');
  // Log to console to test returned values
  console.log(`Teksten kennen: ${fbTekst}\n Stemgebruik: ${fbStemgebruik}\n Meedoen: ${fbMeedoen}\n Aanwezigheid: ${fbAanwezigheid}`);
}

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