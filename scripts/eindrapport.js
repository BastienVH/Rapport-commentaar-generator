// Initialize document elements
const commentPara = document.getElementById("commentaartekst");
const displayName = document.getElementById("name");

// code for generate button
const generateBtn = document.getElementById("generateButton");
// generateBtn.addEventListener("click", generateFeedback);

// Set correct gendered words
let aanwijzendVnw = "";
let aanwijzendVnwCap = "";
let bezittVnw = "";
let bezittVnwCap = "";
let lijdVnw = "";

function setPronouns(gender) {
  if (gender == 'jongen') {
    aanwijzendVnw = 'hij';
    bezittVnw = 'zijn';
    lijdVnw = 'hem';
  } else {
    aanwijzendVnw = 'zij';
    bezittVnw = 'haar';
    lijdVnw = 'haar';
  }
  aanwijzendVnwCap = aanwijzendVnw.charAt(0).toUpperCase() + aanwijzendVnw.slice(1);
  bezittVnwCap = bezittVnw.charAt(0).toUpperCase() + bezittVnw.slice(1);
}

function generateFeedback() {
  console.log('generating content...')
  commentPara.innerText = 'This is the content';
}

function returnSelection(btnSelector) {
    return document.querySelector(`input[name="${btnSelector}"]:checked`).value;
}