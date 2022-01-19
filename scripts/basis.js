// Initialize document elements
const commentPara = document.getElementById("commentaartekst");
const selectBeschr1 = document.getElementById("beschrijving1");
const selectBeschr2 = document.getElementById("beschrijving2");


function generateBasisFeedback() {
  const gender = returnSelection('gender');
  const displayName = document.getElementById("name");
  const beschrijving1 = selectBeschr1.value;
  const beschrijving2 = selectBeschr2.value;
  result = displayName.value + " " + gender + " " + beschrijving1 + " " + beschrijving2;
  console.log(result);
}

function returnSelection(btnSelector) {
  return document.querySelector(`input[name="${btnSelector}"]:checked`).id;
}