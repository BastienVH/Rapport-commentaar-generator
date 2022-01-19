// Initialize document elements
const commentPara = document.getElementById("commentaartekst");
const selectBeschr1 = document.getElementById("beschrijving1");
const selectBeschr2 = document.getElementById("beschrijving2");
const eigenTekst = document.getElementById("eigenTxt");

// code for generate button
const generateBtn = document.getElementById("generateButton");
generateBtn.addEventListener("click", generateBasisFeedback);


function generateBasisFeedback() {
  // Get selected values from the form
  const gender = returnSelection('gender');
  const displayName = document.getElementById("name");
  const beschrijving1 = selectBeschr1.value;
  const beschrijving2 = selectBeschr2.value;
  const eigenTekstje = eigenTekst.value;
  const samenwerken = returnSelection("samenwerken");
  // Combine selected values to create a temporary string to output
  result = displayName.value + " is een " + beschrijving1 + " en " + beschrijving2 + " " + gender + ".\n";
  // Check if something has been entered for eigenTekstje
  if (eigenTekstje) {
    result += eigenTekstje +"\n";
  }
  result += samenwerken + "\n";

  // Output result to webpage
  commentPara.innerHTML = result;
}

function returnSelection(btnSelector) {
  return document.querySelector(`input[name="${btnSelector}"]:checked`).id;
}